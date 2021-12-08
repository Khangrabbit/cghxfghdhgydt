 

module.exports = {
  name: "ping",
  aliases:["api"],
  usage:".ping",
  description :" hiển thị AIP của bot, độ trễ phản hồi",
  run: async (client, message, args) => {
      message.reply({ content: `\`${client.ws.ping} ms\``})
  }
};

