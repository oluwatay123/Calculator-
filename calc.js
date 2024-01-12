"use strict";
let screen = document.getElementById("inputBtn");

let buttons = document.querySelectorAll("button");

let btnArr = Array.from(buttons);

let eqnBtn = document.querySelector(".equalBtn");
const oprBtn =document.querySelectorAll('.operator')

let string = "";

const btnDark = document.querySelector('.dark_mode')

const container = document.querySelector('.calculator')

const slider = document.querySelector('.slider.round')

// const inputChecked = document.querySelector('input')

//update screen 
const updateScreen = function(){
    screen.value = string
}

//check for invalid opeartion 
// const checkInavlidOpreation =function(action){
//   if   (/[\+\-\*\/]{2,}/.test(action) || /[\+\-\*\/]$/.test(action)){
    // screen.value = `Error`
//   }
// 
// }
// creating the calculation logic
const calcLogic = (action) => {
//   const action = e.target.innerHTML;

  if (action === "=") {
    equalToCheck();
  } else if (action === "AC") {
    string = "";
    
  } else if (action === "DEL") {
    string = string.substring(0, string.length - 1);
  
  } else {
    string += action; 
  }
 
  
  updateScreen()
};
// set some conditions for equalto operator
const equalToCheck = function () {
  string = eval(string);
  
try{
  if (isNaN(string) || !isFinite(string)) {
    throw new Error("Invalid input");
  }
  
} catch (error) {
  string = "";
}
updateScreen()
};

// event to all buttons
btnArr.forEach((button) => {
  button.addEventListener("click",()=>{
    const action = button.textContent
   
    calcLogic(action)
  });
});

//create darkmode 
btnDark.addEventListener('click', ()=>{
    document.body.classList.toggle('darkMode')
//    document.querySelector('button').classList.toggle('darkMode')
buttons.forEach(element=>{
    element.classList.toggle('darkBtn')
})
eqnBtn.classList.toggle('darkEqn')
oprBtn.forEach(element=>{
    element.classList.toggle('darkOpsBtn')
})
screen.classList.toggle('darkInput')

container.classList.toggle('darkContainer')

// inputChecked.classList.toggle('movement')

slider.classList.toggle('movement')

})

