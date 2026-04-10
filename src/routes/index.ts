import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { authMiddleware } from "../middlewares/authMiddleware";
import { ProfileController } from "../controllers/profileController";

const router = Router();
const profileController = new ProfileController();

router.get("/health", (req, res) => {
  return res.json({
    status: "ok",
    message: "BizManager API is healthy 🚀",
  });
});

router.get("/profile", authMiddleware, (req, res) => {
  return res.json({
    message: "You are authenticated 🚀",
  });
});

router.get("/me", authMiddleware, (req, res) => profileController.handle(req, res));

router.use(userRoutes);

export { router };