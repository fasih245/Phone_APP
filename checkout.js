const getData = localStorage.getItem("cartItem");
const cartItem = JSON.parse(getData)
console.log(cartItem);
let totalPrice=[];

var checkoutDiv = document.querySelector("#checkoutDiv")
// cartItem[i].quantity= cartItem[i].quantity+1
function renderCheckoutCard(i){
    
    for(i=0; i<cartItem.length; i++){
        if(cartItem[i].quantity>0){
            console.log(cartItem[i].brand)
        checkoutDiv.innerHTML+=`<div class="card mt-3 text-center bg-dark text-white border-light" style="width: 22rem; margin-left:35%;">
  
  <div class="card-body ">
    <h5 class="card-title">Model: ${cartItem[i].brand} ${cartItem[i].model}</h5>
    
    <h5 class="card-title">
    Quantity:<button class="btn btn-primary" onclick="AddItem(${i})">+</button>
    
    <h5 class="card-title" id="change"> ${cartItem[i].quantity}</h5>  <button class="btn btn-primary" onclick="RemoveItem()">-</button></h5>
        <h5 class="card-title">Price: ${cartItem[i].quantity*cartItem[i].price}</h5>
    <div class="c"><button class="btn btn-danger">Delete</button></div>
  </div>
</div>`
    }
}
}
renderCheckoutCard();
let change =document.querySelector("#change")
function AddItem(i){
  for(i=0; i<cartItem.length; i++){
// cartItem[i].quantiy=cartItem[i].quantity+1;
change.innerHTML= `<h5>${cartItem[i].quantity+1}</h5>`
  }
}


// function AddItem(i){
//     for(i=0; i<cartItem.length; i++){
    
//     cartItem[i].quantity+= cartItem[i].quantity+1;
//     console.log(cartItem[i].quantity)
//     checkoutDiv.innerHTML=``
//     checkoutDiv.innerHTML +=`<div class="card mt-3 text-center bg-dark text-white border-light" style="width: 22rem; margin-left:35%;">
  
//     <div class="card-body ">
//       <h5 class="card-title">Model: ${cartItem[i].brand} ${cartItem[i].model}</h5>
      
//       <h5 class="card-title">Quantity:<button class="btn btn-primary" onclick="AddItem()">+</button> ${cartItem[i].quantity}  <button class="btn btn-primary" onclick="RemoveItem()">-</button></h5>
//           <h5 class="card-title">Price: ${cartItem[i].quantity*cartItem[i].price}</h5>
//       <div class="c"><button class="btn btn-danger">Delete</button></div>
//     </div>
//   </div>`


// }
// }



// function RemoveItem(i){
//     for(i=0; i<cartItem.length; i++){
    
//     cartItem[i].quantity+= cartItem[i].quantity-1;
//     console.log(cartItem[i].quantity)
//     checkoutDiv.innerHTML=``
//     checkoutDiv.innerHTML +=`<div class="card mt-3 text-center bg-dark text-white border-light" style="width: 22rem; margin-left:35%;">
  
//     <div class="card-body ">
//       <h5 class="card-title">Model: ${cartItem[i].brand} ${cartItem[i].model}</h5>
      
//       <h5 class="card-title">Quantity:<button class="btn btn-primary" onclick="AddItem()">+</button> ${cartItem[i].quantity}  <button class="btn btn-primary">-</button></h5>
//           <h5 class="card-title">Price: ${cartItem[i].quantity*cartItem[i].price}</h5>
//       <div class="c"><button class="btn btn-danger">Delete</button></div>
//     </div>
//   </div>`


// }
// }

var total = document.querySelector("#Total")
function renderTotal(i){
    for(i=0; i<cartItem.length;i++){
      totalPrice.push(cartItem[i].price)
      console.log(totalPrice);
      const sum = totalPrice.reduce((accumulator,initialVal)=>{
        return accumulator+initialVal
      },0)
      console.log(sum)
      total.innerHTML=`<div class="card mt-3 text-center bg-dark text-success border-light" style="width: 22rem; margin-left:35%;">
      <h5 class="card-title text-center ms-5 mb-3 mt-3">Total: ${sum}</h5>
      </div>`
    }
}
renderTotal();