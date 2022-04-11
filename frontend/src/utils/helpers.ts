import { GetServerSidePropsContext } from "next";
import { Guild } from "./types";

export const validateCookies = (context: GetServerSidePropsContext) => {

    const sessionID = context.req.cookies["connect.sid"];

    return sessionID 
      ? {
            Cookie: `connect.sid=${sessionID}`,
        }
      : false;
};

export const getIcon = (guild?: Guild) => {
  if (!guild || !guild.icon) return "https://bilderupload.org/image/764f15887-gradient-red.png";
  return `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`;
}