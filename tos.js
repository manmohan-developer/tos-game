let btn = document.querySelectorAll('button');
let result = document.querySelector("#Result");
let yScore = document.querySelector("#y-score");
let cScore = document.querySelector("#c-score");
let tosVal = document.querySelector("#show-tos");
// console.log(btn);
for(let e of btn){
    btn = e.addEventListener('click', toss);
}

function toss(eventObj){
    let choice = eventObj.target.id;
     console.log(choice);
    let choices = ['head','tail'];
    let tossResult = parseInt(Math.random()*choices.length);
    console.log(tossResult)
    
     tosVal.innerText = choices[tossResult]

    // console.log(choices[tossResult])

    if(choices[tossResult] === choice){
        yScore.innerText = parseInt(yScore.innerText) +1;
        result.innerText = "You Win"
    }else{
        cScore.innerText = parseInt(cScore.innerText) +1;
        result.innerText = "You Lost"
    }
}
