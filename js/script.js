"use strict";
(() => {
    const cardCvc = document.getElementById("cardCvc"), cardNumber = document.getElementById("cardNumber"), cardName = document.getElementById("cardName"), cardExp = document.getElementById("cardExp"), thankYou = document.querySelector(".thank-you"), form = document.getElementById("form"), formName = form.querySelector("#formName"), formNumber = form.querySelector("#formNumber"), formMonth = form.querySelector("#formMonth"), formYear = form.querySelector("#formYear"), formCvc = form.querySelector("#formCvc"), formSubmit = form.querySelector("#formSubmit"), formArray = [formName, formNumber, formMonth, formYear, formCvc];
    // --- cardName ---
    formName.addEventListener("input", (e) => {
        let name = formName.value.replace(/[^a-zA-Z\s]/g, "");
        name = name.replace(/\s+/g, " ");
        let temp = "";
        for (let index = 0; index < name.length && index <= 25; index++) {
            temp += name[index];
        }
        cardName.innerText = temp;
        formName.value = temp;
    });
    // --- cardNumber ---
    formNumber.addEventListener("input", (e) => {
        let number = formNumber.value.replace(/\D/g, ""); // Odstraní všechny nečíselné znaky
        let temp = "";
        for (let index = 0; index < number.length && index < 16; index++) {
            if (index > 0 && index % 4 === 0) {
                temp += " ";
            }
            temp += number[index];
        }
        cardNumber.innerText = temp;
        formNumber.value = temp;
        if (formNumber.value.length === 0) {
            cardNumber.innerText = "0000 0000 0000 0000";
        }
    });
    // --- cardCvc ---
    formCvc.addEventListener("input", (e) => {
        let number = formCvc.value;
        let temp = "";
        for (let index = 0; index < number.length && index < 3; index++) {
            temp += number[index];
        }
        cardCvc.innerText = temp;
        formCvc.value = temp;
        if (formCvc.value.length === 0) {
            cardCvc.innerText = "000";
        }
    });
    form.addEventListener("submit", (e) => {
        let isValid = true;
        e.preventDefault();
        formArray.forEach((input) => {
            const errorElement = input.nextElementSibling;
            if (input.value.length === 0) {
                isValid = false;
                input.classList.add("error");
                errorElement.innerText = "Cant be empty";
                errorElement.setAttribute("data-visible", "true");
            }
            else {
                errorElement.setAttribute("data-visible", "false");
                input.classList.remove("error");
            }
        });
        if (isValid) {
            form.classList.add("black-hole");
            thankYou.classList.remove("black-hole");
        }
    });
})();
