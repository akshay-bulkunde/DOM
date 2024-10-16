let counterValue = document.querySelector('.count');
let increment = document.querySelector('.plus');
let decrement =  document.querySelector('.minus');
let changeBy =  document.querySelector('.change');
let resetBtn =  document.querySelector('.reset');

increment.addEventListener('click' , () => {
    let newValue = Number(counterValue.textContent) + Number(changeBy.value);
    counterValue.textContent = newValue;
});

decrement.addEventListener('click' , () => {
    let newValue = Number(counterValue.textContent) - Number(changeBy.value);
    if(newValue < 0){
        counterValue.textContent = 0;
    }else{
        counterValue.textContent = newValue;
    }
})

resetBtn.addEventListener('click' , () => {
    counterValue.textContent = 0;
});