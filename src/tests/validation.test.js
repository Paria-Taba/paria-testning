
import {isProduct, isCartItem} from "../validation"

describe("isProdukt",()=>{
	test("ska returnera true för en giltig produkt",()=>{
		const input={
			id: 1001,
			name: 'Badanka',
			price: 500
		}
		const expected=true;
		const actual=isProduct(input)
		expect(actual).toBe(expected)
		
	})
	test("ska returnera false om är inte object",()=>{
		const input="Hello"
		const expected=false;
		const actual=isProduct(input)
		expect(actual).toBe(expected)
		
	})
	test("ska returnera false om object har inte id",()=>{
		const input={
			name: 'Badanka',
			price: 500
		}
		const expected=false;
		const actual=isProduct(input)
		expect(actual).toBe(expected)
		
	})
	test("ska returnera false om pris är string istället number",()=>{
		const input={
			id: 1001,
			name: 'Badanka',
			price: "Hello"
		}
		const expected=false;
		const actual=isProduct(input)
		expect(actual).toBe(expected)
		
	})
	test("ska returnera false om obj är tomt",()=>{
		const input=[]
		const expected=false;
		const actual=isProduct(input)
		expect(actual).toBe(expected)
		
	})
	test("ska returnera false om input är null",()=>{
		const input= null
		const expected=false;
		const actual=isProduct(input)
		expect(actual).toBe(expected)
		
	})
	
})

describe("isCartItem",()=>{
	test("ska returnera true för en giltig cart object",()=>{
		const input={
			id: 2001,
			amount: 1,
			item: {
				id: 1001,
				name: 'Badanka',
				price: 500
				
			}
			
		}
		const expected=true
		const actual=isCartItem(input)
		expect(actual).toBe(expected)
		
	})
	test("ska returnera false om id är inte number",()=>{
		const input={
			id: "Hello",
			amount: 1,
			item: {
				id: 1001,
				name: 'Badanka',
				price: 500
				
			}
			
		}
		const expected=false
		const actual=isCartItem(input)
		expect(actual).toBe(expected)
		
	})
		test("ska returnera false om item är inte object",()=>{
		const input={
			id: "Hello",
			amount: 1,
			item: "Paria"
			
		}
		const expected=false
		const actual=isCartItem(input)
		expect(actual).toBe(expected)
		
	})
	test("returnera false om item är null",()=>{
const input={
			id: "Hello",
			amount: 1,
			item: null
			
		}
		const expected=false
		const actual=isCartItem(input)
		expect(actual).toBe(expected)
	})

	test("ska returnera false om input är null",()=>{
		const input=null
		const expected=false
		const actual=isCartItem(input)
		expect(actual).toBe(expected)
		
	})
	test("returnera false om amount är inte number",()=>{
		const input={
			id: 2001,
			amount: "paria",
			item: {
				id: 1001,
				name: 'Badanka',
				price: 500
				
			}
			
		}
		const actual=isCartItem(input)
		expect(actual).toBe(false)
	})
	
})

