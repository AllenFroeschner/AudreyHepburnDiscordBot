module.exports = {
    
    name: 'commandList',
    description: "this is a list of commands",
    execute(message, args){
        message.channel.send('-h or -help: command info \n -sendapic: sends a picture of audrey\n -sendmultiple: sends 10 pictures of audrey');
    }
}