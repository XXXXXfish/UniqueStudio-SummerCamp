class disjointSet {
    constructor(size) {
        this.parent = new Array(size).fill(0);
        this.init(size);
    }
    init(size) {
        for ( let i = 0; i < size; i++) {
            this.parent[i] = i;
        }
    }
    
    find(i) {
        return i === this.parent[i] ? i : this.find(this.parent[i]);
    }
    
    inSame(i, j) {
        i = this.parent[i];
        j = this.parent[j];
        return i === j;
    }
    
    join(i, j) {
        if (this.parent[i] === this.parent[j]) return;
        this.parent[j] = this.parent[i];
    }
}

let test = new disjointSet(10);
console.log(test.parent); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
test.join(1, 2);
test.join(3, 4);
console.log(test.parent); // [0, 1, 1, 3, 4, 5, 6, 7, 8, 9]
console.log(test.find(1)); // 1
console.log(test.find(2)); // 1
console.log(test.inSame(1, 2)); // true
console.log(test.inSame(1, 3)); // false