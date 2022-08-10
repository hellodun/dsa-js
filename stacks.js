// stacks

// methods used: push, pop, peak, length

let letters = []; // this empty array serves as the stack

let word = "racecar"

let rword = "";

// put letters of word into stack
for (const element of word) {
  letters.push(element);
}

// Pop letters (elements) from the stack, will remove elements frommthe end of the stack
for (const element of word) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome.");
}
else {
  console.log(word + " is not a palindrome.");
}



// Creating a stack
let Stack = function () {
  this.count = 0;
  this.storage = {};

  // Adds a value onto the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // Removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.size = function () {
    return this.count;
  }

  // Returns the value at the end of the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  }
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

