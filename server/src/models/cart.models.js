import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({}, { timestamps: true });

export const Cart = mongoose.model("Cart", cartSchema);
