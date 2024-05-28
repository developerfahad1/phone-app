const phones = [
    {
      brand: "Samsung",
      model: "S20",
      ram: 8,
      rom: 256,
      camera: "20 megapixel",
      price: 500000,
      image: (src =
        "https://cdn.techjuice.pk/wp-content/uploads/2021/03/Samsung-Galaxy-S20-1.jpg"),
    },
    {
      brand: "Xiomi",
      model: "Note10",
      ram: 4,
      rom: 64,
      camera: "10 megapixel",
      price: 15000,
      image: (src = "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666350692.95218417.png"),
    },
    {
      brand: "Infinix",
      model: "Note 8",
      ram: 2,
      rom: 16,
      camera: "5 megapixel",
      price: 30000,
      image: (src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiIzb7TKD1IkANIq1TlUrnqPSM-ZhnCkO7IA&s"),
    },
    {
      brand: "Tecno",
      model: "Spark10",
      ram: 12,
      rom: 512,
      camera: "25 megapixel",
      price: 25000,
      image: (src = 
        "https://qmart.pk/cdn/shop/files/Tecno-Spark-10-Pro-Qmart-1_3fbd8a0a-4dbb-4bd1-861f-c43973079b7a_1200x1200.jpg?v=1700222133"),
    },
    {
      brand: "Iphone",
      model: "14 Pro",
      ram: 4,
      rom: 1024,
      camera: "30 megapixel",
      price: 450000,
      image: (src = "https://static-01.daraz.pk/p/bef31f0aa093ad5e8a2b299a965b2ba7.jpg"),
    },
    {
      brand: "Oppo",
      model: "F11 Pro",
      ram: 8,
      rom: 256,
      camera: "20 megapixel",
      price: 35000,
      image: (src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNzfgVhaiJwK21DGDWJ1ytjciGYyU4KClnw&s"),
    },
    {
      brand: "Vivo",
      model: "Y20",
      ram: 4,
      rom: 64,
      camera: "8 megapixel",
      price: 15000,
      image: (src =
        "https://whatsmobile.com.pk/wp-content/uploads/2022/02/Untitled-design-21.png"),
    },
    {
      brand: "Realme",
      model: "C33",
      ram: 50,
      rom: 1024,
      camera: "60 megapixel",
      price: 40000,
      image: (src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLY4Qh0DBKL9infHmvGXsCsuscSJ7s5l2d3Q&s"),
    },
  ];
  
  phones.quantity= 1;
  
  let cart = [];
  let items = JSON.parse(localStorage.getItem("cartItem"));
  
  if(items==null){
      cart=[];
  }
  else{
      cart = items
  }
  
  
  const div = document.querySelector("#div");
  
  for(let i=0; i<phones.length; i++){
      div.innerHTML += `<div class="card" style="width: 14rem;">
    <img src="${phones[i].image}">
    <div class="card-body">
      <p class="card-text">Product: ${phones[i].brand + " " + phones[i].model}</p>
      <p class="card-text">Price: ${phones[i].price} PKR</p>
      <button class="btn btn-primary" onclick="addToCart(${i})">ADD TO CART </button>
    </div>
  </div>`;
  }
  
  
  
  
  
  function addToCart(cartItemss){
  
  if(cart.includes(phones[cartItemss])){
      phones[cartItemss].quantity+=1;
  }else{
      cart.push(phones[cartItemss]);
      phones[cartItemss].quantity= 1;
  
  }
  }
  
  const checkOutBtn = document.querySelector("#checkOutBtn").addEventListener('click', function(){
      window.location="cart.html"
      localStorage.setItem("cartItemss" , JSON.stringify(cart));
  })
  
  
  
  
  
  