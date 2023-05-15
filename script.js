let products = {
  //initialisation de donné
  data: [
    {
      productName:"simple bague",
      category:"Tool",
      price:"LOREM IPSUM BLAAHHDHDHGHDB VFBFRHVFRGVHRFIVFRVFRUVF JHBRUBRBJGRHBGJBRHHJR RJRNJRKRGRPGJIGORBU RIRGHRJGBRHGBRHBBRH",
      image:"image/bague_simple.jpg",
    },
    {
      productName:"cut a carre ",
      category:"Eat",
      price:"65",
      image:"image/decoupe_careaux.jpg",
    },
    
    {
      productName:"silver black bague",
      category:"Tool",
      price:"15 000",
      image:"bague_noir",
    },
    {
      productName:"cirage ",
      category:"Tool",
      price:"2",
      image:"cirage_noir.jpg",
    },
    
    
    {
      productName:"golden diamont bague",
      category:"tool",
      price:"250 000",
      image:"bague_diamont.jpg",
    },
    {
      productName:"beche bois rouge",
      category:"tool",
      price:"30",
      image:"beche_bois.jpg",
    },
    
    {
      productName:"heart golden bague",
      category:"Tool",
      price:"23 400",
      image:"bague_coeur.jpg",
    },
    
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "white-tshirt.jpg",
    },
    {
      productName:"Ampoule economique",
      category:"Electronic",
      price:"1.5",
      image:"ampoule.jpeg",
    },
    {
      productName:"sardinne anny rouge ",
      category:"Eat",
      price:"3",
      image:"Anny_rouge.png",
    },
    {
      productName:"sardine anny tomate",
      category:"Eat",
      price:"3",
      image:"Anny_tomate.png",
    },
    {
      productName:"chipsy cream ",
      category:"Eat",
      price:"2.5",
      image:"chipsy_cream.png",
    },
    {
      productName:"cut a wood",
      category:"Tool",
      price:"3.5",
      image:"cie.jpg",
    },
    {
      productName:"interupteur electrique",
      category:"Electronic",
      price:"0.5",
      image:"interupteur.jpg",
    },

        
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "short-skirt.jpg",
    },
    {
      productName:"cream cutanné lotion",
      category:"Tool",
      price:"3.5",
      image:"lotion2.jpg",
    },
    
    {
      productName:"ordinateur fixe ",
      category:"Electronic",
      price:"480",
      image:"ordinateur_fixe.jpg",
    },
    
    {
      productName:"liquid savon detergent",
      category:"Tool",
      price:"1.5",
      image:"detaul.png",
    },
    
    {
      productName:"chipsy chilli",
      category:"Eat",
      price:"2.5",
      image:"chipsy_chilli.png",
    },
    
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "sporty-smartwatch.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "knitted-top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "black-leather-jacket.jpg",
    },
    {
      productName:"porche white dubai",
      category:"Car",
      price:"2 300 000",
      image:"car_white.jpg",
    },
    {
      productName:"cereal box ",
      category:"Eat",
      price:"4.5",
      image:"cereal_boxes.png",
    },
    {
      productName:"chypsy chicken",
      category:"Eat",
      price:"2.5",
      image:"chipsy_chicken.png",
    },
      {
      productName:"egg frezeen",
      category:"Eat",
      price:"10",
      image:"oeuf.jpg",
    },
      {
      productName:"phone support",
      category:"Electronic",
      price:"51",
      image:"prise_tel.jpg",
    },
    

    
    
    {
      productName:"cd sans gravure",
      category:"Electronique",
      price:"1",
      image:"cd_normal.png",
    },
    {
      productName:"t-shirt black regular  ",
      category:"Topwear",
      price:"20",
      image:"t-shirt_noir.jpg",
    },
    {
      productName:"nike 21hhn2 barcelona",
      category:"Bottomwear",
      price:"50",
      image:"nike_noir.jpg",
    },
    
    
    
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "pink-trousers.jpg",
    },
    {
      productName:"maillot psg neymar collector ",
      category:"Topwear",
      price:"1049.99",
      image:"vareuse_psg.jpg",
    },
    {
      productName:"maillot real-madrid blanc collector",
      category:"Topwear",
      price:"1050",
      image:"vareuse_real.jpg",
    },
    
    
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "brown-jacket.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "comfy-gray-pants.jpg",
    },
    {
      productName:"simple calice",
      category:"Tool",
      price:"1 000",
      image:"calice_simple.jpg",
    },
    {
      productName:"golden calice",
      category:"Tool",
      price:"2 500",
      image:"calise_or.jpg",
    },
    {
      productName:"bugatti v12 black",
      category:"Car",
      price:"1 800 000",
      image:"car_black.jpg",
    },
    {
      productName:"roll royse black v12",
      category:"Car",
      price:"3 500 000",
      image:"car_black_black.jpg",
    },
    {
      productName:"oddi tech red black",
      category:"Car",
      price:"86 000",
      image:"car_black_red.jpg",
    },
    
    
    
    
    
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
