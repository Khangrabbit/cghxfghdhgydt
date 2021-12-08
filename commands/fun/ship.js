const discord = require('discord.js')
const Canvas = require('canvas')
module.exports = {
  name: "ship",
 usage: "ship [@User] [@user]",
  run: async(client, message,args, prefix) => {
    const target = message.mentions.users.first()
   const canvas = Canvas.createCanvas(700, 250) 
    const ctx = canvas.getContext("2d")
      
    if(message.content.startsWith(prefix)) return
    if (!target) return message.reply({ content: 'Vui lòng đề cập tới người khác'})
    if(target.id == message.author.id) return message.reply({ content: "không thể đề cập bản thân vì chúng ta chỉ là 1"})
    const bg = await Canvas.loadImage("./bg.jpg")
    ctx.drawImage(bg, 0, 0, canvas.width , canvas.height)
    
    const avatar = await Canvas.loadImage(message.author.displayAvatarURL( { format: "png"}))
  ctx.drawImage(avatar, 50, 25, 200, 200)
const TargetAvatar = await  Canvas.loadImage(target.displayAvatarURL({format: "png"}))
ctx.drawImage(TargetAvatar, 430, 25, 200, 200)
    const heart = await Canvas.loadImage("./heart.png")
    ctx.drawImage(heart, 270 , 60 , 150, 150)
   const random = Math.floor(Math.random() *99) +1
const image = new discord.MessageAttachment(canvas.toBuffer(), 'love.png')
    
    const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'love.png')
      const embed = new discord.MessageEmbed()
      .setDescription(` ${message.author.username}  :heart: ${target.username} = ${random}%`)
      .attachFiles(image)
      .setImage(`attachment://love.png`)   
    message.reply({embeds: [embed], files: [attachment] }).then(msg => msg.delete({ timeout: 15000}));
    if(random <= 10) {
      message.reply({ content: 'người lạ'})
    } else if(random <= 25) {
      message.reply({ content: 'mới quen'})
    }
  }
      }