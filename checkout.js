const getData = localStorage.getItem("cartItem");
const cartItem = JSON.parse(getData)
console.log(cartItem);
let totalPrice=[];


var total = document.querySelector("#Total")
var checkoutDiv = document.querySelector("#checkoutDiv")
// cartItem[i].quantity= cartItem[i].quantity+1

let totalAmount = 0;
function renderCheckoutCard() {
  // total.innerHTML = ''; 
  //   let totalAmount = 0; 
  // // totalAmount += cartItem.price * cartItem.quantity; 

  //   checkoutDiv.innerHTML = "";
  //   console.log(cartItem)
  //   if (cartItem === null) {
  //       console.log("no item found")
  //       checkoutDiv.innerHTML = "no item found"
  //       return
  //   }
  //   for (let i = 0; i < cartItem.length; i++) {
  //       totalAmount += cartItem[i].price * cartItem[i].quantity

  //       console.log(cartItem[i].price , cartItem[i].quantity)
  //       checkoutDiv.innerHTML += `
  //       <div class="card mt-3 text-center bg-dark  text-white border-light" style="width: 22rem; margin-left:35%;">
  //               <div class="card-body">
  //                   <h5 class="card-title">${cartItem[i].brand} ${cartItem[i].model}</h5>
  //                   <h5> Quantity: <button class="btn btn-primary" onclick="updateQuantity(${i}, 'addQuantity')">+</button> ${cartItem[i].quantity} <button class="btn btn-primary" onclick="updateQuantity(${i}, 'lessQuantity')">-</button></h5>
  //                   <h5 class="card-title h6">Rs: ${cartItem[i].price*cartItem[i].quantity}</h5>
  //               </div>
  //               <div><button class="btn btn-danger mb-2" onclick="Delete(${i})">Delete</button></div>
  //           </div>
  //       `
  //   }

  //   console.log(totalAmount);
  checkoutDiv.innerHTML = ''; 
    let totalAmount = 0; 

    for (let i = 0; i < cartItem.length; i++) {
        const item = cartItem[i];
        totalAmount += item.price * item.quantity; 

        checkoutDiv.innerHTML += `
        <div class="card mt-3  text-center bg-dark  text-white border-light" style="width: 22rem; margin-left:35%;">
            <div class="text-center">
                
                    <div class="card-body">
                        <h5 class="card-title" style="font-size: 1.5rem;">${item.brand} ${item.model}</h5>
                        <p class="d-flex align-items-center">
                            <span class="ps-5">Quantity:</span> 
                            <span class="btn btn-primary mx-2" onclick="updateQuantity(${i}, 'addQuantity')">+</span> 
                            <span>${item.quantity}</span>
                            <span class="btn btn-primary mx-2" onclick="updateQuantity(${i}, 'lessQuantity')">-</span>
                        </p>
                        <h5 class="card-title h6" style="font-size: 1.5rem;">Rs: ${item.price}</h5>
                        <button class="btn btn-danger mt-2" onclick="Delete(${i})">Delete</button>
                    </div>
                </div>
            
        </div>
        `;
    }
    total.innerHTML = `
    <h5 class="card mt-3 text-center bg-dark text-success border-light card-title h3 p-4" style="width: 22rem; margin-left:35%;">Total Amount: ${totalAmount}Rs</h5> </br></br>
    `;

}
renderCheckoutCard()
// let change =document.querySelector("#change")
// function addQuantity(i) {
//   console.log("quantity added" , i);
//   cartItem[i].quantity += 1
//   console.log(cartItem)
//   renderCheckoutCard()
//   renderTotal()
// }

// function lessQuantity(index) {
//   console.log("quantity less" , index)
//   if(cartItem[index].quantity>0){
//   cartItem[index].quantity -= 1
//   renderCheckoutCard()
//   renderTotal()
//   }
// }



// var total = document.querySelector("#Total")
// function renderTotal(i){
//     for(i=0; i<cartItem.length;i++){
//       totalPrice.push(cartItem[i].price*cartItem[i].quantity)
//       console.log(totalPrice);
//       const sum = totalPrice.reduce((accumulator,initialVal)=>{
//         return accumulator+initialVal
//       },0)
//       console.log(sum)
      // total.innerHTML=`<div class="card mt-3 text-center bg-dark text-success border-light" style="width: 22rem; margin-left:35%;">
      // <h5 class="card-title text-center ms-5 mb-3 mt-3">Total: ${sum}</h5>
      // </div>`
//       if(totalPrice.length=0){
        
//         total.innerHTML=`<div class="card mt-3 text-center bg-dark text-success border-light" style="width: 22rem; margin-left:35%;">
//       <h5 class="card-title text-center ms-5 mb-3 mt-3">NO Item Found</h5>
//       </div>`
//       ;}
//       else{
//         total.innerHTML=`<div class="card mt-3 text-center bg-dark text-success border-light" style="width: 22rem; margin-left:35%;">
//       <h5 class="card-title text-center ms-5 mb-3 mt-3">Total: ${sum}</h5>
//       </div>`
//       }
//     }
// }
// renderTotal();

function Delete(i){
  cartItem.splice(i, 1); 
  localStorage.setItem("cartItem", JSON.stringify(cartItem)); 
  renderCheckoutCard()
  renderTotal()
  console.log(cartItem)
}
function updateQuantity(i, action) {
  if (action === 'addQuantity') {
      cartItem[i].quantity += 1;
      console.log(cartItem[i].quantity)
  } else if (action === 'lessQuantity' && cartItem[i].quantity > 0) {
      cartItem[i].quantity -= 1;
      console.log(cartItem[i].quantity)
  }
  localStorage.setItem("cartItem", JSON.stringify(cartItem)); // Update localStorage
  renderCheckoutCard(); // Re-render the cart to reflect changes
}

renderCheckoutCard();