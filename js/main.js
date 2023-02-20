const feature = document.querySelector('.link__feature');
const featureLink = document.querySelector('.feature__links');
const featureIcon = document.querySelector('.feature__icon');
const company = document.querySelector('.link__company');
const companyLink = document.querySelector('.company__links');
const companyIcon = document.querySelector('.company__icon');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

feature.addEventListener('click', () => {
    featureLink.classList.toggle('active');
    featureIcon.classList.toggle('open');
});

company.addEventListener('click', () => {
    companyLink.classList.toggle('active');
    companyIcon.classList.toggle('open');
});

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('open');
});