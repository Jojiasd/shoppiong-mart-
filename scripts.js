document.addEventListener("DOMContentLoaded", function() {
    // Array of products (You can expand this array with more products)
    const products = [
      {
        name: "Laptop",
        description: "High-performance laptop for gaming and work.",
        price: "$999.99",
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6090/6090904_rd.jpg",
      },{
        name: "Laptop",
        description: "High-performance laptop for gaming and work.",
        price: "$999.99",
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5854/5854908_rd.jpg",
      },{
        name: "Laptop",
        description: "High-performance laptop for gaming and work.",
        price: "$999.99",
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6292/6292312cv3d.jpg",
      },{
        name: "Laptop",
        description: "High-performance laptop for gaming and work.",
        price: "$999.99",
        img: "https://th.bing.com/th/id/OIP.NT8UeRkqaZkS7ZHo2ZQFNQHaFF?rs=1&pid=ImgDetMain",
      },{
        name: "Laptop",
        description: "High-performance laptop for gaming and work.",
        price: "$999.99",
        img: "https://th.bing.com/th/id/R.b0e7565c0f30fef351b63a528ede8875?rik=FndvREqAcsUhzw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flaptop-hd-png-laptop-notebook-png-image-1358.png&ehk=xGAMsXKrMflq7kfkG8ITBEJ768O5%2b25MIMjQ%2fKvdKxg%3d&risl=&pid=ImgRaw&r=0",
      },{
        name: "Laptop",
        description: "High-performance laptop for gaming and work.",
        price: "$999.99",
        img: "https://i5.walmartimages.com/asr/6bb425d8-9704-4a7b-9557-22ea5de91a44_1.f9336b2c76746f1acacced5a349eb37e.jpeg"
      },{
        name: "Laptop",
        description: "High-performance laptop for gaming and work.",
        price: "$999.99",
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6292/6292312_rd.jpg",
      },
      {
        name: "Laptop",
        description: "High-performance laptop for gaming and work.",
        price: "$999.99",
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6292/6292312_rd.jpg",
      },
      {
        name: "Smartphone",
        description: "Latest model with cutting-edge features.",
        price: "$799.99",
        img: "https://images.macrumors.com/article-new/2023/02/iPhone-15-Cyan-and-Magenta-Feature-2.jpg",
      },
      {
        name: "Smartphone",
        description: "Latest model with cutting-edge features.",
        price: "$799.99",
        img: "https://images.macrumors.com/article-new/2023/02/iPhone-15-Cyan-and-Magenta-Feature-2.jpg",
      },{
        name: "Smartphone",
        description: "Latest model with cutting-edge features.",
        price: "$799.99",
        img: "https://images.macrumors.com/article-new/2023/02/iPhone-15-Cyan-and-Magenta-Feature-2.jpg",
      },{
        name: "Smartphone",
        description: "Latest model with cutting-edge features.",
        price: "$799.99",
        img: "https://images.macrumors.com/article-new/2023/02/iPhone-15-Cyan-and-Magenta-Feature-2.jpg",
      },{
        name: "Smartphone",
        description: "Latest model with cutting-edge features.",
        price: "$799.99",
        img: "https://images.macrumors.com/article-new/2023/02/iPhone-15-Cyan-and-Magenta-Feature-2.jpg",
      },
    ];
  
    const productContainer = document.getElementById("product-container");
  
    // Function to generate product cards
    function displayProducts() {
      products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
  
        card.innerHTML = `
          <img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="price">${product.price}</div>
          <button class="buy-btn">Add to Cart</button>
        `;
  
        productContainer.appendChild(card);
      });
    }
  
    // Call the function to display products on page load
    displayProducts();
  });
  