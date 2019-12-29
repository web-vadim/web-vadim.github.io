document.getElementById('burger').onclick = function() {
    document.getElementById('burger').classList.toggle('active');
    document.getElementById('burg').classList.toggle('active');
    document.getElementsByTagName('body')[0].classList.toggle('lock');
  }

  let inputs = document.querySelectorAll('.input__file');
  Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
      labelVal = label.querySelector('.label__button').innerText;

    input.addEventListener('change', function (e) {
      let countFiles = '';
      if (this.files && this.files.length >= 1)
        countFiles = this.files.length;

      if (countFiles)
        label.querySelector('.label__button').innerText = 'Выбрано файлов: ' + countFiles;
      else
        label.querySelector('.label__button').innerText = labelVal;
    });
  });

  let formToggle = document.getElementById('formSubmit'),
      formModal = document.getElementById('formModal'),
      formClose = document.querySelector('formClose');

      formToggle.onclick = function() {
      // formModal.style.display="block";
      formModal.style.top="30%";
      document.getElementById('wrapper').style.visibility="hidden";
      document.getElementsByTagName('body')[0].style.backgroundColor="#e5e5e5";
      document.getElementsByTagName('body')[0].style.overflow="hidden";
      return false; 
      };
      formClose.onclick = function () {
        // formModal.style.display="none";
      };


 
      
