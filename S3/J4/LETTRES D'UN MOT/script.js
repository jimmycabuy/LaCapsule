function checkWord(word) {
  let finalResult = "Toutes les lettres sont différentes dans le mot";

  const wordSplit = word.split("");

  for (const letter of wordSplit) {
    let wordFiltered = wordSplit.filter((e) => e === letter);
    if (wordFiltered.length > 1) {
      finalResult = `La lettre ${letter} apparaît ${wordFiltered.length} fois dans le mot ${word}`;
    }
  }

  return finalResult;
}

console.log(checkWord("bootcamp"));