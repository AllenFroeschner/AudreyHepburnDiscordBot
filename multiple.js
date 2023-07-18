var fs = require('fs');
const { exit } = require('process');
var text = fs.readFileSync("./names.txt", 'ASCII');
var textByLine = text.split('\n')
var c= textByLine[1];
var d=c.slice(0, -1);
console.log(d);

console.log(d=='anything.audrey-20220508-0002.jpg');
module.exports = {
    
    name: 'multiple',
    description: "sends pics of audrey",

    execute(message, args) {
        for (i = 0; i < 10; i++) {
            c = textByLine[Math.floor(Math.random() * textByLine.length + 1)];
            d = c.slice(0, -1);
            message.channel.send({
                files: [{
                    attachment: './Photos-001/' + d + '/',
                    name: d,
                    description: 'A description of the file'
                }]
            })
                .then(console.log)
                .catch(console.error);
        }
    }
    
}