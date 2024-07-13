class HashTable {
  constructor(size = 100) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    return key % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
        return false;
    }
    for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
            return this.table[index][i][1];
        }
    }
    return false;
  }

  delete(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
        return false;
    }
    for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
            this.table[index].splice(i, 1);
            return 'deleted';
        }
    }
    return false;
  }

  reset(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
        return false;
    }
    for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
            this.table[index][i][1] = value;
            return 'reseted';
        }
    }
    return false;
  }
}

let test = new HashTable();
test.set('a', 1);
test.set('b', 2);
test.set('c', 3);
test.set('d', 4);
test.set('e', 5);
console.log(test.get('a')); // 1
console.log(test.get('b')); // 2
console.log(test.get('c')); // 3
console.log(test.get('d')); // 4
console.log(test.get('e')); // 5
console.log(test.delete('a')); // deleted
console.log(test.get('a')); // false
console.log(test.reset('b', 10)); // reseted
console.log(test.get('b')); // 10


  

