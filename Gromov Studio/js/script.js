document.getElementById('burger').onclick = function() {
    document.getElementById('burger').classList.toggle('active');
    document.getElementById('burg').classList.toggle('active');
    document.getElementsByTagName('body')[0].classList.toggle('lock');
  }