const productsRouter = require("express").Router()
const { getProducts, addProduct, deleteProduct, editProduct } = require("../controller/products")

productsRouter.get('/products', getProducts)
productsRouter.post('/products', addProduct)
productsRouter.delete('/products/:id', deleteProduct)
productsRouter.put('/products/:id', editProduct)

module.exports = productsRouter