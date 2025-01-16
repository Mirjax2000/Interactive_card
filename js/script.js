"use strict";
(() => {
    const cardCvc = document.getElementById("cardCvc"), cardNumber = document.getElementById("cardNumber"), cardName = document.getElementById("cardName"), cardExp = document.getElementById("cardExp"), form = document.getElementById("form"), thankYou = document.querySelector(".thank-you"), formName = document.getElementById("formName"), formNumber = document.getElementById("formNumber"), formMonth = document.getElementById("formMonth"), formYear = document.getElementById("formYear"), formCvc = document.getElementById("formCvc"), formSubmit = document.getElementById("formSubmit"), formArray = [formName, formNumber, formMonth, formYear, formCvc];
    console.log(formArray);
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
    });
    const string = "1234567890123456";
    let result = "";
    for (let index = 0; index < string.length; index++) {
        if (index % 4 === 0) {
            result += " ";
        }
        result += string[index];
    }
    form.addEventListener("submit", (e) => {
        let isValid = true;
        e.preventDefault();
        formArray.forEach((input) => {
            if (input.value.length === 0) {
                isValid = false;
                const errorElement = input.nextElementSibling;
                errorElement.innerText = "Cant be empty";
                errorElement.setAttribute("data-visible", "true");
            }
        });
        if (isValid) {
            form.classList.add("black-hole");
            thankYou.classList.remove("black-hole");
        }
    });
})();
