"use strict";
(() => {
    const cardCvc = document.getElementById('cardCvc'), cardNumber = document.getElementById('cardNumber'), cardName = document.getElementById('cardName'), cardExp = document.getElementById('cardExp'), form = document.getElementById('form'), formName = document.getElementById('formName'), formNumber = document.getElementById('formNumber'), formMonth = document.getElementById('formMonth'), formYear = document.getElementById('formYear'), formCvc = document.getElementById('formCvc'), formSubmit = document.getElementById('formSubmit');
    formName.addEventListener('input', (e) => {
        let name = formName.value;
        cardName.innerText = name;
    });
    formNumber.addEventListener('input', (e) => {
        let number = formNumber.value.replace(/\D/g, ''); // Odstraní všechny nečíselné znaky
        let temp = '';
        for (let index = 0; index < number.length && index < 16; index++) {
            if (index > 0 && index % 4 === 0) {
                temp += ' ';
            }
            temp += number[index];
            console.log(number[index]);
        }
        cardNumber.innerText = temp;
        formNumber.value = temp;
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
})();
