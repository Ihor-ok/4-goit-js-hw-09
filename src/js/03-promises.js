import Notiflix from 'notiflix';

const ref = {
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  form: document.querySelector(".form"),
} 

ref.form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  let delay = Number(evt.target.elements.delay.value);
  let position = 1;
  const step = Number(evt.target.elements.step.value);
  const amount = Number(evt.target.elements.amount.value);


  for (let i = 0; i < amount; i++) {
    createPromise(position, delay);
    delay += step;
    position += 1;
  }

  console.log(`delay: ${delay}, step: ${step}, amount: ${amount}, position: ${position}`);
};


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
    // Fulfill
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
  }, delay)
  
}
