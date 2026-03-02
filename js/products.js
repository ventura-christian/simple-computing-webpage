let currentIndex = 0;

(function () {
  "use strict";

  const products = [
    {
      name: "Black Matte Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/black-matte.jpg",
      description:
        "100 pack of durable, matte black colored card sleeves with tournament-grade shuffle feel. ",
    },
    {
      name: "Blossom Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/blossom.jpg",
      description:
        "100 pack of durable, blossom (multicolor, holographic) colored card sleeves with tournament-grade shuffle feel. ",
    },
    {
      name: "Blue Matte Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/blue-matte.jpg",
      description:
        "100 pack of durable, matte blue colored card sleeves with tournament-grade shuffle feel. ",
    },
    {
      name: "Clear Matte Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/clear-matte.jpg",
      description:
        "100 pack of durable, clear (see through) matte colored card sleeves with tournament-grade shuffle feel. ",
    },
    {
      name: "Emerald Matte Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/emerald-matte.jpg",
      description:
        "100 pack of durable, emerald (brilliant green) colored matte colored card sleeves with tournament-grade shuffle feel. ",
    },
    {
      name: "Ivory Matte Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/ivory-matte.jpg",
      description:
        "100 pack of durable, ivory (bone white) colored matte card sleeves with tournament-grade shuffle feel. ",
    },
    {
      name: "Non-Glare Black Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/non-glare-black.jpg",
      description:
        "100 pack of durable, non-glare black colored card sleeves with tournament-grade shuffle feel. ",
    },
    {
      name: "Orange Matte Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/orange-matte.jpg",
      description:
        "100 pack of durable, orange matte colored card sleeves with tournament-grade shuffle feel. ",
    },
    {
      name: "Petrol Matte Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/petrol-matte.jpg",
      description:
        "100 pack of durable, petrol (intense, deep black) colored card sleeves with tournament-grade shuffle feel. ",
    },
    {
      name: "Purple Matte Dragon Shield Sleeves",
      image: "assets/images/card-sleeves/purple-matte.jpg",
      description:
        "100 pack of durable, purple matte colored card sleeves with tournament-grade shuffle feel. ",
    },
  ];

  function initProducts() {
    const imageEL = document.querySelector(".sleeve-image");
    const nameEL = document.getElementById("sleeve-name");
    const descEL = document.getElementById("sleeve-description");

    renderProduct(currentIndex);

    function renderProduct(index) {
      const product = products[index];

      imageEL.src = product.image;
      nameEL.textContent = product.name;
      descEL.textContent = product.description;
    }
  }

  window.initProducts = initProducts;
})();
