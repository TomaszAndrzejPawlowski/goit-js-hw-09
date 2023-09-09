import Notiflix, { Notify } from 'notiflix';
const promiseDataForm = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
const handleSubmit = event => {
  event.preventDefault();
  const delayData = parseInt(event.target.elements['delay'].value);
  const stepData = parseInt(event.target.elements['step'].value);
  const amountData = parseInt(event.target.elements['amount'].value);
  for (let i = 0; i < amountData; i++) {
    createPromise(i + 1, delayData + stepData * i)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
};
promiseDataForm.addEventListener('submit', handleSubmit);
