
function isProduct(maybeProduct) {
		if(typeof maybeProduct === "object" &&
		maybeProduct !== null && 
		typeof maybeProduct.id==="number" && 
		typeof maybeProduct.name==="string" && 
		typeof maybeProduct.price==="number" 
	) {
		return true
		
	}else{
		return false
	}
	
}

function isCartItem(maybeCartItem) {
  if (maybeCartItem === null) return false;
  if (typeof maybeCartItem.id !== "number") return false;
  if (typeof maybeCartItem.amount !== "number") return false;
  if (typeof maybeCartItem.item !== "object" || maybeCartItem.item === null) return false;
  return true;
}


export {isProduct,isCartItem}
