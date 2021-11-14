// Code your solutions in this file

function writeCards(oldArray, eventName) {
    const newArray = [];
    for (let i = 0; i < oldArray.length; i++) {
        newArray[i] = `Thank you, ${oldArray[i]}, for the wonderful ${eventName} gift!`;
    }
    return newArray;
}

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}
