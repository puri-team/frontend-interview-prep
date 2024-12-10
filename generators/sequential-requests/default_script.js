const wait = (ms) => new Promise((res) => setTimeout(() => res(`data was successfully sent for ${ms} `), ms));

const updateUI = (text) => {
    const listElement = document.createElement("li");
    listElement.innerText = text;
    document.getElementById("list").appendChild(listElement);
};

// функция, имитирующая запрос на сервер
function* makeApiCall(data) {
    const timeoutInMs = Math.round(Math.random() * (1500 - 500) + 500);
    const response = yield wait(timeoutInMs);

    updateUI(`data ${data} was successfully sent.`);

    return response;
}

// функция, принимающая массив данных, которые нужно отправить на сервер
// отправка данных должна происходить строго последовательно:
// сначала завершается(успешно или нет - неважно) запрос с первым элементом,
// далее со вторым и тд

// # iterators version #
function* sendConsequentData(arrayOfData) {
    for (let i = 0; i < arrayOfData.length; i++) {
         yield* makeApiCall(i);
    }
}

const iterator = sendConsequentData([0, 1, 2, 3, 4, 5]);

while (true) {
    const data = iterator.next();

    if (data.value) {
        data.value.then((response) => {
            console.log(response);
        });
    }

    if (data.done) {
        break;
    }
}

// ожидаемый результат на экране:
// data 0 was successfully sent
// data 1 was successfully sent
// data 2 was successfully sent
// data 3 was successfully sent
// data 4 was successfully sent
// data 5 was successfully sent
