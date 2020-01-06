document.getElementById('burger').onclick = function() {
    document.getElementById('burger').classList.toggle('active');
    document.getElementById('burg').classList.toggle('active');
    document.getElementsByTagName('body')[0].classList.toggle('lock');
  }

  document.getElementById('dropSpeed').onclick = function() {
    document.getElementById('speed').classList.toggle('select');
  }

  document.getElementById('contactsDown1').onclick = function() {
    document.getElementById('contactsDown1').classList.toggle('show');
    document.getElementById('contactsShow1').classList.toggle('show');
  }
  document.getElementById('contactsDown2').onclick = function() {
    document.getElementById('contactsDown2').classList.toggle('show');
    document.getElementById('contactsShow2').classList.toggle('show');
  }
  document.getElementById('contactsDown3').onclick = function() {
    document.getElementById('contactsDown3').classList.toggle('show');
    document.getElementById('contactsShow3').classList.toggle('show');
  }