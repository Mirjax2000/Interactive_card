(() => {
  const form = document.getElementById("contactForm") as HTMLFormElement;
  const modal = document.getElementById("modal") as HTMLDivElement;

  const general: HTMLInputElement = form.querySelector("#general") as HTMLInputElement;
  const support: HTMLInputElement = form.querySelector("#support") as HTMLInputElement;

  const checkboxesArray: HTMLInputElement[] = [general, support];

  checkboxesArray.forEach((checkbox: HTMLInputElement): void => {
    checkbox.addEventListener("click", (e: Event): void => {
      const current = e.target as HTMLInputElement;
      if (current.checked) {
        checkboxesArray.forEach((box: Element): void => {
          (box as HTMLInputElement).removeAttribute("required");
          (box as HTMLInputElement).checked = false;
          current.checked = true;
          current.setAttribute("required", "");
        });
      } else {
        checkboxesArray.forEach((box): void => {
          box.setAttribute("required", "");
        });
      }
    });
  });

  form.addEventListener("submit", async (e: SubmitEvent): Promise<void> => {
    e.preventDefault();
    if (form.checkValidity()) {
      modal.classList.remove("hide");
      const formData = new FormData(form);
      const response = await fetch("/submit-form", {
          method: 'POST',
          body: JSON.stringify(Object.fromEntries(formData)),
          headers: {
              'Content-Type': 'application/json'
          }
      });
      const result = await response.json();
      console.log(result);
  };
  });
})();
