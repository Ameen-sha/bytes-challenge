import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    merchantId: mongoose.Schema.Types.ObjectId,
    title: String,
    category: String,
    description: String,
    order: Number,
    price: Number,
    image: [{ url: String, order: Number }],
    discount: Number,
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product;
