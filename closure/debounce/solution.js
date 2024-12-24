function debounce(func, delay) {
    let timeoutId;

    return function () {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(func, delay);
    }
}

const debouncedFunction = debounce(() => console.log('Hello!'), 2000);
debouncedFunction(); // вызовется через 2 секунды
debouncedFunction(); // предыдущее выполнение отменяется, и будет вызвана новая через 2 секунды
