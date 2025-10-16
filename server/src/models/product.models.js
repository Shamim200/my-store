import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);
