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

function isCartObject(maybeCartItem){
	if(typeof maybeCartItem.id==="number"&&
		typeof maybeCartItem.amount==="number"&&
		typeof maybeCartItem.item==="object"
	)
	return true
	else{
		return false
	}

}

export {isProduct,isCartObject}
