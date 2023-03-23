let sum = document.getElementById("sum")
let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let answer = document.getElementById("answer")
let veriable = 50000;
sum.innerHTML = veriable;

btn.onclick = function() {
    

    

    if(veriable == 0){

        answer.innerHTML = "Пополните карту"

    }

    if(inp.value > veriable){

        answer.innerHTML = "Нет таких средств"



    }
    else if(inp.value <= veriable){

        veriable = veriable - inp.value;

        sum.innerHTML = veriable;

    }
    

}
