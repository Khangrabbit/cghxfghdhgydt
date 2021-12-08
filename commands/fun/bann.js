const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: 'bann',
    run: async(client, message, args) =>{
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send({ content: "Bạn nên có quyền quản trị để sử dụng lệnh này!"})
    }
    
    const user = message.mentions.members.first()
     if(!user) {
      return message.reply({ content: "Hãy đề cập đến người mà bạn muốn ban @mention <lý do>"})
        } 
    const reason = args.slice(1).join(" ")
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
     if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`Bạn bị ban trong server (**${message.guild.name}**) với lý do ${reason}`)
      await message.reply({ content: `**${message.mentions.users.first().username}** đã bị ban với lý do ${reason}`})
     }
    }
}