const tmi = require('tmi.js'),
    { channel, username, password } = require('./settings.json');

    const options = {
        options: { debug: true},
        connection: {
            reconnect: true,
            secure: true
        },
        identity : {
            username,
            password
        },
        channels: [channel]
    };

    const client = new tmi.Client(options);
    client.connect().catch(console.error);
    
    client.on('connected', () => {
        client.say(channel, 'tennessedanielsbot has connected! ');
    });

    client.on('message', (channel, user, message, self) => {
        if(self) return;

        if(message == '!hello') {
            client.say(channel, `@${user.username}, hello!`);
        }
        if(message ==  '!poggers') {
            client.say(channel, `nmpPOGGERS nmpPOGGERS nmpPOGGERS 
            nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS 
            nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS 
            nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS 
            nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS 
            nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS `);
        }
        if(message == '!byebot') {
            client.part(channel, 'Bye Chat');
        }
    });