//Declaring Router using Express Router Method
const productsRouter = require("express").Router()
//Importing Routes Functions
const { getProducts, addProduct, deleteProduct, editProduct } = require("../controller/products")

//Routes for the Product Router
productsRouter.get('/products', getProducts)
productsRouter.post('/products', addProduct)
productsRouter.delete('/products/:id', deleteProduct)
productsRouter.put('/products/:id', editProduct)

module.exports = productsRouter