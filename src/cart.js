

import { isProduct } from "./validation.js"


//function getTotalCartValue()
//function addToCart(newItem)
//function removeFromCart(itemId)
//function editCart(itemId, newValues)
//function clearCart()

let cart = []
let idCounter = 2002



function getCartItemCount() {
	return cart.length
}

function clearCart() {
  cart = []
  idCounter = 2002
}

function getItem(index){
return cart[index]
}

function addToCart(newItem) {
	if( !isProduct(newItem) ) {
		return false
	}

	const cartItem = { id: idCounter, amount: 1, item: newItem }
	idCounter++
	cart.push(cartItem)
}



export { getCartItemCount, addToCart,clearCart,getItem }
