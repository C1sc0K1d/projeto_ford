document.getElementById('olho').addEventListener('click', function() {
  document.getElementById('pass').type = 'text';
});

document.getElementById('olho').addEventListener('dblclick', function() {
  document.getElementById('pass').type = 'password';
});

document.getElementById('olho').addEventListener('mouseup', function() {
  document.getElementById('pass').type = 'password';
});

// Para que o password não fique exposto apos mover a imagem.
document.getElementById('olho').addEventListener('mousemove', function() {
  document.getElementById('pass').type = 'password';
});
