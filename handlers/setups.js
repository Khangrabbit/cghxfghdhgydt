const config = require("../config.json")

module.exports = (client) => {
    let stateswitch = false;
     client.on("ready", () => {
        console.log(`${client.user.username} đã sẵn sàng hoạt động!`)
         setInterval(() => {
            stateswitch = !stateswitch; //thay đổi trạng thái
            if (stateswitch) client.user.setActivity(`${config.prefix}help để xem chi tiết các lệnh✔`, { type: "PLAYING" });
            else client.user.setActivity(`${client.guilds.cache.reduce((c, g) => c + g.memberCount, 0)} Thành viên🤡`, { type: "PLAYING" });
           }, 8000); 
    });
}