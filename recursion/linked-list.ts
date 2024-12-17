let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    console.log(list);

    if (list.next) {
        printList(list.next);
    }
}

function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }

    console.log(list.next);
}

printReverseList(list);
