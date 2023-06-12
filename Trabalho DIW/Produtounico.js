const urlParams = new URLSearchParams(window.location.search)
const productId = urlParams.get('id')
const req = fetch('https://diwserver.vps.webdock.cloud/products')
  .then(res => res.json())
  .then(json => {
    json.products.forEach(element => {
      if (element.id == productId) {
        document.getElementById('aparecer').innerHTML += `
                        <div class="card">
                            <img src="${element.image}" class="card-img" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${element.title}</h5>
                                <p class="card-text">R$ ${element.price}</p>
                                <br>
                                <p class="card-text"><small class="text-muted">${element.category}</small></p>
                                <br>
                                <p class="card-text"><small class="text-muted">${element.brandName}</small></p>
                                </div>
                        </div>
                    `
      }
    })
  })