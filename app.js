let listaAmigos = [];

function agregarAmigo() {
  const input = document.querySelector('#amigo');
  const nombre = input.value.trim();

  if (!nombre) {
    alert('Por favor, inserte un nombre.');
    return;
  }

  listaAmigos.push(nombre);
  actualizarLista();    
  input.value = '';
  input.focus();
}
