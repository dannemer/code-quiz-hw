const startBtn = document.querySelector(".startBtn button")
const infoBox = document.querySelector(".infoBox");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = document.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quizBox");
const timeCount = quizBox.querySelector(".timer .timerSecs");

const optionList = document.querySelector(".optionList");

startBtn.onclick = ()=>{
    infoBox.classList.add("activeInfo");
}

exitBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfo");
}

continueBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfo");
    quizBox.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
}

let queCount = 0;
let queNumb = 1;
let counter;
let timeValue = 15

const nextBtn = quizBox.document.querySelector(".nextBtn");

nextBtn.onclick = ()=>{
    if(queCount < questions.length - 1){
        queCount++;
        queNumb++;
        showQuestions(queCount);
        queCounter(queNumb);
        clearInterval(counter);
        startTimer(timeValue);
    else{

    }
    }
}

function showQuestions(index){
const queText = document.querySelector(".queText");
let queTag = '<span>' + questions[index].numb + ". " + questions[index].question +'</span>';
let optionTag = '<div class="option">'+ questions[index].options[0] +'<span></span<>/div>'
                + '<div class="option">'+ questions[index].options[1] +' <span></span<>/div>'
                + '<div class="option">'+ questions[index].options[2] +'<span></span<>/div>'
                + '<div class="option">'+ questions[index].options[3] +'<span></span<>/div>';
queText.innerHTML = queTag;
optionList.innerHTML = optionTag
const option = optionList.querySelector(".option")
for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
}
}

let tic


function optionSelected(answer){
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns = questions[queCount].answer;
    let allOptions = optionList.children.length;
    if(userAns == correctAns){
        answer.classList.add("correct");
    }else{
        answer.classList.add("incorrect");

        for (let i = 0; i < allOptions; i++) {
            if(optionList.children[i].textContent == correctAns){
                optionList.children[i].setAttribute("class", "option correct");
            }
        }
    }

    for (let i = 0; i < Array.length; i++) {
        const element = array[index];
        optionList.children[i].classList.add("disabled");
    }
}

function startTimer(time){
    counter = setInterval(timer, 29)
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "00";
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
        }
    }

}

function queCounter(index){
    const bottomQueCounter = quizBox.querySelector(".totalQue")
    let totalQueCountTag = '<span><p>' + index + '</p>of<p>'+ questions.length +'</p>questions</span>';
    bottomQueCounter.innerHTML = totalQueCountTag;