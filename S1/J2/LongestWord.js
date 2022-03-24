// donnée par la capsule jusqu'à ligne 4 comprise. et la ligne 16 jusqu'à la ligne 20

function findLongestWord(words) {
    let longestWord = '';
    
    longestWord = words[0];
    
    for(var i = 1 ; i < words.length ; i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i]
        }
    }
    

    
    return longestWord;
}

console.log(findLongestWord(["Adiós", "Goodbye", "Au revoir", "Auf wiedersehen"]));
// Expected: Auf wiedersehen