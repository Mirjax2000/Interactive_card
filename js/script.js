"use strict";
(() => {
    const cardCvc = document.getElementById('cardCvc'), cardNumber = document.getElementById('cardNumber'), cardName = document.getElementById('cardName'), cardExp = document.getElementById('cardExp'), form = document.getElementById('form'), formName = document.getElementById('formName'), formNumber = document.getElementById('formNumber'), formMonth = document.getElementById('formMonth'), formYear = document.getElementById('formYear'), formCvc = document.getElementById('formCvc'), formSubmit = document.getElementById('formSubmit');
    formName.addEventListener('input', (e) => {
        let name = formName.value;
        cardName.innerText = name;
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
})();
