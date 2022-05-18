import { Router } from "express";
import passport from "passport";
import { isAuthenticatedLogin } from "../../utils/middlewares";

const router = Router();

router.get("/discord", isAuthenticatedLogin, passport.authenticate("discord"));

router.get("/discord/redirect", passport.authenticate("discord"), (req, res) => {
    res.redirect("http://localhost:3000/menu");
});

export default router;