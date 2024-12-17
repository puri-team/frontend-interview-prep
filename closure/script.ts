const counter = (
    () => {
        let i = 0;

        return function () {
            i++;
            return i;
        }
    }
)();

console.log(counter()); // 1
console.log(counter()); // 2
