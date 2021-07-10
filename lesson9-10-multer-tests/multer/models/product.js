const {Schema, model} = require("mongoose");

const productSchema = Schema({
    image: {
        type: String
    }
});

const Product = model("product", productSchema);

module.exports = Product;