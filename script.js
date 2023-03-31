//All required elements
const start_btn=document.querySelector(".start_btn")
const info_box=document.querySelector(".info_box")
const exit_btn=info_box.querySelector(".buttons .quit")
const continue_btn=info_box.querySelector(".buttons .restart")
const quiz_box=document.querySelector(".quiz_box")


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
}

let que_count=0;
let que_numb=1;

const next_btn=quiz_box.querySelector(".next_btn")


//Next button click
next_btn.onclick=()=>{
    if(que_count<questions.length-1){
        que_count++
        que_numb++
    showQuestions(que_count)
    queCounter(que_numb)
    }else{
        console.log("que completed")
    }
}

//geting questions and options from array
function showQuestions(index){
    const que_text=document.querySelector(".que_text")
    const option_list=document.querySelector(".option_list")
    let que_tag=`<span>${questions[index].numb} . ${questions[index].question}</span>`;
    let option_tag=`<div class="option"><span>${questions[index].options[0]}</span></div>`+
    `<div class="option"><span>${questions[index].options[1]}</span></div>`+
    `<div class="option"><span>${questions[index].options[2]}</span></div>`+
    `<div class="option"><span>${questions[index].options[3]}</span></div>`;
que_text.innerHTML=que_tag;
option_list.innerHTML=option_tag;
}

function queCounter(index){
    
const bottom_ques_counter= quiz_box.querySelector(".total_que")
let totalQuesCounting=`<span><p>${index}</p> of <p>${questions.length}</p> questions</span>`

bottom_ques_counter.innerHTML=totalQuesCounting
}
