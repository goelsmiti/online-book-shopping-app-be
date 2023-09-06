import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({

    "title": String,
    "price": Number,
    "qty": Object,
    "description": String,
    "about_product": {
        "author": String,
        "genere": String
    },
    "category": String,
    "review": Array,
    "rating": Array,
    "product_image": String

});