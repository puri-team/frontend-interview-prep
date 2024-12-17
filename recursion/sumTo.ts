function sumTo1(n) {
    let res = 0;

    for (let i = 0; i <= n; i++) {
        res += i;
    }

    return res;
}

function sumTo2(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumTo(n-1);
    }
}

function sumTo(n) {
   return n * (n + 1) /2
}

console.log( sumTo(100) ); // 5050
