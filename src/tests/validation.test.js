
import {isProduct, isCartObject} from "../validation"

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

describe("isCartObject",()=>{
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
		const actual=isCartObject(input)
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
		const actual=isCartObject(input)
		expect(actual).toBe(expected)
		
	})
		test("ska returnera false om item är inte object",()=>{
		const input={
			id: "Hello",
			amount: 1,
			item: "Paria"
			
		}
		const expected=false
		const actual=isCartObject(input)
		expect(actual).toBe(expected)
		
	})
})









// const exampleCartObject = {
// 	id: 2001,
// 	amount: 1,
// 	item: exampleProduct
// }



// 	// ---------------------------------------------
// 	// Följande testfall ska du implementera. Det är tillåtet att använda Joi. Gör i så fall ett schema för varje sorts objekt du vill kunna validera. Du får även ändra texten och du t.ex. vill skriva på svenska i stället för engelska.
// 	// (Ta bort dessa kommentarer när du är klar)

// 	// 1. it returns true for a valid cart object
// 	// 2. it returns false for invalid cart objects

// 	// 3. it returns true for a valid product
// 	// 4. it returns false for invalid product
// })
