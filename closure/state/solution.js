function createStateMachine(defaultState, validStates) {
    let state = defaultState;

    return {
        getState: function () {
            return state;
        },
        transition: function (newState) {
            if (validStates.includes(state)) {
                state = newState;
            }
            return state;
        }
    }
}

const stateMachine = createStateMachine('start', ['start', 'stop', 'pause']);
console.log(stateMachine.getState()); // 'start'
stateMachine.transition('pause');
console.log(stateMachine.getState()); // 'pause'
stateMachine.transition('stop');
console.log(stateMachine.getState()); // 'stop'

