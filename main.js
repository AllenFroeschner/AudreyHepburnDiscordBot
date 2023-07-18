const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = '-';
const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => { 
    console.log('Bot is Online');
 
});

client.on('message', message =>{
    
    if(!message.content.startsWith(prefix)|| message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    switch(command) {
        case 'ping':
            client.commands.get('ping').execute(message, args);
          break;
        case 'sendapic':
            client.commands.get('randomPic').execute(message, args);
          break;
          case command.indexOf('sendpic') >-1:
            client.commands.get('randomPic').execute(message, args);
          break;
          case 'mommy':
            //message.channel.send('pw:');
            client.commands.get('mommy').execute(message, args);
            break;
            case 'sendmultiple':
            //message.channel.send('pw:');
            client.commands.get('multiple').execute(message, args);
            break;
          case 'pwIWantToDie':
            message.channel.send('pw:');
            //client.commands.get('mommy').execute(message, args);
          break;
          case 'h':
            client.commands.get('commandList').execute(message, args);
          break;
        default:
          // code block
      }
});



client.login('OTc4ODgzMTgxMTk5NjM4NTU4.GyGkU6.d_wt2E03_jR2TQwIuBgZ4XacwmpLwFwiBRgRsY');

