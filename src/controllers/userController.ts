import { Request, Response } from "express";
import { UserService } from "../services/userService";

class UserController {
  async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const userService = new UserService();

      const result = await userService.register({
        name,
        email,
        password,
      });

      return res.status(201).json(result);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          error: error.message,
        });
      }

      return res.status(500).json({
        error: "Internal server error",
      });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const userService = new UserService();

      const result = await userService.login(email, password);

      return res.status(200).json(result);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          error: error.message,
        });
      }

      return res.status(500).json({
        error: "Internal server error",
      });
    }
  }
}

export { UserController };