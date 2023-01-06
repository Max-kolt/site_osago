"use strict"


document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e){
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);
    
    if (error === 0) {
      document.querySelector('.loading').classList.add('_sending');
      document.querySelector('.loading_body').classList.add('_sending');
      let response = await fetch('sendmail.php',{
        method: 'POST',
        body: formData
      });
      if (response.ok){
        let result = await response.json();
        alert(result.message);
        document.querySelectorAll("._req").value = '';
        form.reset();
        document.querySelector('.loading').classList.remove('_sending');
        document.querySelector('.loading_body').classList.remove('_sending');
      }else{
        alert("Ошибка");
        document.querySelector('.loading').classList.remove('_sending');
        document.querySelector('.loading_body').classList.remove('_sending');
      }
    }else if(error > 1){
      alert(error+" обязательных поля не заполнены");
    }else{
      alert(error+" обязательное поле не заполнено")
    }
  }


  function formValidate(form){
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input)

      if(input.classList.contains('_numb')){
        if (numberTest(input)){

          formAddError(input);
          error++;
        }
      }else if(input.getAttribute("type")==="checkbox" && input.checked === false){
        formAddError(input);
        error++;
      }else{
        if (input.value ==="") {
          formAddError(input);
          error++;
        }
      }

    }
    return error;
  }
  function formAddError(input){
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
    }
  function formRemoveError(input){
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }

  function numberTest(input){
    return !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value);
  }


});
