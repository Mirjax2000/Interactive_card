(() => {
  const cardCvc = document.getElementById("cardCvc") as HTMLParagraphElement,
    cardNumber = document.getElementById("cardNumber") as HTMLParagraphElement,
    cardName = document.getElementById("cardName") as HTMLParagraphElement,
    cardMonth = document.getElementById("cardMonth") as HTMLParagraphElement,
    cardYear = document.getElementById("cardYear") as HTMLParagraphElement,
    thankYou = document.querySelector(".thank-you") as HTMLDivElement,
    form = document.getElementById("form") as HTMLFormElement,
    formName = form.querySelector("#formName") as HTMLInputElement,
    formNumber = form.querySelector("#formNumber") as HTMLInputElement,
    formMonth = form.querySelector("#formMonth") as HTMLInputElement,
    formYear = form.querySelector("#formYear") as HTMLInputElement,
    formCvc = form.querySelector("#formCvc") as HTMLInputElement,
    expError = form.querySelector("#expError") as HTMLParagraphElement,
    formSubmit = form.querySelector("#formSubmit") as HTMLButtonElement,
    formArray = [formName, formNumber, formCvc];

  // --- cardName ---
  formName.addEventListener("input", (e) => {
    let name: string = formName.value.replace(/[^a-zA-Z\s]/g, "");
    name = name.replace(/\s+/g, " ");
    let temp: string = "";

    for (let index = 0; index < name.length && index <= 25; index++) {
      temp += name[index];
    }
    cardName.innerText = temp;
    formName.value = temp;
  });

  // --- cardNumber ---
  formNumber.addEventListener("input", (e) => {
    let number: string = formNumber.value.replace(/\D/g, "");
    let temp: string = "";

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
    let temp: string = "";

    for (let index = 0; index < number.length && index < 3; index++) {
      temp += number[index];
    }
    cardCvc.innerText = temp;
    formCvc.value = temp;

    if (formCvc.value.length === 0) {
      cardCvc.innerText = "000";
    }
  });
  // --- cardMonth---
  formMonth.addEventListener("input", (e) => {
    let number = formMonth.value.replace(/\D/g, "");
    let temp: string = "";

    for (let index = 0; index < number.length && index <= 1; index++) {
      temp += number[index];
    }
    cardMonth.innerText = temp;
    formMonth.value = temp;
    let tempNumber = Number(temp);
    console.log(tempNumber);

    if (formMonth.value.length === 0) {
      cardMonth.innerText = "00";
    }
    if (tempNumber > 12) {
      expError.setAttribute("data-visible", "true");
      expError.classList.add("error");
      expError.innerText = "Max 12";
    } else {
      expError.classList.remove("error");
      expError.setAttribute("data-visible", "false");
    }
  });

  // --- cardYear---
  formYear.addEventListener("input", (e) => {
    let number: string = formYear.value.replace(/\D/g, "");
    let temp: string = "";

    for (let index = 0; index < number.length && index < 2; index++) {
      temp += number[index];
    }
    cardYear.innerText = temp;
    formYear.value = temp;
    let tempNumber = Number(temp);

    if (formYear.value.length === 0) {
      cardYear.innerText = "00";
    }
    if (tempNumber < 25) {
      expError.setAttribute("data-visible", "true");
      expError.classList.add("error");
      expError.innerText = "Card Expired";
    } else {
      expError.classList.remove("error");
      expError.setAttribute("data-visible", "false");
    }
  });

  form.addEventListener("submit", (e) => {
    let isValid: boolean = true;
    e.preventDefault();
    // --- for each ---
    formArray.forEach((input) => {
      const formError = input.nextElementSibling as HTMLParagraphElement;
      if (input.value.length === 0) {
        input.classList.add("error");
        formError.setAttribute("data-visible", "true");
        formError.innerText = "Cant be empty!";
        isValid = false;
      } else {
        input.classList.remove("error");
        formError.setAttribute("data-visible", "false");
      }
    });

    if (formMonth.value.length === 0 || formYear.value.length === 0) {
      expError.setAttribute("data-visible", "true");
      expError.innerText = "Cant be empty";
      isValid = false;

      if (formMonth.value.length === 0) {
        formMonth.classList.add("error");
      }

      if (formYear.value.length === 0) {
        formYear.classList.add("error");
      }
    } else {
      expError.setAttribute("data-visible", "false");
      formMonth.classList.remove("error");
      formYear.classList.remove("error");
      // --- month---
      if (Number(formMonth.value) > 12) {
        formMonth.classList.add("error");
        expError.setAttribute("data-visible", "true");
        expError.innerText = "Not Valid";
        isValid = false;
      } else {
        expError.setAttribute("data-visible", "false");
        formMonth.classList.remove("error");
      }
      // --- Year---
      if (Number(formYear.value) < 25) {
        formYear.classList.add("error");
        expError.setAttribute("data-visible", "true");
        expError.innerText = "Not Valid";
        isValid = false;
      } else {
        expError.setAttribute("data-visible", "false");
        formYear.classList.remove("error");
      }
    }

    if (isValid) {
      form.classList.add("black-hole");
      thankYou.classList.remove("black-hole");
    }
  });
})();
