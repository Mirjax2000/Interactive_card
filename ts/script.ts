
(() => {
  const cardCvc = document.getElementById('cardCvc') as HTMLInputElement,
    cardNumber = document.getElementById('cardNumber') as HTMLInputElement,
    cardName = document.getElementById('cardName') as HTMLInputElement,
    cardExp = document.getElementById('cardExp') as HTMLInputElement,
    form = document.getElementById('form') as HTMLFormElement,
    formName = document.getElementById('formName') as HTMLInputElement,
    formNumber = document.getElementById('formNumber') as HTMLInputElement,
    formMonth = document.getElementById('formMonth') as HTMLInputElement,
    formYear = document.getElementById('formYear') as HTMLInputElement,
    formCvc = document.getElementById('formCvc') as HTMLInputElement,
    formSubmit = document.getElementById('formSubmit') as HTMLInputElement;

    formName.addEventListener('input', (e) => {
      let name: string = formName.value.replace(/[^a-zA-Z\s]/g, '');
      let temp: string = '';
    
      for (let index = 0; index < name.length && index <= 25; index++) {
        temp += name[index];
      }
      cardName.innerText = temp;
      formName.value = temp;
    });

  formNumber.addEventListener('input', (e) => {
    let number: string = formNumber.value.replace(/\D/g, ''); // Odstraní všechny nečíselné znaky
    let temp: string = '';

    for (let index = 0; index < number.length && index < 16; index++) {
      if (index > 0 && index % 4 === 0) {
        temp += ' ';
      }
      temp += number[index];
    }

    cardNumber.innerText = temp;
    formNumber.value = temp;
  });



  form.addEventListener('submit', (e) => {
    e.preventDefault();
  })

})();