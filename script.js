fetch('products.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('products');

    data.forEach(product => {
      container.innerHTML += `
        <div class="card">
          <img src="${product.image}">
          <h3>${product.name}</h3>
          <p class="price">€${product.price}</p>
          <p class="old-price">€${product.oldPrice}</p>
          <button onclick="addToFav('${product.name}')">❤️ Favorito</button>
        </div>
      `;
    });
  });
