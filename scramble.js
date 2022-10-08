const wordText = document.querySelector(".word");
hintText = document.querySelector(".hint span");
inputField = document.querySelector(".hint span");
checkBtn = document.querySelector(".checkword");

let correctWord;

const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = wordArray[i];
        wordArray[i] = wordArray[j];
        wordArray[j] = temp;
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = random.word.toLowerCase();
    console.log(randomObj);
}

initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if(userWord !== correctWord) return alert('Oops! ${userWord} is not correct. Try again!');
    alert('Yes! ${userWord}.toUpperCase() is not correct!');
}

checkBtn.addEventListener("click", checkWord);