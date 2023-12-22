const productContainer = document.querySelector(".product-container"),
  bagCount = document.querySelector(".bag-items");

const url = "https://fakestoreapi.com/products";
// const nextUrl = "https://dummyjson.com/products";

let productInBag;

onload();
function onload() {
  let productStr = localStorage.getItem("products");
  productInBag = productStr ? JSON.parse(productStr) : [];
  bagCountUpdate();
}

//add product in bag
function addProduct(product) {
  productInBag.push(product);
  localStorage.setItem("products", JSON.stringify(productInBag));
  bagCountUpdate();
}

//upadate number of the bag
function bagCountUpdate() {
  if (productInBag < 1) {
    bagCount.style.visibility = "hidden";
  } else {
    bagCount.style.visibility = "visible";
  }
  bagCount.textContent = productInBag.length;
}

//fetching data from api
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    data.forEach((product) => {
      productContainer.innerHTML += `
      <div class="product-card">
      <img src="${product.image}" alt="" class="product-img" />
      <div class="review">
        ${product.rating.rate} <i class="fa-solid fa-star"></i> | ${product.rating.count}
      </div>
      <div class="item-name">${product.title} </div>
      <div class="prices">
        <span class="current-price">Rs. ${product.price} </span>
      </div>
      <button class="add-btn" onClick="addProduct(${product.id})" >Add To Bag</button>
      </div>`;
    });
  })
  .catch((error) => console.error("Error:", error));
