const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    }
})

productSchema.set('toJSON', {
    transform: (_, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product