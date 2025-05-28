import Joi from 'joi'

const productSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    price: Joi.number().greater(0).required()
})

const cartItemSchema = Joi.object({
    id: Joi.number().required(),
    amount: Joi.number().greater(0).required(),
    item: productSchema.required()
})

function isProduct(maybeProduct) {
    const { error } = productSchema.validate(maybeProduct)
    return !error
}

function isCartItem(maybeCartItem) {
    const { error } = cartItemSchema.validate(maybeCartItem)
    return !error
}

export { isProduct, isCartItem }
