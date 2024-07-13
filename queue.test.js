const Queue = require('./queue');

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue();
    expect(queue).toEqual({ elements: [] });
  });

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue();
    expect(queue.size()).toBe(0);
    queue.add(1);
    expect(queue.size()).toBe(1);
  });

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue();
    queue.add(1);
    expect(queue.elements).toEqual([1]);
    queue.add(2);
    expect(queue.elements).toEqual([1, 2]);
  });

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue();
    queue.add(1);
    queue.add(2);
    expect(queue.peek()).toBe(1);
  });

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue();
    queue.add(1);
    queue.add(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.elements).toEqual([2]);
    expect(queue.size()).toBe(1);
  });
});
