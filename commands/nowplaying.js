const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "",
    description: "",
    usage: "",
    aliases: [],
    async execute(client, message, args) {
        
    },
};

module.exports.run = async (client, message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return message.channel.send("There is nothing playing in this server.");
        let song = serverQueue.songs[0]
        let thing = new MessageEmbed()
            .setAuthor("Now Playing", song.req.displayAvatarURL({ dynamic: true }))
            .setThumbnail(song.img)
            .setColor("BLUE")
            .addField("Name", song.title, true)
            .addField("Duration", song.duration, true)
            .addField("Requested by", song.req.tag, true)
            .setFooter(`Views: ${song.views} | ${song.ago}`)
        return message.channel.send(thing)
}

module.exports.config = {
    name: "nowplaying",
    description: "To show the music which is currently playing in this server",
    aliases: ["np", "time", "song"]
}