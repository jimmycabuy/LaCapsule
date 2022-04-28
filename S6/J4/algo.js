////////// ALGO 1

function stringRevert(str) {
    let newWord = '';

    for (let i = str.length - 1; i >= 0; i--) {
        newWord += str[i]
    }
    return newWord;
}


const word = "tpircSavaJ";
console.log(stringRevert(word));
// Expected result: JavaScript

////////// ALGO 2

function stringManipulation(str1, str2) {
    let finalWord = '';
    let str2New = '';

    // Change "java" to "Java"
    const str1New = str1.charAt(0).toUpperCase() + str1.slice(1)

    // Change "tpi%rcs" to "script"
    for (let i = str2.length - 1; i >= 0; i--) {
        str2New += str2[i].replace('%', '');
    }
    // Change "script" to "Script"
    const str2New2 = str2New.charAt(0).toUpperCase() + str2New.slice(1)

    // Mergin the 2 string together
    finalWord = str1New + str2New2;
    return finalWord;
}

const word1 = 'java';
const word2 = 'tpi%rcs';
console.log(stringManipulation(word1, word2));
// Expected result: JavaScript


////////// ALGO 3


function decode(str) {
    let correctWord = '';

    let secretWord = [];
    const numbers = str.split('').map((_, i) => str.charCodeAt(i));
    console.log(numbers);
    numbers.forEach(num => {
        secretWord.push(String.fromCharCode(num + 1));
    })
    correctWord = secretWord.join("");

    return correctWord;
}

const word3 = 'bnchmf';
console.log(decode(word));
// Expected result: coding