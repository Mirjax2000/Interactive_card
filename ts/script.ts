(() => {
  const cardCvc = document.getElementById("cardCvc") as HTMLParagraphElement,
    cardNumber = document.getElementById("cardNumber") as HTMLParagraphElement,
    cardName = document.getElementById("cardName") as HTMLParagraphElement,
    cardExp = document.getElementById("cardExp") as HTMLParagraphElement,
    form = document.getElementById("form") as HTMLFormElement,
    thankYou = document.querySelector(".thank-you") as HTMLDivElement,
    formName = document.getElementById("formName") as HTMLInputElement,
    formNumber = document.getElementById("formNumber") as HTMLInputElement,
    formMonth = document.getElementById("formMonth") as HTMLInputElement,
    formYear = document.getElementById("formYear") as HTMLInputElement,
    formCvc = document.getElementById("formCvc") as HTMLInputElement,
    formSubmit = document.getElementById("formSubmit") as HTMLButtonElement,
    formArray = [formName, formNumber, formMonth, formYear, formCvc];
  console.log(formArray);

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

  formNumber.addEventListener("input", (e) => {
    let number: string = formNumber.value.replace(/\D/g, ""); // Odstraní všechny nečíselné znaky
    let temp: string = "";

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
    let isValid: boolean = true;
    e.preventDefault();
    formArray.forEach((input) => {
      if (input.value.length === 0) {
        isValid = false;
        const errorElement = input.nextElementSibling as HTMLParagraphElement;
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
