let currScore = 0;

function run(){
    const q1 = document.querySelector("#q1");
    const q2 = document.querySelector("#q2");

    const num1 = Math.ceil(Math.random()*10);
    const num2 = Math.ceil(Math.random()*10);

    q1.textContent = num1;
    q2.textContent = num2;

    let scoreEl = document.querySelector("#score");
    let correctAns = num1*num2;
    let inputEl = document.querySelector("input");
    const btn = document.querySelector(".submit");

    btn.addEventListener("click", ()=>{
        const userAns = +inputEl.value;
        if(userAns === correctAns) currScore++;
        else currScore--;
        updateLocalStorage();
        run();
    })
    function updateLocalStorage(){
        localStorage.setItem("score", JSON.stringify(currScore));
        scoreEl.innerHTML = currScore+"";
    }
}

run();