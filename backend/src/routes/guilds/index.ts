import { Router } from "express";
import { getGuildController, getGuildPermsController, getGuildsController } from "../../controllers/guilds";
import { isAuthenticatedApi } from "../../utils/middlewares";

const router = Router();

router.get("/", isAuthenticatedApi, getGuildsController);
router.get("/:id/permissions", isAuthenticatedApi, getGuildPermsController);
router.get("/:id", isAuthenticatedApi, getGuildController);

export default router;