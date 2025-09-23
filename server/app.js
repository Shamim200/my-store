import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

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

export { app };
