/* Queues */

function Queue() {
  let collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    collection.push(element); // add an item to the queue
  };
  this.dequeue = function () {
    return collection.shift(); // removes the item of the start of the array and returns it
  };
  this.front = function () {
    return collection[0]; // returns the first item of the array without removing it. Item at index 0
  };
  this.size = function () {
    return collection.length; // size of the queue
  };
  this.isEmpty = function () {
    return (collection.length === 0); // chwck if queue is empty
  };
}

let q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();

// Creating a Priority queue
// Items with a higher priority are sent to the start of the array
// if elements have the same priority, the queue behaves like a normal queue

function PriorityQueue() {
  let collection = [];
  this.printCollection = function () {
    (console.log(collection));
  };
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) { //checking priorities
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = function () {
    let value = collection.shift();
    return value[0];
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return (collection.length === 0);
  };
}

let pq = new PriorityQueue();

// second urgument is the priority
pq.enqueue(['Beau Carnes', 2]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();
