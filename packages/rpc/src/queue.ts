/**
 * An asynchronous queue implementation that allows enqueueing items and
 * dequeueing them asynchronously, effectively allowing for producers and
 * consumers to operate independently, even when one is faster than the other.
 *
 * @typeparam T The type of elements held in this collection.
 */
class AsyncQueue<T> {
  private readonly items: T[];
  private readonly resolves: Array<(value: T | PromiseLike<T>) => void>;

  /**
   * Initializes a new instance of the AsyncQueue class.
   */
  constructor() {
    this.items = [];
    this.resolves = [];
  }

  /**
   * Enqueues an item into the asynchronous queue. If there's a dequeue operation
   * waiting for an item, the item is immediately consumed by that operation.
   * Otherwise, the item is stored in the queue.
   *
   * @param item - The item to enqueue.
   * @returns A promise that resolves when the enqueue operation is completed.
   */
  async enqueue(item: T): Promise<void> {
    if (this.resolves.length > 0) {
      const resolve = this.resolves.shift();
      resolve?.(item);
    } else {
      this.items.push(item);
    }
  }

  /**
   * Dequeues an item from the asynchronous queue. If the queue is empty, this
   * method waits until an item is enqueued.
   *
   * @returns A promise that resolves to the dequeued item.
   */
  async dequeue(): Promise<T> {
    return new Promise(resolve => {
      if (this.items.length > 0) {
        resolve(this.items.shift() as T);
      } else {
        this.resolves.push(resolve);
      }
    });
  }
}

export {
    AsyncQueue,
};