/*
Что выведется в консоли после выполнения данного кода?
*/
(function () {
    // 2
    function modifyItemData(price, platform) {
        // 1
        price.rub = 5000;
        platform = 'iOS';
        isModified = true;

        function printItemData() {
            console.log(price); // ? (4.1) // { rub: 5000 }
            console.log(platform); // ? (4.2) // 'iOS'
            console.log(isModified); // ? (4.3) null
        }

        return printItemData;
    }

    let price = { rub: 3500 };
    let platform = 'Android';
    let isModified = false;
    const printItemData = modifyItemData(price, platform, isModified);

    console.log(price); // ? (1) 5000
    console.log(platform); // ? (2) 'Android'
    console.log(isModified); // ? (3) true

    price = { usd: 100 };

    platform = 'Web';
    isModified = null;

    printItemData(); // (4) underfined
})()
