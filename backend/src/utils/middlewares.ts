import { NextFunction, Request, Response } from "express";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {

    req.user ? next() : res.status(403).send({ msg: "Unauthorized" });
}

export const isAuthenticated2 = (req: Request, res: Response, next: NextFunction) => {

    req.user ? res.redirect("http://localhost:3000/menu") : next();
}