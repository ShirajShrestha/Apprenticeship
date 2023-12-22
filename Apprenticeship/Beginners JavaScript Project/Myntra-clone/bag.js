const productContainer = document.querySelector(".product-container");

const url = "https://fakestoreapi.com/products";

let productInBagObj;
let productInBag = localStorage.getItem("products");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(productInBag);
    productInBagObj = productInBag.map((productId) => {
      data.foreach((product) => {
        if (productId == product.id) {
          return item;
        }
      });
      console.log(productInBagObj);
      //   productContainer.innerHTML += `
      //   <div class="product-card">
      //   <img src="${product.image}" alt="" class="product-img" />
      //   <div class="review">
      //     ${product.rating.rate} <i class="fa-solid fa-star"></i> | ${product.rating.count}
      //   </div>
      //   <div class="item-name">${product.title} </div>
      //   <div class="prices">
      //     <span class="current-price">Rs. ${product.price} </span>
      //   </div>
      //   <button class="add-btn" onClick="addProduct(${product.id})" >Add To Bag</button>
      //   </div>`;
    });
  })
  .catch((error) => console.error("Error:", error));
