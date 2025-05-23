import { addToCart, getCartItemCount,clearCart,getItem } from "../cart"

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

  
test('addToCart lägger till en ny produkt i kundvagnen', () => {
        const itemCountBefore = getCartItemCount()
        const input = { id: 1002, name: 'Vattenpistol', price: 40 }
        addToCart(input)
        const itemCountAfter = getCartItemCount()

        expect(itemCountAfter).toBe(itemCountBefore + 1)
    })

})


