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

function actualizarLista() {
  const ul = document.querySelector('#listaAmigos');
  ul.innerHTML = ''; 

  for (let i = 0; i < listaAmigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = listaAmigos[i];
    ul.appendChild(li);
  }
}