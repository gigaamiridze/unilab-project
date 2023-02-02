function fetchData() {
  fetch('https://fakestoreapi.com/products?limit=12').then((response) => {
    return response.json();
  }).then((data) => {
    let productContent = "";
    data.map((value) => {
      productContent += `<div class="card">
                          <h3 class="title">${value.title}</h3>
                          <img src="${value.image}" class="image" alt="Product">
                          <p class="description">${value.description}</p>
                          <p class="category">${value.category}</p>
                          <span class="price">${value.price} $</span>
                        </div>`;
      document.getElementById("cards").innerHTML = productContent;
    })
  }).catch((error) => {
    console.log(error);
  })
}

fetchData();