const mongoose = require("mongoose")

//Product Model's Schema for MongoDB
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

//Pre Transforming Output for API
productSchema.set('toJSON', {
    transform: (_, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

//Decalaring Complete MongoDB Model
const Product = mongoose.model('Product', productSchema)

module.exports = Product