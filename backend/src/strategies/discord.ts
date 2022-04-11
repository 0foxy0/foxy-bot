import passport from "passport";
import { Profile, Strategy } from "passport-discord";
import { VerifyCallback } from "passport-oauth2";
import { userDB } from "../database/schemas";

passport.serializeUser((user: any, done) => {
    return done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
    try {
        const user = await userDB.findById(id);

        return user ? done(null, user): done(null, null);

    } catch (err) {
        console.log(err);
        
        return done(err, null);
    }
});

passport.use(new Strategy({
    clientID: process.env.DISCORD_CLIENT_ID!,
    clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    callbackURL: process.env.DISCORD_REDIRECT_URL,
    scope: ["identify", "guilds"],

},
async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {

    try {
        const existingUser = await userDB.findOneAndUpdate({ DiscordID: profile.id }, { AccessToken: accessToken, RefreshToken: refreshToken }, { new: true });

        if (existingUser) return done(null, existingUser);
        const newUser = await userDB.create({ DiscordID: profile.id, AccessToken: accessToken, RefreshToken: refreshToken });
    
        return done(null, newUser);

    } catch (err) {
        console.log(err);
        return done(err as any, undefined);
    }
})
);