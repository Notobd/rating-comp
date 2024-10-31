'use strict';
//selecting elements and assigning them to variables in global scope
const ratingBtn = document.querySelectorAll('.child');
console.log(ratingBtn);
const subBtn = document.querySelector('.sub-but');
console.log(subBtn);
const message = document.querySelector('.thank-you');
console.log(message);
const hide = document.querySelector('.hidden');
console.log(hide);
const overlay = document.querySelector('.overlay');
console.log(overlay);
const text = document.querySelector('.selection');
console.log(text);

// for (let i = 0; i < ratingBtn.length; i++) {
//   ratingBtn[i].addEventListener("click", function () {
//     console.log([i]);
//     text.textContent = `You selected ${i} out of 5`;
//   });
// }

//cretaing functionalities

//assigned the ratiingmark in the global scope to be able to access it thru out the progrM
let ratingMark;
ratingBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    ratingMark = btn.textContent;
  });
});

//submit button funtion
const submit = function () {
  hide.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
  text.textContent = `You selected ${ratingMark} out of 5`;
};
subBtn.addEventListener('click', submit);

//esc to close overlay
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !hide.classList.contains('.hidden')) {
    hide.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  }
});
