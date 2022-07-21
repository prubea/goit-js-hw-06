const decreaseBtn = document.querySelector('[data-action="decrement"]');
const increaseBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

increaseBtn.addEventListener("click", increment);
decreaseBtn.addEventListener("click", decrement);