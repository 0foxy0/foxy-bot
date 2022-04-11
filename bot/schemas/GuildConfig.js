const { Schema, model } = require("mongoose");

module.exports = model("guildconfigs", new Schema({

    GuildID: {
        type: String,
        required: true
    },
    DefaultRole: {
        type: String,
        required: false
    },
    WelcomeChannelID: {
        type: String,
        required: false
    },
    LeaveChannelID: {
        type: String,
        required: false
    }
    
}));