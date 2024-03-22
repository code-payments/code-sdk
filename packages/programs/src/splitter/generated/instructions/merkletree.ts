import { keccak256 } from 'js-sha3';
import { MerkleTree as MerkleTreeType } from '../types/MerkleTree';

// Represents a compressed Merkle proof, including the path to the leaf, the hashes of sibling nodes, and the leaf's index.
class CompressedMerkleProof {
  constructor(public path: boolean[], public hashes: Uint8Array[], public leafIndex: bigint) {}

  // Verifies the compressed Merkle proof against a given root hash and leaf hash.
  // Returns true if the proof is valid, otherwise false.
  verify(rootHash: Uint8Array, leafHash: Uint8Array): boolean {
    // Check if the proof structure is valid by comparing the lengths of path and hashes.
    if (this.path.length !== this.hashes.length) {
      return false; // Invalid proof structure
    }

    let hash = leafHash; // Start with the leaf hash.
    // Iterate over the path to compute the hash up to the root.
    for (let i = 0; i < this.path.length; i++) {
      const bit = this.path[i]; // The direction of the path (left or right).
      const siblingHash = this.hashes[i]; // The sibling node's hash.
      // Combine the hash with its sibling's hash based on the path direction.
      hash = bit ? MerkleTree.hashCombine(hash, siblingHash) : MerkleTree.hashCombine(siblingHash, hash);
    }

    // Compare the computed hash to the given root hash.
    return MerkleTree.arraysEqual(hash, rootHash);
  }
}

// Represents a sparse Merkle tree.
class MerkleTree implements MerkleTreeType {
  private levels: number; // The number of levels in the tree.
  private nextIndex: bigint; // The next index for a new leaf.
  private root: Uint8Array; // The root hash of the tree.
  private filledSubtrees: Uint8Array[][]; // The hashes of filled subtrees.
  private zeroValues: Uint8Array[][]; // The zero values for each level of the tree.
  private nodes: Map<string, Uint8Array> = new Map(); // A map to store the nodes of the tree.

  constructor() {
    this.levels = 0;
    this.nextIndex = BigInt(0);
    this.root = new Uint8Array(32).fill(0); // Initialize the root hash.
    this.filledSubtrees = [];
    this.zeroValues = [];
  }

  // Updates the Merkle tree with a new leaf and returns the leaf's index.
  update(leaf: Uint8Array): bigint {
    const leafIndex = this.nextIndex; // Store the current index before incrementing.
    let path: boolean[] = []; // Path to the new leaf.
    let hash = leaf; // Start with the leaf hash.
    let currentNode = hash; // The current node being processed.
    // Iterate until the currentNode is empty.
    while (currentNode.length > 0) {
      const bit = currentNode[currentNode.length - 1] === 1; // Determine the direction for the path.
      path.push(bit);
      this.nodes.set(path.join(''), hash); // Store the node.
      const siblingPath = MerkleTree.siblingPath(path); // Calculate the sibling path.
      const siblingHash = this.nodes.get(siblingPath.join('')) || new Uint8Array(); // Get the sibling hash.
      hash = MerkleTree.hashCombine(hash, siblingHash); // Combine the hashes.
      currentNode = hash; // Update the current node.
    }
    this.nextIndex++; // Increment the index for the next leaf.
    return leafIndex; // Return the index of the added leaf.
  }

  // Generates a compressed Merkle proof for a given leaf index.
  getProof(leafIndex: bigint): CompressedMerkleProof {
    if (leafIndex >= this.nextIndex) {
      throw new Error('Leaf index out of bounds'); // Ensure the leaf index is valid.
    }

    const path: boolean[] = []; // Path to the leaf.
    let currentIndex = leafIndex; // Start with the leaf index.
    // Build the path by iterating over the index.
    while (currentIndex > 0) {
      const bit = currentIndex % BigInt(2) === BigInt(1); // Determine the direction for the path.
      path.push(bit);
      currentIndex = currentIndex / BigInt(2); // Move up the tree.
    }
    path.reverse(); // Reverse the path to start from the root.

    const hashes: Uint8Array[] = []; // Hashes of the sibling nodes along the path.
    for (const bit of path) {
      const siblingPath = MerkleTree.siblingPath(path.slice(0, -1)); // Calculate the sibling path.
      const siblingHash = this.nodes.get(siblingPath.join('')); // Get the sibling hash.
      if (siblingHash) {
        hashes.push(siblingHash); // Add the sibling hash to the list.
      }
      path.pop(); // Move to the next node up.
    }
    hashes.reverse(); // Reverse the hashes to match the path order.

    return new CompressedMerkleProof(path, hashes, leafIndex); // Return the proof.
  }

  // Calculates the sibling path for a given path.
  private static siblingPath(path: boolean[]): boolean[] {
    const siblingPath = [...path];
    const lastBit = siblingPath.pop()!; // Remove the last bit to get the parent node.
    siblingPath.push(!lastBit); // Add the opposite bit to get the sibling path.
    return siblingPath;
  }

  // Combines two hashes using the Keccak hash function.
  private static hashCombine(left: Uint8Array, right: Uint8Array): Uint8Array {
    const combined = new Uint8Array([...left, ...right]); // Combine the two hashes.
    return new Uint8Array(keccak256.arrayBuffer(combined)); // Return the Keccak hash of the combination.
  }

  // Checks if two Uint8Arrays are equal.
  private static arraysEqual(a: Uint8Array, b: Uint8Array): boolean {
    if (a.length !== b.length) return false; // First check the lengths.
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false; // Then check each element.
    }
    return true; // If all checks pass, the arrays are equal.
  }
}

export { MerkleTree, CompressedMerkleProof };
