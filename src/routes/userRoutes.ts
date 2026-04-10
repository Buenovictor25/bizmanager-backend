import { Router } from "express";
import { UserController } from "../controllers/userController";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/users/register", (req, res) => userController.register(req, res));
userRoutes.post("/users/login", (req, res) => userController.login(req, res));

export { userRoutes };