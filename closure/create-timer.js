// Напиши функцию createTimer(), которая возвращает объект с двумя методами:
//
//     start(): начинает отсчет времени и выводит в консоль время, прошедшее с начала отсчета каждую секунду.
// stop(): останавливает таймер.
// reset(): сбрасывает таймер, так что следующий запуск start() начнется с нуля.
//     Ты должен использовать замыкания, чтобы сохранить состояние таймера между вызовами этих методов.

function createTimer() {
    return {
        time: new Date(),
        timeoutId: undefined,
        start: function () {
            console.log('start')
            const diff = new Date().getTime() - this.time.getTime();
            this.timeoutId = setInterval(() => console.log(new Date().getTime() - this.time.getTime()), 1000);
        },
        stop: function () {
            console.log('stop')
            clearTimeout(this.timeoutId);
        },
        reset: function () {
            console.log('reset')
            this.stop();
            this.start();
        }
    }
}

const timer = createTimer();
timer.start();
setTimeout(() => timer.stop(), 5000);  // Таймер остановится через 5 секунд
setTimeout(() => timer.reset(), 7000);  // Таймер сбросится через 7 секунд
