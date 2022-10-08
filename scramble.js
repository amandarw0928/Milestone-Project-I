const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    inputField = document.querySelector(".input"),
    checkBtn = document.querySelector(".check-word");

let correctWord;

const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = random.word.toLowerCase();;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}

initGame();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if (userWord !== correctWord) return alert(`Oops! ${userWord} is not correct. Try again!`);
    if (userWord === correctWord) return alert(`Yes! ${userWord.toUpperCase()} is correct. Great job!`);
    initGame();
}

checkBtn.addEventListener("click", checkWord);