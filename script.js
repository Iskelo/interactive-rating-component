"use strict";
const ratings = document.querySelectorAll('.btn');
const submit = document.querySelector('.btn__submit');
const retry = document.querySelector('.retry');
const reting = document.getElementById('rating')
const content = document.querySelector('.rating__content');
const modal = document.querySelector('.rating__modal');


function modalWindow() {
	submit.addEventListener('click', () => {
		modal.classList.remove('hiden');
		content.classList.add('hiden');
	})
	retry.addEventListener('click', () => {
		modal.classList.add('hiden');
		content.classList.remove('hiden');
	})
}
modalWindow()

ratings.forEach((rate) => {
	rate.addEventListener('click', () => {
		reting.innerHTML = rate.innerHTML;
	})
})