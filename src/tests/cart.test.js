import { addToCart, getCartItemCount,clearCart,getItem,getTotalCartValue,editCart,removeFromCart } from "../cart"

describe('Cart', () => {
    beforeEach(() => {
        clearCart()
    })

test("clearCart tömmer kundvagnen", () => {
 
  addToCart({ id: 1001, name: 'Bollar', price: 500 })
  addToCart({ id: 1002, name: 'Paria', price: 300 })

  expect(getCartItemCount()).toBe(2)

  clearCart()

  expect(getCartItemCount()).toBe(0)
})


describe("antal produkter",()=>{
	test("getCartItemCount returnerar korrekt antal produkter",()=>{
    addToCart({ id: 1001, name: 'Bollar', price: 500 })
    addToCart({ id: 1002, name: 'Anka', price: 300 })

	const expected=2
	const actual=getCartItemCount();
	expect(actual).toBe(expected)
})
	test("getCartItemCount returnerar korrekt antal produkter",()=>{
    addToCart({ id: 1003, name: 'kat', price: 500 })
    addToCart({ id: 1004, name: 'Hund', price: 300 })
	addToCart({ id: 1005, name: 'Häst', price: 400 })

	const expected=3
	const actual=getCartItemCount();
	expect(actual).toBe(expected)
})
})

describe("getItem(index)",()=>{
	test("getItem returnerar korrekt objekt från kundvagnen-1",()=>{
	const input={id:2020 , name:"kat", price:400}
	addToCart(input)
	const expected=2020
	const actual=getItem(0).item
	expect(actual.id).toBe(expected)
	expect(actual.name).toBe("kat")
})
test("getItem returnerar korrekt objekt från kundvagnen-2",()=>{
	addToCart({id:1000 , name:"sol", price:200})
	addToCart({id:1001 , name:"blomma", price:500})
	const expected="blomma"
	const actual=getItem(1).item
	expect(actual.name).toBe(expected)
})

})


})


describe("test av addToCart(newItem)",()=>{
	  
test('addToCart lägger till en ny produkt i kundvagnen', () => {
        const itemCountBefore = getCartItemCount()
        const input = { id: 1002, name: 'Vattenpistol', price: 40 }
        addToCart(input)
        const itemCountAfter = getCartItemCount()

        expect(itemCountAfter).toBe(itemCountBefore + 1)
    })
	test('antal av addToCart', () => {
         clearCart()
         addToCart({ id: 1002, name: 'Vattenpistol', price: 40 })
		 addToCart({ id: 1003, name: 'anka', price: 50 })
		 addToCart({ id: 1004, name: 'appa', price: 70 })
         const expected=3
        const itemCountAfter = getCartItemCount()

        expect(itemCountAfter).toBe(expected)
    })
})

describe("editCart(itemId,newValue)",()=>{
	test("editCart uppdaterar amount korrekt",()=>{
		clearCart()
		const input={ id: 1001, name: "Badanka", price: 100 }
		addToCart(input)
		 const item = getItem(0)
		 const actual = editCart(item.id, {amount: 3 })
		 expect(actual).toBe(true)
		 expect(item.amount).toBe(3)
	
	})
		test("editCart byter korrekt namn av produkt",()=>{
		clearCart()
		const input={ id: 1001, name: "Badanka", price: 100 }
		addToCart(input)
		const item=getItem(0)
		const actual=editCart(item.id,{item: { name: "Anka" }})
		expect(actual).toBe(true)
		expect(getItem(0).item.name).toBe("Anka")
	
	
	})
	test("editCart byter korrekt price av produkt",()=>{
		clearCart()
		const input={ id: 1001, name: "Badanka", price: 100 }
		addToCart(input)
		const item=getItem(0)
		const actual=editCart(item.id,{item: { price: 150 }})
		expect(actual).toBe(true)
		expect(getItem(0).item.price).toBe(150)
	
	
	})
})

describe("get total cart value",()=>{
test("getTotalCartValue returnerar korrekt summa av produkternas pris",()=>{
	clearCart()
    addToCart({ id: 1001, name: 'Boll', price: 100 }) 
    addToCart({ id: 1002, name: 'Djur', price: 50 })  
const expected=100 + 50;
const actual=getTotalCartValue()
expect(actual).toBe(expected)

})
test("getTotalCartValue med olika amount för produkter", () => {
  clearCart()

  const inputA = { id: 1000, name: "Anka", price: 150 }
  const inputB = { id: 1001, name: "Appa", price: 50 }

  addToCart(inputA)
  addToCart(inputB)

  editCart(getItem(0).id, { amount: 1 })  
  editCart(getItem(1).id, { amount: 2 }) 

  const expected = 150 + 2*50
  const actual = getTotalCartValue()

  expect(actual).toBe(expected)
})

})
describe("removeFromCart",()=>{
	test("kan tabort produkt from kart",()=>{
		clearCart(),
		addToCart({id: 1000, name: "Anka", price: 150})
		addToCart({id: 1001, name: "Appa", price: 50} )
		addToCart({id: 1002, name: "apelsin", price: 60} )
		const actual=removeFromCart(getItem(1).id)
		expect(actual).toBe(true)
	 const countAfterRemoval = getCartItemCount()
         expect(countAfterRemoval).toBe(2) 
	})
	  test("removeFromCart returnerar false om id saknas", () => {
    expect(removeFromCart(9999)).toBe(true)
  })
})