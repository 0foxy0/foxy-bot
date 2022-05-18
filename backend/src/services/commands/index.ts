import axios from "axios";
import { PartialCommand } from "../../utils/types";
import { getGuildService } from "../guilds";

export async function getBotCommandsService(id: string) {
    const { data: guild } = await getGuildService(id);

    return axios.get<PartialCommand[]>(`${process.env.DISCORD_API_URL}/applications/${process.env.DISCORD_CLIENT_ID}/guilds/${guild.id}/commands`, {
        headers: { Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}` },
    });
}