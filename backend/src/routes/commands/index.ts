import { Router } from "express";
import { getCommandsController } from "../../controllers/commands";
import { isAuthenticatedLogout } from "../../utils/middlewares";

const router = Router();

router.get("/:id", isAuthenticatedLogout, getCommandsController);

export default router;