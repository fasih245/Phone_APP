const arr = [{
    brand: 'Samsung',
    model: 'S20',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvlPelAu0p4XIy_R6G8V0Ja6KPLdpHLsVgg&s',
    ram: 8,
    rom: 256,
    camera: '20 megapixel',
    price: 15000,
    
},

{
    brand: 'Xiomi',
    model: 'note10',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSANTiiOLUuauHHv1fQKEg9jLgwbFziI-3HVg&s',
    ram: 4,
    rom: 64,
    camera: '10 megapixel',
    price: 15000,
    
},
{
    brand: 'Infinix',
    model: 'z10',
    image:'https://www.whatmobile.com.pk/control/news/assets/03082023/035b5b93bb7e3fdca8ac28409452f9ae.jpg',
    ram: 2,
    rom: 16,
    camera: '5 megapixel',
    price: 15000,
    
},
{
    brand: 'Tecno',
    model: 'spark10',
    image: 'https://www.mega.pk/items_images/Tecno+Spark+Go+4GB+RAM+64GB+Storage+PTA+Approved+Price+in+Pakistan%2C+Specifications%2C+Features_-_24649.webp',
    ram: 12,
    rom: 512,
    camera: '25 megapixel',
    price: 15000,
    
},
{
    brand: 'Iphone',
    model: '14',
    image: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-2up-starlight-220907_inline.jpg.large.jpg',
    ram: 4,
    rom: 1024,
    camera: '30 megapixel',
    price: 15000,
    
},
{
    brand: 'Oppo',
    model: 'F11',
    image: 'https://assorted.downloads.oppo.com/static/assets/images/products/f11pro/m/sec1-959ba38195a4fe8d4301b9b0a33728da06e0b063.jpg',
    ram: 8,
    rom: 256,
    camera: '20 megapixel',
    price: 15000,
    
},
{
    brand: 'Vivo',
    model: 'y20',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-j8Fw085crM2lUg-GuacvIGgWBzHAhaxag&s',
    ram: 4,
    rom: 64,
    camera: '8 megapixel',
    price: 15000,
    
},
{
    brand: 'Samsung',
    model: 'S23 Ultra',
    image: 'https://image-us.samsung.com/us/smartphones/galaxy-s23/configurator/DB2C-328-GalleryVideo-S23Ultra-AnimatedVideo_Filled_lastFrame.jpg',
    ram: 24,
    rom: 1024,
    camera: '60 megapixel',
    price: 300000,
    
}
]



var div=  document.querySelector("#phone")
function renderCard(index){
    for(i=0;i<arr.length;i++){
        // console.log(arr[i].brand)
        div.innerHTML+= `<div class="card bg-dark text-light border-light text-center"      >
        <img src="${arr[i].image}" class="card-img-top" style="width: 18rem; height: 20rem;"  alt="${arr[i].model}">
        <div class="card-body m-2">
    <h5 class="card-title">${arr[i].brand} ${arr[i].model}</h5>
    <h5 class="card-text">Rs: ${arr[i].price}
    </h5>
    <a href="#" class="btn btn-primary" onclick="addToCart(${i})">Add to Cart</a>
  </div>
        </div>`
  }
   
}
renderCard();




// function addtoCart(i){
//     if(arr[i].quantity===0){
//         quantity+=1

//     }
// }


const getDataFromLocalStorage = JSON.parse(localStorage.getItem("cartItem"))
console.log("localstorage data",getDataFromLocalStorage);

let cartItems = []
if(getDataFromLocalStorage != null){
    cartItems = getDataFromLocalStorage;
}



// console.log(arr[0])
function addToCart(i) {
    if (cartItems.includes(arr[i].quantity)) {
        arr[i].quantity += 1;
    } else {
        arr[i].quantity = 1
        cartItems.push(arr[i]);
    }
    console.log(cartItems);

}
const checkoutBtn = document.querySelector("#checkout-btn")

checkoutBtn.addEventListener("click" , function(){
    localStorage.setItem("cartItem" , JSON.stringify(cartItems))
    window.location = "checkout.html"
})