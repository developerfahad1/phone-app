const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 13000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 18000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 20000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        brand: 'Samsung',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },

]


let arr;
let items = JSON.parse(localStorage.getItem('cartItems'));
if(items === null){
    arr = [];
}else{
    arr = items;
}

const div = document.querySelector('.product');

function renderitems(){
    for(let i = 0; i < phones.length; i++){
        div.innerHTML +=`
        <div class="card bg-dark text-light border-light" class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${phones[i].brand +' '+ phones[i].model}</h5>
          <p class="card-text">Rs ${phones[i].price}</p>
         <button onclick=""addtocart(${i})  class="btn btn-primary">Add to cart</button>
        </div>
      </div>
`
    }
}

renderitems()

function addtocart(index){
   if(arr.includes(phones[index])){
    phones[index].quantity += 1;
   }else{
    phones[Index].quantity = 1;
    arr.push(phones[index]);
   }
   console.log(arr);
}

function gotocart(){
    console.log('cart');
    localStorage.setItem('cartItems' , JSON.stringify(arr));
    window.location = 'cart.html';
}
