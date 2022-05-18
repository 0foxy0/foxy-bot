import { Router } from "express";
import authRouter from "./auth";
import guildsRouter from "./guilds";
import logoutRouter from "./logout";
import commandRouter from "./commands";

const router = Router();

router.use("/auth", authRouter);
router.use("/logout", logoutRouter);
router.use("/guilds", guildsRouter);
router.use("/commands", commandRouter);

export default router;