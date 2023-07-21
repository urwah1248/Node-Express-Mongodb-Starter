const Product = require("../models/product")

//Controlller Object containing API Functions
const productController = {
    //GET Request
    getProducts: async (req, res) => {
        try{
            const products = await Product.find({})
            res.status(201).json(products)
        } catch {
            res.status(500).json({ message: 'An error getting products.' })
        }
    },

    //POST Request
    addProduct: async (req, res) => {
        try{
            const product = req.body
            if(!product.name || !product.price){
                res.status(400).json({message: "Missing Required Name or Price."})
            }
            const newProduct = await Product.create(product)
            res.status(201).json(newProduct)
        } catch {
            res.status(500).json({ message: 'An error occurred adding new product.' })
        }
    },

    //PUT Request
    editProduct: async (req, res) => {
        try{
            const updatedProduct = await Product.findByIdAndUpdate(
                req.params.id,
                req.body,
                {new:true}
            )
            res.status(201).json(updatedProduct)
        } catch {
            res.status(500).json({ message: 'An error occurred editing this product.' })
        }
    },

    //DELETE Request
    deleteProduct: async (req, res) => {
        try {
            const deletedProduct = await Product.findByIdAndDelete(req.params.id);
            if (!deletedProduct) {
            // Product not found
            return res.status(404).json({ message: `Product ${req.params.id} not found.` });
            }
            res.status(201).json({ message: `Product ${req.params.id} is deleted successfully.` });
        } catch (error) {
            res.status(500).json({ message: 'An error occurred while deleting the product.' });
        }
    }
}

module.exports = productController