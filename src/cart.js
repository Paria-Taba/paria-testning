
import { isProduct } from "./validation.js"


//function getTotalCartValue()
//function removeFromCart(itemId)
//function editCart(itemId, newValues)


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
function editCart(itemId, newValues){
const item = cart.find(cartItem => cartItem.id === itemId)
if (!item) return false

if (newValues.amount !== undefined) {
  item.amount = newValues.amount
}
  if (newValues.item !== undefined) {
    item.item = { ...item.item, ...newValues.item }
  }

return true
}

function getTotalCartValue(){
 return cart.reduce((sum, cartItem) => {
    return sum + cartItem.amount * cartItem.item.price
  }, 0)
}
function removeFromCart(itemId){
	  const index = cart.findIndex(cartItem => cartItem.id === itemId)
  if (index === -1) return false
  cart.splice(index, 1)
  return true
}


export { getCartItemCount, addToCart,clearCart,getItem, getTotalCartValue,editCart,removeFromCart}
