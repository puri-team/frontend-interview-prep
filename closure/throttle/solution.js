function throttle(func, delay) {
    let lastCallTime;

    return function () {
        const now = Date.now();
        const diff = lastCallTime && (now - lastCallTime);
        // console.log('lastCallTime', lastCallTime);
        // console.log('diff', diff);

        if (diff <= delay) {
            // console.log('throttle');
            return;
        }

        func.call(this, ...arguments);
        lastCallTime = now;
    }
}
const throttledFn = throttle((msg) => console.log("Function called: " + msg), 1000);
throttledFn('ok');  // "Function called"
throttledFn('should be throttle');  // Игнорируется (пока не пройдет 1 секунда)
setTimeout(() => throttledFn('ok after delay'), 1500);
