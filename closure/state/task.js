// Напиши функцию createStateMachine() для создания машины состояний.
// Машина должна принимать начальное состояние и позволять изменять его с помощью заданных переходов.
// Функция должна возвращать объект с методами:
// - getState(): возвращает текущее состояние.
// - transition(state): изменяет текущее состояние на новое, если переход допустим. Если переход невозможен, ничего не происходит.

const stateMachine = createStateMachine('start', ['start', 'stop', 'pause']);
stateMachine.getState(); // 'start'
stateMachine.transition('pause');
stateMachine.getState(); // 'pause'
stateMachine.transition('stop');
stateMachine.getState(); // 'stop'
