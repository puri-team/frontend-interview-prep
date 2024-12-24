// Что будет выведено на консоль, если заменить let на var в цикле? Объясни, почему так происходит, и как можно решить эту проблему, используя замыкания.

// function createIncrementer() {
//     const arr = [];
//     for (let i = 0; i < 5; i++) {
//         arr.push(function() {
//             console.log(i);
//         });
//     }
//     return arr;
// }

// const incrementers = createIncrementer();
// incrementers[0](); // 0
// incrementers[1](); // 1
// incrementers[2](); // 2
// incrementers[3](); // 3
// incrementers[4](); // 4


// Решение 1 с помощью IIFE
// В этом случае, хотя мы используем var, мы явно создаем замыкание с помощью немедленно вызываемой функции (IIFE),
// которая передает значение i в замыкание.
// Таким образом, каждая функция в массиве будет хранить правильное значение i на момент ее создания.

function createIncrementer() {
    const arr = [];

    for (var i = 0; i < 5; i++) {
        (function(innerI) {
            arr.push(function() {
            console.log(innerI);
            });
        })(i);
    }

    return arr;
}

const incrementers = createIncrementer();
incrementers[0](); // 5
incrementers[1](); // 5
incrementers[2](); // 5
incrementers[3](); // 5
incrementers[4](); // 5

// Решение 1 с помощью bind (мое, альтернативное)

// function createIncrementer() {
//     const arr = [];
//     console.log('i', i);
//     for (var i = 0; i < 5; i++) {
//         const func = function() {
//             console.log(this);
//         }.bind(i);
//
//         arr.push(func);
//     }
//
//     return arr;
// }
//
// const incrementers = createIncrementer();
// incrementers[0](); // 5
// incrementers[1](); // 5
// incrementers[2](); // 5
// incrementers[3](); // 5
// incrementers[4](); // 5
