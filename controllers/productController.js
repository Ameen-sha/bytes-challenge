import Product from '../models/Product.js';

export const searchProducts = async (req, res, next) => {
    try {
        const { query = '', page = 1 } = req.query;
        const pageSize = 10;
        const skip = (page - 1) * pageSize;

        const searchRegex = new RegExp(query, 'i');

        const products = await Product.find({
            $or: [
                { title: searchRegex },
                { category: searchRegex },
                { description: searchRegex }
            ]
        })
        .skip(skip)
        .limit(pageSize);

        const totalCount = await Product.countDocuments({
            $or: [
                { title: searchRegex },
                { category: searchRegex },
                { description: searchRegex }
            ]
        });

        res.json({
            page: parseInt(page),
            pageSize,
            totalProducts: totalCount,
            products
        });
    } catch (err) {
        next(err);
    }
};
