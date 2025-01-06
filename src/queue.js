const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // Указатель на начало очереди
    this.tail = null; // Указатель на конец очереди
  }

  getUnderlyingList() {
    return this.head; // Возвращаем связанный список, начиная с head
  }

  enqueue(value) {
    const newNode = new ListNode(value); // Создаем новый узел
    if (this.tail) {
      this.tail.next = newNode; // Если очередь не пуста, добавляем в конец
    } else {
      this.head = newNode; // Если очередь пуста, head указывает на новый узел
    }
    this.tail = newNode; // tail всегда указывает на последний элемент
  }

  dequeue() {
    if (!this.head) return null; // Если очередь пуста, возвращаем null
    const value = this.head.value; // Сохраняем значение первого элемента
    this.head = this.head.next; // Перемещаем head на следующий узел
    if (!this.head) this.tail = null; // Если очередь пуста, tail тоже должен быть null
    return value; // Возвращаем значение удаленного элемента
  }
}

module.exports = {
  Queue,
};
