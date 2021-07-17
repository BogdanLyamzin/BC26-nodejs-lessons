const webSocket = new require("ws");

const wsServer = new webSocket.Server({port: 5000});

wsServer.on("connection", (ws)=>{
    console.log("Еще одно подключение с фронтенда");
    ws.send("Добро пожаловать в наш уютный ад!");
});