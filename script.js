var timerEl = document.getElementById("timer");

var mainEl = document.getElementById("main");

function timer() {
    var = counter
    var timerInterval = setInterval(function() {
    counter--;
    timerEl.textContent = counter + " seconds left";

    if(counter === 0) {
        clearInterval(timerInterval);
        sendMessage();
    }

}, 1000);

function displaymessage() {

}


function askQuestions() {

var questions = [
    {question: "What was the first movie to be rated PG13?",
    choices: ["Red Dawn", "Indiana Jones and the Temple of Doom", "Gremlins", "Beverly Hills Cop"]
    answer: "Red Dawn"},

    {question: "What was the first feature-length animated movie ever released?",
    choices: ["Fantasia", "Snow White and the Seven Dwarfs", "Dumbo", "Pinocchio"]
    answer: "Snow White and the Seven Dwarfs"},

    {question: "What is the first animated movie that was made entirely by CGI",
    choices: ["Cassiopeia", "Antz", "A Bug's Life", "Toy Story"]
    answer: "Toy Story"},

    {question:"What is the highest grossing movie of all time?",
    choices: ["Titanic", "Avatar", "Avengers", "Frozen"]
    answer: "Avatar"},

    {question: "How many Oscar categories are there?",
    choices: ["20", "22", "24", "26"]
    answer: "24"},
    
]
if(questions = true)
}

function displaymessage() {

}