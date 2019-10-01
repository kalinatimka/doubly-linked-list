const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        this.indexArray = [];
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
        this.indexArray.push(tempNode);
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
        return this.indexArray[index].data;
    }
  
    insertAt(index, data) {
        if (index == 0) {
          this.append(data);
          return this;
        }
        var tempNode = new Node(data, this.indexArray[index - 1], this.indexArray[index]);
        this.indexArray[index - 1].next = tempNode;
        this.indexArray[index].prev = tempNode;
        this.indexArray.splice(index, 0, tempNode);
        this.length++;
        return this;
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
        this.indexArray = [];
        return this;
    }
  
    deleteAt(index) {
        if (index == 0) {
          this.indexArray.splice(index, 1);
          this.length--;
          if (this.indexArray.length != 0) {
            this.indexArray[index].prev = this.indexArray[index - 1];
          }
          return this;
        }
        if (index == (this.length - 1)) {
          this.indexArray.splice(index, 1);
          this.length--;
          this.indexArray[index - 1].next = null;
        }
        this.indexArray.splice(index, 1);
        this.indexArray[index - 1].next = this.indexArray[index];
        this.indexArray[index].prev = this.indexArray[index - 1];
        this.length--;
        return this;
    }
  
    reverse() {
        var nodeArray = this.indexArray;
        this.clear();
        for (var i = nodeArray.length - 1; i >= 0; i--) {
            var tempNode = nodeArray[i];
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
            this.indexArray.push(tempNode);
        }
        return this;
    }
  
    indexOf(data) {
        var tempNode = this._head;
        while (tempNode != null) {
            if (tempNode.data == data) {
                return this.indexArray.indexOf(tempNode);
            }
            tempNode = tempNode.next;
        }
        return -1;
    }
  }  

module.exports = LinkedList;
