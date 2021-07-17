const webSocket = new require("ws");

const wsServer = new webSocket.Server({port: 5000});

const users = [];

wsServer.on("connection", (ws)=>{
    users.push(ws);

    users.forEach(user => {
        if(user !== ws) {
            user.send(`К нам присоединился ${users.length} пользователь`);
        };
    });

    ws.on("message", (message)=>{
        users.forEach(user => {
            if(user !== ws) {
                user.send(message);
            };
        });
    })
});