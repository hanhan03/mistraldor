const grid = document.getElementById("productGrid");

for (const key in products) {
  const product = products[key];

  const card = document.createElement("a");
  card.href = `product.html?item=${key}`;
  card.className = "product-card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
  `;

  grid.appendChild(card);
}

