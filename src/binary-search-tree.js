const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data; // Данные узла
    this.left = null; // Левый потомок
    this.right = null; // Правый потомок
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null; // Корневой узел дерева
  }

  root() {
    return this.rootNode; // Возвращает корень дерева
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode; // Если дерево пустое, делаем новый узел корнем
      return;
    }

    let current = this.rootNode;

    while (true) {
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode; // Вставляем новый узел слева
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode; // Вставляем новый узел справа
          return;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    return !!this.find(data); // Проверяем, существует ли узел
  }

  find(data) {
    let current = this.rootNode;

    while (current) {
      if (data === current.data) return current; // Нашли узел
      if (data < current.data) {
        current = current.left; // Ищем в левом поддереве
      } else {
        current = current.right; // Ищем в правом поддереве
      }
    }

    return null; // Узел не найден
  }

  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data);
  }

  _removeNode(node, data) {
    if (!node) return null; // Если узел не существует

    if (data < node.data) {
      node.left = this._removeNode(node.left, data); // Ищем узел в левом поддереве
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data); // Ищем узел в правом поддереве
      return node;
    } else {
      // Узел найден
      if (!node.left && !node.right) {
        return null; // У узла нет потомков
      }

      if (!node.left) {
        return node.right; // У узла только правый потомок
      }

      if (!node.right) {
        return node.left; // У узла только левый потомок
      }

      // У узла есть оба потомка
      let minRight = this._findMinNode(node.right);
      node.data = minRight.data;
      node.right = this._removeNode(node.right, minRight.data);
      return node;
    }
  }

  min() {
    if (!this.rootNode) return null;

    let current = this.rootNode;
    while (current.left) {
      current = current.left; // Идем влево, пока не дойдем до минимального значения
    }
    return current.data;
  }

  max() {
    if (!this.rootNode) return null;

    let current = this.rootNode;
    while (current.right) {
      current = current.right; // Идем вправо, пока не дойдем до максимального значения
    }
    return current.data;
  }

  _findMinNode(node) {
    while (node.left) {
      node = node.left; // Ищем минимальный узел в поддереве
    }
    return node;
  }
}

module.exports = {
  BinarySearchTree,
};
