const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'av',
    aliases:['av', 'avatar', 'ảnh đại diện'],
    category: 'fun',
    usage:".avt < @ người cần xem VD: .avt @thowm>",
    description: "Xem avatar của bạn và bạn bè trong server",
    run: async (client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const URL = member.user.avatarURL({ format: 'jpg', dynamic: true, size: 1024})
        const avatarEmbed = new MessageEmbed()
            .setImage(URL)
            .setURL(URL)
            .setDescription(' ')
        message.reply({ embeds: [avatarEmbed] })
      .then(msg => msg.delete({ timeout: 10000}));
    }
}