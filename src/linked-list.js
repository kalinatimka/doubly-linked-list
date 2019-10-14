const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }
  
    append(data) {
        var tempNode = new Node(data);
        if (this.length == 0) {
            this._head = tempNode;
            this._tail = tempNode;
            this.length++;
        }
        else {
            if (this._head == this._tail) {
                this._head.next = tempNode;
                tempNode.prev = this._head;
                this._tail = tempNode;
            }
            else {
                this._tail.next = tempNode;
                tempNode.prev = this._tail;
                this._tail = tempNode; 
            }
            this.length++;
        }
        // this
        return this;
    }
  
    head() {
        if (this._head != null) {
            return this._head.data;
        }
        return null;
    }
  
    tail() {
        if (this._tail != null) {
            return this._tail.data;
        }
        return null;
    }
  
    at(index) {
        var i = 0;
        var tempNode = this._head;
        while (i != index) {
            i++;
            tempNode = tempNode.next;
        }
        return tempNode.data;
    }
  
    insertAt(index, data) {
        if (index == 0) {
            if (this._head == null ) {
                this.append(data);
            }
            else {
                var tempNode = this._head;
                this._head = new Node(data, null, tempNode);
                tempNode.prev = this._head;
            }
          return this;
        }
        var tempNode = this._head;
        for (var i = 0; i < this.length; i++) {
            if (i == index) {
                var insertNode = new Node (data, tempNode.prev, tempNode);
                tempNode.prev.next = insertNode;
                tempNode.prev = insertNode;
                return this;
            }
            tempNode = tempNode.next;
        }
    }
  
    isEmpty() {
        if (this.length == 0) {
            return true;
        }
        return false;
    }
  
    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }
  
    deleteAt(index) {
        if (index == 0) {
            var tempNode = this._head.next;
            this.head = tempNode;
            this.length--;
            return this;
        }
        if (index == (this.length - 1)) {
            var tempNode = this._tail.prev;
            this.tail = tempNode;
            this.length--;
            return this;
        }
        var tempNode = this._head;
        for (var i = 0; i < this.length; i++) {
            if (index == i) {
                var deleteNode = tempNode;
                tempNode.prev.next = deleteNode.next;
                deleteNode.next.prev = tempNode.prev;
                this.length--;
                return this;
            }
            tempNode = tempNode.next;
        }
        return this;
    }
  
    reverse() {
        var data = [];
        var tempNode = this._head;
        while (tempNode != null) {
            data.push(tempNode.data);
            tempNode = tempNode.next;
        }
        data = data.reverse();
        this.clear();
        for (var i = 0; i < data.length; i++) {
            this.append(data[i]);
        }
        return this;
    }
  
    indexOf(data) {
        var tempNode = this._head;
        var index = 0;
        while (tempNode != null) {
            if (tempNode.data == data) {
                return index;
            }
            index++;
            tempNode = tempNode.next;
        }
        return -1;
    }
  }  

module.exports = LinkedList;
