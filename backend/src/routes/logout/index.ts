import { Router } from "express";
import { isAuthenticatedLogout } from "../../utils/middlewares";

const router = Router();

router.get("/", isAuthenticatedLogout, (req, res) => {
    req.session.destroy((err) => {
        if (err) throw new Error("Can not destroy Session!");
        res.redirect("http://localhost:3000");
    });
});

export default router;