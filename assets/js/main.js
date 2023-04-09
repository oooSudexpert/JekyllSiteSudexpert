(function () {
  'use strict'
  
  function ready() {
    const forms = document.querySelectorAll('.form-callback')
    
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {    
      form.addEventListener('submit', event => {

        event.preventDefault()
        event.stopPropagation()

        let url = form.action;
        const formData = new FormData(form);  

        console.log(formData.get("required"));

        if( (formData.get("required")).length > 0 ){ // проверка на спам
          return;    
        }
        
        const params = Array.from(formData);  
        let query = new URLSearchParams(params);
        const queryString = query.toString();

        let req = new XMLHttpRequest();
        req.open("GET", url + '?' + queryString, false);
        req.send(null);
        console.log(req);
        if(req.status == 200){
          // form.classList.add('was-validated');
          form.reset();
        }   
        
      }, false)
    })
  }

  function onlyPhoneNumber (str){
    str = String(str); //
    var regexp = /[\d]/g; //выбираем только цифры
    var NumbersArr = String(str.match(regexp)); //делаем из элемента массива с цфрами - строку, получаем их через запятую
    var NumbersStr = NumbersArr.replace( /,/g, "" ); //убираем запятую  
    return NumbersStr;
  };

  document.addEventListener("DOMContentLoaded", ready);
})()