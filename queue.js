class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  size() {
    return this.elements.length
  }

  add(item) {
    this.elements.push(item)
  }

  peek() {
    return this.elements.length > 0 ? this.elements[0] : undefined
  }

  dequeue() {
    return this.elements.shift()
  }
}

module.exports = Queue