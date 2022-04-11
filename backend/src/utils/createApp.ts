import express, { Express } from "express";
import routes from "../routes";
import cors from "cors";
import MongoStore from "connect-mongo";
import session from "express-session";
import passport from "passport";
require("../strategies/discord");

export function createApp(): Express {
    const app = express();
    
    // Enable Parsing Middleware for Requests
    app.use(express.json());
    app.use(express.urlencoded());

    // Enable CORS
    app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

    // Enable Sessions
    app.use(session({
        secret: "HDAWUOFGOAWHFPAWHOUDGHAAFAWDFAWGAWDFAFHAOUDHGUA",
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 86400000 * 7 },
        store: MongoStore.create({ mongoUrl: process.env.MONGODB_CONNECT_URL })
    })
    );

    // Enable Passport
    app.use(passport.initialize());
    app.use(passport.session());

    app.use((req, res, next) => setTimeout(() => next(), 800));
    
    app.use("/api", routes);
    return app;
}