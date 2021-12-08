const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const config = require("../../config.json")

module.exports = {
  name: "pat",
  usage: "pat [@User]",
  run: async (client, message, args) => {
      
     let user = message.mentions.users.first();
      if(!user) message.author;
        

        async function work() {
        let owo = (await neko.sfw.pat());

        const patembed = new Discord.MessageEmbed()
        .setTitle(user.username + " đã được xoa đầu!")
        .setDescription((user.toString() + " đã được xoa đầu bởi" + message.author.toString()))
        .setImage(owo.url)
        .setColor("RANDOM").setFooter(client.user.username, config.AVATARURL)
        .setURL(owo.url);
        message.channel.send({ embeds: [patembed]}).then(msg => msg.delete({ timeout: 10000}));

}

      work();
}
};
