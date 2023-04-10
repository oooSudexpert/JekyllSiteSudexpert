(function () {
  'use strict'

  function ready() {
    const thanksModal = new bootstrap.Modal('#thanksModal', {});
    const forms = document.querySelectorAll('.form-callback')

    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {

        event.preventDefault()
        event.stopPropagation()

        const url = form.action;
        const formData = new FormData(form);

        if ((formData.get("required")).length > 0) { // проверка на спамботов
          return;
        }

        const params = Array.from(formData);
        let query = new URLSearchParams(params);
        let queryString = query.toString();

        const req = new XMLHttpRequest();
        req.open("GET", url + '?' + queryString, false);
        req.send(null);
        console.log(req.status);
        if (req.status == 200) {
          // form.classList.add('was-validated');
          form.reset();
          thanksModal.show();
        }

      }, false)
    })
  }

  document.addEventListener("DOMContentLoaded", ready);
})()