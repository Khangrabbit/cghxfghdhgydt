const {MessageEmbed } = require('discord.js');
const config = require('../../config.json');

module.exports = {
    name: 'help',
    description: 'help',
    run: async ( client , message , arg ) => {
        const embed = new MessageEmbed()
        .setTitle('**📝Danh sách lệnh bot discord📝**')
        .setDescription(`**prefix của bot là ( ${config.prefix} )**`)
        .setThumbnail(`https://www.google.com/imgres?imgurl=https%3A%2F%2Ficon-library.com%2Fimages%2Fgif-icon%2Fgif-icon-2.jpg&imgrefurl=https%3A%2F%2Ficon-library.com%2Ficon%2Fgif-icon-2.html&tbnid=EzCNyg_b-HhoWM&vet=1&docid=4bjyC1S47e-r5M&w=800&h=600&source=sh%2Fx%2Fim`)
        //.addField('**🎤Lệnh Text to speak**' , ` Dùng lệnh [ ${config.prefix}help<tts ] để biết thêm `)
    .addField('Các lệnh phổ biến ' , ` ${config.prefix}av {tag}: xem avatar của người khác sau 15s sẽ tự động xóa
${config.prefix}kiss , hug , slap , ... {tag} : thực hiện một hành động lên người bạn đề cập
${config.prefix}ship {tag} : xem mức độ tình cảm trong mối quan hệ giữa 2 người được đề cập`)
        .setFooter('📢Bot thuộc quyền sở hữu bởi Khangrabbit^^✔️')
        .setColor('RANDOM')
        return message.reply({embeds: [embed] }).then(msg => msg.delete({ timeout: 10000}));
    }
}
