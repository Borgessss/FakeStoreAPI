const req = fetch('https://diwserver.vps.webdock.cloud/products')
  .then(res => res.json())
  .then(json => {
    const aparecerElement = document.getElementById('aparecer')
    const pesquisarInput = document.getElementById('pesquisar')
    function exibirElementos(elementos) {
      aparecerElement.innerHTML = ''
      elementos.products.forEach(element => {console.log(element)
        aparecerElement.innerHTML += `
          <a href="./detalhes.html?id=${element.id}">
            <div class="card touch" >
              <img src="${element.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title text-truncate">${element.title}</h5>
                <p class="card-text"><small class="text-muted">R$ ${element.price}</small></p>
                <p class="card-text"><small class="text-muted">${element.category}</small></p>
              </div>
            </div>
          </a>
        `
      })
    }
    exibirElementos(json)
    pesquisarInput.addEventListener('input', () => {
      const valorPesquisa = pesquisarInput.value.toLowerCase()
      const elementosFiltrados = json.filter(element =>
        element.title.toLowerCase().includes(valorPesquisa)
      )
      exibirElementos(elementosFiltrados)
    })
  })