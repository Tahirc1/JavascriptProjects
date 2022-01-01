window.addEventListener('load',()=>{
    showword(words);
})

let time = 5;
let timex = time;
let score = 0;
let play;

const sec = document.querySelector("#sec");
const cur = document.querySelector("#curword");
const timeleft = document.querySelector("#time");
const scoreon = document.querySelector("#score");
const stat = document.querySelector("#status");
const inp = document.querySelector("#inp1");
inp.focus();
let timer;
sec.addEventListener('click',()=> {
    time =parseInt(prompt('enter a number'));
    timex = time+1;
    sec.innerHTML = time;
})

const words=['tahir','ta','hi','ahi','rat','cat','mat','sat','kaaat'];
function showword(words){
    cur.innerHTML = words[Math.floor(Math.random() * words.length)];
    timer = setInterval(() => {
        counter();
    }, 1000);

}

function counter(){
    if(time>0){
        time--
        console.log(time)
        timeleft.innerHTML = time; 
    }else if(time === 0){
        play = false
        score = 0
        scoreon.innerHTML = score
        score=-1
        stat.innerHTML = "GameOver";
        }

}

inp.addEventListener('input',matchw);

function matchw(){
    if (inp.value === cur.innerHTML){
        stat.innerHTML = "correct"
        inp.value = ''
        score++;
        scoreon.innerHTML = score;
        clearInterval(timer);
        showword(words)
        time = timex;
        return true
    }else {
        stat.innerHTML = '';
        return false
    }
}