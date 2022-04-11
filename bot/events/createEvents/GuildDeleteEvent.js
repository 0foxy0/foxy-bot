const DB = require("../../schemas/GuildConfig");
const client = require("../../index");
  
  client.on("guildDelete", async (client, guild) => {
    try {
      const found = await DB.findOne({ GuildID: guild.id });


      if (found) {
          await DB.findOneAndDelete({ GuildID: guild.id });
          console.log(`${client.user.tag} has left the Server: ${guild.name}!\nGuildConfig successfully deleted!`);
      
      } else {
        console.log(`${client.user.tag} has left the Server: ${guild.name}!\nBut no GuildConfig was found!`);
      }
    
    } catch (err) {
      console.log(err);
    }
  })