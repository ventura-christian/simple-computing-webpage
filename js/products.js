(function () {
  let currentIndex = 0;
  ("use strict");

  const products = [
    {
      name: "Black Matte Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/black-matte.jpg",
      description:
        "100 pack of durable, matte black colored card sleeves with tournament-grade shuffle feel. ",
      price: 30.0,
    },
    {
      name: "Blossom Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/blossom.jpg",
      description:
        "100 pack of durable, blossom (multicolor, holographic) colored card sleeves with tournament-grade shuffle feel. ",
      price: 25.99,
    },
    {
      name: "Blue Matte Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/blue-matte.jpg",
      description:
        "100 pack of durable, matte blue colored card sleeves with tournament-grade shuffle feel. ",
      price: 45.5,
    },
    {
      name: "Clear Matte Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/clear-matte.jpg",
      description:
        "100 pack of durable, clear (see through) matte colored card sleeves with tournament-grade shuffle feel. ",
      price: 22.5,
    },
    {
      name: "Emerald Matte Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/emerald-matte.webp",
      description:
        "100 pack of durable, emerald (brilliant green) colored matte colored card sleeves with tournament-grade shuffle feel. ",
      price: 44.99,
    },
    {
      name: "Ivory Matte Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/ivory-matte.jpg",
      description:
        "100 pack of durable, ivory (bone white) colored matte card sleeves with tournament-grade shuffle feel. ",
      price: 25.0,
    },
    {
      name: "Non-Glare Black Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/non-glare-black.jpg",
      description:
        "100 pack of durable, non-glare black colored card sleeves with tournament-grade shuffle feel. ",
      price: 49.0,
    },
    {
      name: "Orange Matte Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/orange-matte.jpg",
      description:
        "100 pack of durable, orange matte colored card sleeves with tournament-grade shuffle feel. ",
      price: 50.0,
    },
    {
      name: "Petrol Matte Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/petrol-matte.jpg",
      description:
        "100 pack of durable, petrol (intense, deep black) colored card sleeves with tournament-grade shuffle feel. ",
      price: 35.99,
    },
    {
      name: "Purple Matte Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/purple-matte.jpg",
      description:
        "100 pack of durable, purple matte colored card sleeves with tournament-grade shuffle feel. ",
      price: 39.99,
    },
  ];

  // targets the elements to display the information of the current product on the webpage
  function initProducts() {
    const imageEL = document.querySelector(".sleeve-image");
    const nameEL = document.getElementById("sleeve-name");
    const descEL = document.getElementById("sleeve-description");
    const sleevePrice = document.getElementById("sleeve-price");
    renderProduct(currentIndex);

    function renderProduct(index) {
      const product = products[index];
      imageEL.src = product.image;
      nameEL.textContent = product.name;
      descEL.textContent = product.description;

      sleevePrice.textContent = `$${product.price.toFixed(2)}`;
    }

    const prevBtn = document.getElementById("prev-sleeve");
    const nextBtn = document.getElementById("next-sleeve");

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + products.length) % products.length;
      renderProduct(currentIndex);
      // this log statement keeps track of the index in the console to verify correct product is shown
      console.log(
        "Current index:",
        currentIndex,
        "Product:",
        products[currentIndex].name,
      );
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % products.length;
      renderProduct(currentIndex);
      console.log(
        "Current index:",
        currentIndex,
        "Product:",
        products[currentIndex].name,
      );
    });
    console.log(products[currentIndex]);
  }

  window.initProducts = initProducts;
})();
