import { expect } from 'chai';
import { AsyncQueue } from '../src';

describe('AsyncQueue', function () {

  it('should enqueue and dequeue an item correctly', async () => {
    const queue = new AsyncQueue<number>();
    
    await queue.enqueue(1);
    const item = await queue.dequeue();
    
    expect(item).to.equal(1);
  });

  it('should handle multiple enqueue and dequeue operations', async () => {
    const queue = new AsyncQueue<number>();
    
    await queue.enqueue(1);
    await queue.enqueue(2);
    await queue.enqueue(3);
    
    expect(await queue.dequeue()).to.equal(1);
    expect(await queue.dequeue()).to.equal(2);
    expect(await queue.dequeue()).to.equal(3);
  });

  it('should handle dequeue operation before enqueue', async () => {
    const queue = new AsyncQueue<number>();

    // Dequeue promise
    const dequeuePromise = queue.dequeue();
    
    await queue.enqueue(1);

    expect(await dequeuePromise).to.equal(1);
  });

  it('should handle multiple dequeue operations before enqueue', async () => {
    const queue = new AsyncQueue<number>();

    const dequeuePromise1 = queue.dequeue();
    const dequeuePromise2 = queue.dequeue();
    const dequeuePromise3 = queue.dequeue();

    await queue.enqueue(1);
    await queue.enqueue(2);
    await queue.enqueue(3);

    expect(await dequeuePromise1).to.equal(1);
    expect(await dequeuePromise2).to.equal(2);
    expect(await dequeuePromise3).to.equal(3);
  });
});