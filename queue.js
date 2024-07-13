class Queue {
  constructor() {
    this.elements = [];
  }

  size() {
    return this.elements.length;
  }

  add(item) {
    this.elements.push(item);
  }

  peek() {
    if (this.size() === 0) {
      throw new Error
    }
    return this.elements[0];
  }

  dequeue() {
    if (this.size() === 0) {
      throw new Erro
    }
    return this.elements.shift();
  }
}

module.exports = Queue;
