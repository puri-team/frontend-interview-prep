function createCounter() {
    return {
        number: 0,
        increment: function () {
            console.log(this);
            return ++this.number;
        },
        decrement: function () {
            return --this.number;
        }
    }
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
