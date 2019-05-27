var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s"); 

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function convertToWord(letter) {
    if (letter == "r") return "الحجر";
    if (letter == "s") return "المقص";
    if (letter == "p") return "الورق"
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `!${convertToWord(user).fontcolor("#00FF00")} يغلب  ${convertToWord(computer).fontcolor("#ff0000")} , انت الفائز`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function() { document.getElementById(user).classList.remove('green-glow') }, 1000);
}

function lose(user, computer) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `!${convertToWord(user).fontcolor("#00FF00")} يخسر امام  ${convertToWord(computer).fontcolor("#ff0000")} , انت الخاسر`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function() { document.getElementById(user).classList.remove('red-glow') }, 1000);
}

function draw(user, computer) {
    result_div.innerHTML = `!${convertToWord(user).fontcolor("#778899")} يعادل  ${convertToWord(computer).fontcolor("#778899")} , انه تعادل`;
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(function() { document.getElementById(user).classList.remove('gray-glow') }, 1000);
}

function game(userChoice) {
    const computerChoice = getCompChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
 }

 main();