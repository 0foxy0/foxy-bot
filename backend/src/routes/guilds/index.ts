import { Router } from "express";
import { getGuildController, getGuildPermsController, getGuildsController } from "../../controllers/guilds";
import { isAuthenticated } from "../../utils/middlewares";

const router = Router();

router.get("/", isAuthenticated, getGuildsController);
router.get("/:id/permissions", isAuthenticated, getGuildPermsController);
router.get("/:id", isAuthenticated, getGuildController);

export default router;