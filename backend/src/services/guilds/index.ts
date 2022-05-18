import axios from "axios";
import { userDB } from "../../database/schemas";
import { PartialGuild } from "../../utils/types";

export function getBotGuildsService() {

    return axios.get<PartialGuild[]>(`${process.env.DISCORD_API_URL}/users/@me/guilds?with_counts=true`, {
        headers: { Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}` },
    });
}

export async function getUserGuildsService(id: string) {

    const user = await userDB.findById(id);
    if (!user) throw new Error("No User found!");

    return axios.get<PartialGuild[]>(`${process.env.DISCORD_API_URL}/users/@me/guilds?with_counts=true`, {
        headers: { Authorization: `Bearer ${user.AccessToken}` },
    });
}

export async function getMutualGuildsService(id: string) {

    const { data: botGuilds } = await getBotGuildsService();
    const { data: userGuilds } = await getUserGuildsService(id);

    const adminUserGuilds = userGuilds.filter(({ permissions }) => (parseInt(permissions) & 0x8) === 0x8);
    return adminUserGuilds.filter((guild) => botGuilds.some((botGuild) => botGuild.id === guild.id));
}

export function getGuildService(id: string) {

    return axios.get<PartialGuild>(`${process.env.DISCORD_API_URL}/guilds/${id}?with_counts=true`, {
        headers: { Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}` },
    });
}