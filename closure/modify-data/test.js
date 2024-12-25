(function () {
    // 2
    function modifyItemData(price, platform) {
        // 1
        price.rub = 5000;
        platform = 'iOS';
        isModified = true;

        function printItemData() {
            console.log(price); // ? (4.1)
            console.log(platform); // ? (4.2)
            console.log(isModified); // ? (4.3)
        }

        return printItemData;
    }

    let price = { rub: 3500 };
    let platform = 'Android';
    let isModified = false;
    const printItemData = modifyItemData(price, platform, isModified);

    console.log(price); // ? (1)
    console.log(platform); // ? (2)
    console.log(isModified); // ? (3)

    price = { usd: 100 };

    platform = 'Web';
    isModified = null;

    printItemData(); // (4)
})()
