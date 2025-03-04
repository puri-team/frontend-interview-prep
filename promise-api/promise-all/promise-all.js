/*
написать аналог функции Promise.all
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
*/

/*
Function returns promise that fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values.
It rejects when any of the input's promises rejects, with this first rejection reason.
*/

function promiseAll(promises) {
    return new Promise(async (resolve, reject) => {
        const result = [];

        try {
            for (let i = 0; i < promises.length; i++) {
                const res = await promises[i];
                result.push(res);
            }
        } catch (err) {
            reject(err);
        }

        resolve(result);
    });
}

// проверяем на fullfilled
function testTransitionToFulfilledState() {
    const url = "https://jsonplaceholder.typicode.com/";
    const promise1 = Promise.resolve('resolve1');
    const promise2 = new Promise(async (resolve, reject) => {
        await fetch(url + 'users');
        resolve('succeed2');
    });
    const promise3 = new Promise(async (resolve, reject) => {
        await fetch(url + 'todos');
        resolve('succeed3');
    });
    const promise4 = new Promise((resolve, reject) => {
        setTimeout(resolve, 500, 'succeed4');
    });
    const promise5 = new Promise((resolve, reject) => {
        setTimeout(resolve, 300, 'succeed5');
    });
    const response = promiseAll([promise1, promise2, promise3, promise4, promise5]);
    response.then((res) => { console.log(res) }).catch((err) => { console.log(err) });
}

testTransitionToFulfilledState();

// проверяем на fullfilled
function testTransitionToRejectedState() {
    const promise1 = Promise.reject('reject');
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 300, 'succeed1');
    });
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'succeed2');
    });

    const response = promiseAll([promise1, promise2, promise3]);
    response.then((res) => { console.log(res) }).catch((err) => { console.log(err) });
}

testTransitionToRejectedState();
