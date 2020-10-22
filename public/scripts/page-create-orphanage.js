const map = L.map('mapid').setView([-27.222633,-49.6455874], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
  iconUrl:"/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68]
})

let marker;
// create and add marker
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng
  // remove icon
  marker && map.removeLayer(marker)
  // add icon layer
  marker = L.marker([lat, lng], { icon })
  .addTo(map)
})


// upload photos
function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector('#images')
  // oegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload')
  // realizar o clone da ultima imagem
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
  // verificar se o campo está vazio, se sim, add ao container de foto
  const input = newFieldContainer.children[0]
  if(input.value == "") {
    return
  }
  // limpar o campo antes de adicionar ao container de imagens
  input.value = ""
  // adicionar o clone ao container da imagem
  container.appendChild(newFieldContainer)
}

function deleteField(event) {
  const span = event.currentTarget
  const fieldsContainer = document.querySelectorAll('.new-upload')
  if(fieldsContainer.length < 2) {
    // limpar o valor do campo
    span.parentNode.children[0].value = ""
    return
  }
  // remover o campo
  span.parentNode.remove();
}

// troca da classe no sim e não (selecionar)
function toggleSelect(event) {
  // retirar a class.active
  document.querySelectorAll('.button-select button')
  .forEach(function(button) {
    button.classList.remove('active')
  })
  // colocar a classe no botão clicado
  const button = event.currentTarget
  button.classList.add('active')
  // atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends]')
  input.value = button.dataset.value
}
