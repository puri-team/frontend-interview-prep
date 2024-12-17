/*
написать аналог функции Promise.all
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
*/

/*
Function returns promise that fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values.
It rejects when any of the input's promises rejects, with this first rejection reason.
*/

function promiseAll(promises) {
    const result = [];

    return new Promise(async (resolve, reject) => {
        for (const promise of promises) {
            promise.then((response) => {
                result.push(response);

                if (result.length === promises.length) {
                    resolve(result);
                }
            }).catch((err) => {
                reject(err);
            });
        }
    })
}

// проверяем на fullfilled
function testTransitionToFulfilledState() {
    const url = "https://jsonplaceholder.typicode.com/";
    const promise1 = Promise.resolve('resolve1');

    const promise2 = new Promise( (resolve, reject) => {
        fetch(url + 'users').then((res) => {
            resolve('succeed2');
        });
    });
    const promise3 = new Promise((resolve, reject) => {
        fetch(url + 'todos').then((res) => {
            resolve('succeed3');
        });
    });
    const promise4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('succeed4');
        }, 5000);
    });
    const promise5 = new Promise((resolve, reject) => {
        setTimeout(resolve, 300, 'succeed5');
    });
    const response = promiseAll([promise1, promise2, promise3, promise4, promise5]);
    response.then((res) => { console.log('final', res) }).catch((err) => { console.log(err) });
}

testTransitionToFulfilledState();

// проверяем на fullfilled
function testTransitionToRejectedState() {
    const promise1 = Promise.resolve('resolve1');

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 300, 'succeed1');
    });
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'succeed2');
    });
    const promise4 = Promise.reject('reject');

    const response = promiseAll([promise1, promise2, promise3, promise4]);
    response.then((res) => { console.log('final', res) }).catch((err) => { console.log('final', err) });
}

testTransitionToRejectedState();
