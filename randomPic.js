var fs = require('fs');
const { exit } = require('process');
var text = fs.readFileSync("./names.txt", 'ASCII');
var textByLine = text.split('\n')
var c= textByLine[1];
var d=c.slice(0, -1);
console.log(d);
/*for(i in d){
  a+=d.charCodeAt(i);
  b+=s.charCodeAt(i);
  
if(d.charAt(i)!=s.charAt(i)){
  console.log("\n inconsistency at: "+d.charAt(i)+" "+ d.charCodeAt(i)+
  "\n is not equal to: "+s.charAt(i)+" "+ s.charCodeAt(i)+"\n");

  console.log(d);

  console.log(s);

} 
else console.log(d.charAt(i));

}*/

//console.log("\ntotal number of outputs: "+a+"  total number of characters in string:"+b+" number of characters that should be in string: "+s.length+"  total number of inconsistencies: "+c);
console.log(d=='anything.audrey-20220508-0002.jpg');
module.exports = {
    
    name: 'randomPic',
    description: "sends pic of audrey",
    execute(message, args){
      c=textByLine[Math.floor(Math.random() * textByLine.length+1)];
      d=c.slice(0, -1);
        message.channel.send({
            files: [{
              attachment: './Photos-001/'+d+'/',//'./Photos-001/anything.audrey-20220508-0002.jpg',
              name: d,
              description: 'A description of the file'
            }]
          })
            .then(console.log)
            .catch(console.error);
    }
    
}