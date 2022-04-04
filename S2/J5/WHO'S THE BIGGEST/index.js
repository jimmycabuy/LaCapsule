let list = [
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
];

function getBiggest(numbers) {
    let bigNumbers = [];

    for (var j = 0; j < list.length; j++) {
        let replace = 0;
        for (var i = 0; i < list[j].length; i++) {
            if (list[j][i] > replace) {
                replace = list[j][i];
            }
        }
        bigNumbers.push(replace);
    }
    return bigNumbers;
}

console.log(getBiggest(list));
// Expected result : [5,27,39,1001]