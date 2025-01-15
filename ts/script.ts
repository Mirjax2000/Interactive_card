
(()=>{
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
    let name:string = formName.value;
    cardName.innerText = name;
  })



  form.addEventListener('submit', (e) => {
    e.preventDefault();
  }

})();