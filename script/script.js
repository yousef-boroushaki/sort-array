let inputIf1 = document.querySelector(".if-input1");
let result2 = document.querySelector(".result2");
let btnIf = document.querySelector(".btn-condition");
let btnIfReset = document.querySelector(".btn-condition-reset");
let btnAdd = document.querySelector(".btn-add");

btnIfReset.addEventListener('click' , () =>{
    inputIf1.value = "";
    result2.innerHTML = "";
})

var items = []

btnAdd.addEventListener('click', ()=>{

    items.push(parseInt(inputIf1.value)); 
    inputIf1.value = "";
    result2.innerHTML = items.join(" | ");
 
 })

 btnIf.addEventListener('click' , ()=>{

     items.sort(function(a, b){
        return a - b;  
    }
    );

    result2.innerHTML = items.join(" | ");


 })