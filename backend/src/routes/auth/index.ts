import { Router } from "express";
import passport from "passport";
import { isAuthenticated2 } from "../../utils/middlewares";

const router = Router();

router.get("/discord", isAuthenticated2, passport.authenticate("discord"));

router.get("/discord/redirect", passport.authenticate("discord"), (req, res) => {
    res.redirect("http://localhost:3000/menu");
});

export default router;