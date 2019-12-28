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