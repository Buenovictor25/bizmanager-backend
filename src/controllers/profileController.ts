import { Response } from "express";
import { ProfileService } from "../services/profileService";
import { AuthRequest } from "../middlewares/authMiddleware";

class ProfileController {
  async handle(req: AuthRequest, res: Response) {
    try {
      const userId = req.userId;

      if (!userId) {
        return res.status(401).json({
          error: "Unauthorized",
        });
      }

      const profileService = new ProfileService();
      const user = await profileService.execute(userId);

      return res.status(200).json(user);
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

export { ProfileController };