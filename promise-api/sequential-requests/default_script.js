const wait = (ms) => new Promise((res) => setTimeout(res, ms));
const updateUi = (text) => {
    const listElement = document.createElement("li");
    listElement.innerText = text;
    document.getElementById("list").appendChild(listElement);
};

// функция, имитирующая запрос на сервер
const makeApiCall = async (data) => {
    const timeoutInMs = Math.round(Math.random() * (1500 - 500) + 500);
    await wait(timeoutInMs);
    updateUi(`data ${data} was successfully sent.`);
};

// функция, принимающая массив данных, которые нужно отправить на сервер
// отправка данных должна происходить строго последовательно:
// сначала завершается(успешно или нет - неважно) запрос с первым элементом,
// далее со вторым и тд

// # issue version #
// const sendConsequentData = async (arrayOfData) => {
//     // TODO: Fix it!
//
//     new Promise((resolve) => {
//         resolve();
//     });
//     arrayOfData.forEach(async (i) => {
//         await makeApiCall(i);
//     });
// };

// # while loop version #
// const sendConsequentData = async (arrayOfData) => {
//     while (true) {
//         await makeApiCall(arrayOfData.shift());
//
//         if (!arrayOfData.length) {
//             break;
//         }
//     }
// };

// # for loop version #
const sendConsequentData = async (arrayOfData) => {
    for (let i = 0; i < arrayOfData.length; i++) {
        await makeApiCall(i);
    }
};

sendConsequentData([0, 1, 2, 3, 4, 5]);

// ожидаемый результат на экране:
// data 0 was successfully sent
// data 1 was successfully sent
// data 2 was successfully sent
// data 3 was successfully sent
// data 4 was successfully sent
// data 5 was successfully sent
