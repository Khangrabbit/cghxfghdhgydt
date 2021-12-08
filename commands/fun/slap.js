const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const config = require("../../config.json")

module.exports = {
  name: "slap",
  usage: "slap [@User]",
  run: async (client, message, args) => {
      
     let user = message.mentions.users.first();
      if(!user) message.author;
        

        async function work() {
        let owo = (await neko.sfw.slap());

        const slapembed = new Discord.MessageEmbed()
        .setTitle(user.username + " đã bị tát!")
        .setDescription((user.toString() + " đã bị tát bởi " + message.author.toString()))
        .setImage(owo.url)
        .setColor("RANDOM").setFooter(client.user.username, config.AVATARURL)
        .setURL(owo.url);
        message.channel.send({ embeds: [slapembed] }).then(msg => msg.delete({ timeout: 10000}));

}

      work();
}
};
