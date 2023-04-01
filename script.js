//All required elements
const start_btn=document.querySelector(".start_btn")
const info_box=document.querySelector(".info_box")
const exit_btn=info_box.querySelector(".buttons .quit")
const continue_btn=info_box.querySelector(".buttons .restart")
const quiz_box=document.querySelector(".quiz_box")
const option_list=document.querySelector(".option_list")
const timeCount=quiz_box.querySelector('.timer .timer_sec')

//Start quiz button clicled
start_btn.onclick=()=>{
    info_box.classList.add("activeInfo") //show info box
}

//exit button clicked
exit_btn.onclick=()=>{
    info_box.classList.remove("activeInfo") //hide info box
}

//continue button clicked
continue_btn.onclick=()=>{
    info_box.classList.remove("activeInfo") //hide info box
    quiz_box.classList.add("activeQuiz") //Show the quiz box
showQuestions(0)
queCounter(1)
startTimer(15)

}

let que_count=0;
let que_numb=1;
let counter
let timeValue=15
let userScore=0

const next_btn=quiz_box.querySelector(".next_btn")
const result_box=document.querySelector('.result_box')
const result_quiz=result_box.querySelector('.buttons .restart')
const quit_quiz=result_box.querySelector('.buttons .quit')

result_quiz.onclick=()=>
{
    result_box.classList.remove("activeResult")
    quiz_box.classList.add("activeQuiz")
    
    let que_count=0;
let que_numb=1;
let timeValue=15
let userScore=0
showQuestions(que_count)
    queCounter(que_numb)
    clearInterval(counter)
    startTimer(timeValue)
    next_btn.style.display='none'
}

quit_quiz.onclick=()=>
{
    window.location.reload()
}

//Next button click
next_btn.onclick=()=>{
    if(que_count<questions.length-1){
        que_count++
        que_numb++
    showQuestions(que_count)
    queCounter(que_numb)
    clearInterval(counter)
    startTimer(timeValue)
    next_btn.style.display='none'
    }else{
        console.log("que completed")
        showResultBox()
    }
}

//geting questions and options from array
function showQuestions(index){
    const que_text=document.querySelector(".que_text")
    let que_tag=`<span>${questions[index].numb} . ${questions[index].question}</span>`;
    let option_tag=`<div class="option"><span>${questions[index].options[0]}</span></div>`+
    `<div class="option"><span>${questions[index].options[1]}</span></div>`+
    `<div class="option"><span>${questions[index].options[2]}</span></div>`+
    `<div class="option"><span>${questions[index].options[3]}</span></div>`;
que_text.innerHTML=que_tag;
option_list.innerHTML=option_tag;

const option=option_list.querySelectorAll('.option')
for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
    
}
}

let tickIcon=`<div class="icon tick"><i class="fa-solid fa-check"></i></div>`
let crossIcon=`<div class="icon cross"><i class="fa fa-times" ></i></div>`


function optionSelected(answer){
    clearInterval(counter)
    let userAns=answer.textContent;
    let correctAns=questions[que_count].answer;
    let allOptions=option_list.children.length
    if(userAns==correctAns){
        userScore+=1
        console.log(userScore)
        answer.classList.add('correct')
    console.log("correct")
    answer.insertAdjacentHTML('beforeend',tickIcon)
    }
    else{
        answer.classList.add('incorrect')
        console.log("wrong")
        answer.insertAdjacentHTML('beforeend',crossIcon)
    }


    //if answer is incorrect then automatically select correct
    for (let i = 0; i < allOptions; i++) {
        if(option_list.children[i].textContent==correctAns){
            option_list.children[i].setAttribute("class", "option correct");

        }
        
    }


    //once user selected disabled all option
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add('disabled')
        
    }
    next_btn.style.display='block'
}

function showResultBox(){
    info_box.classList.remove("activeInfo") //hide info box
    quiz_box.classList.remove("activeQuiz") //hide the quiz box
    result_box.classList.add("activeResult") //show the result box
const scoreText=result_box.querySelector(".score_text")
if(userScore>3){
    let scoreTag=`<span>congrats!,you got <p>${userScore}</p> out of <p>${questions.length}</p></span>`
scoreText.innerHTML=scoreTag
}
else if(userScore>1){
    let scoreTag=`<span>nice,you got <p>${userScore}</p> out of <p>${questions.length}</p></span>`
scoreText.innerHTML=scoreTag
}else {
    let scoreTag=`<span>Sorry,you got <p>${userScore}</p> out of <p>${questions.length}</p></span>`
scoreText.innerHTML=scoreTag
}
}




function startTimer(time){
    counter=setInterval(timer,1000);
    function timer(){
timeCount.textContent=time
time--
if(time<9){
    let addZero=timeCount.textContent
    timeCount.textContent="0"+addZero
}
if(time<0){
    clearInterval(counter)
    timeCount.textContent="00"

    let correctAns=questions[que_count].answer;
    let allOptions=option_list.children.length

    for (let i = 0; i < allOptions; i++) {
        if(option_list.children[i].textContent==correctAns){
            option_list.children[i].setAttribute("class", "option correct");

        }
        
    }


    
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add('disabled')
        
    }
    next_btn.style.display='block'
}
    }
}



function queCounter(index){
    
const bottom_ques_counter= quiz_box.querySelector(".total_que")
let totalQuesCounting=`<span><p>${index}</p> of <p>${questions.length}</p> questions</span>`

bottom_ques_counter.innerHTML=totalQuesCounting
}
