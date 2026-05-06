import express from "express";
import cors from "cors";

import { router } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    status: "ok",
    message: "BizManager API is running 🚀",
    health: "https://bizmanager-api.onrender.com/health",
    documentation: "Backend API for BizManager SaaS",
  });
});

app.get("/health", (req, res) => {
  return res.status(200).json({
    status: "ok",
    message: "BizManager API is healthy 🚀",
  });
});

app.use(router);

export { app };