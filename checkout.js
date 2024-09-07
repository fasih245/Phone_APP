const getData = localStorage.getItem("cartItem");
const cartItem = JSON.parse(getData)
console.log(cartItem);
let totalPrice=[];


var total = document.querySelector("#Total")
var checkoutDiv = document.querySelector("#checkoutDiv")
// cartItem[i].quantity= cartItem[i].quantity+1

let totalAmount = 0;

// Rendering Cart Items
function renderCheckoutCard() {

  checkoutDiv.innerHTML = ''; 
    let totalAmount = 0; 

    for (let i = 0; i < cartItem.length; i++) {
        
    const item = cartItem[i];
    // Calculating Total Amount 
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



// Delete Items FUnction
function Delete(i){
  cartItem.splice(i, 1); 
  localStorage.setItem("cartItem", JSON.stringify(cartItem)); 
  renderCheckoutCard()
  renderTotal()
  console.log(cartItem)
}

// Adding and removing Quantity Button Function
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