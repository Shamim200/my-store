import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./src/routes/user.route.js";
import productRouter from "./src/routes/product.route.js";
import cartRouter from "./src/routes/cart.route.js";

const app = express();

// use built-in middleware
app.use(
  express.json({
    limit: "100kb",
  })
);
app.use(express.urlencoded({ extended: true, limit: "100kb" }));
app.use(cookieParser());
app.use(cors());

// define route
app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/cart", cartRouter);

export { app };
