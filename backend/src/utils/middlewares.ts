import { NextFunction, Request, Response } from "express";

export const isAuthenticatedApi = (req: Request, res: Response, next: NextFunction) => {
    req.user ? next() : res.status(403).send({ msg: "Unauthorized" });

}

export const isAuthenticatedLogin = (req: Request, res: Response, next: NextFunction) => {
    req.user ? res.redirect("http://localhost:3000/menu") : next();

}

export const isAuthenticatedLogout = (req: Request, res: Response, next: NextFunction) => {
    req.user ? next() : res.redirect("http://localhost:3000");

}