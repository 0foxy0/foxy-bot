const DB = require("../../schemas/GuildConfig");
const client = require("../../index");
  
  client.on("guildCreate", async (client, guild) => {
    try {
      await DB.create({
        GuildID: guild.id
      });
  
      console.log(`${client.user.tag} has joined the Server: ${guild.name}!\nGuildConfig successfully created!`);
    
    } catch (err) {
      console.log(err);
    }
  })