const { Discord } = require('discord.js');

let vlchan = ('811013077066579969')

module.exports.run = (client, message, args) => {
if (message.member.hasPermission('MANAGE_GUILD')) {

if(message.author.bot) return;
   let channel = message.channel;
        var arr = new Array();
        let num = 0;
        channel.messages.fetch({ limit: 25 }).then(messages => {
            arr = messages.array();
            
            console.log(arr.length);
            for (let i = 0; i < arr.length; i++) { // you loop through them
                let curr = arr[i];
                console.log(curr.content);
                if (curr.content === 'Eagle Start'){
                    num = i-1;
                    break;
                }
            }
message.channel.send("Found message").then(async msg => {

while(num >= 1 ){
  if(arr[num].attachments.size > 0){
    await client.channels.cache.get(vlchan).send(arr[num].cleanContent, arr[num].attachments.array());
    console.log(num);
  }else{
    await client.channels.cache.get(vlchan).send(arr[num].cleanContent);
                                
          }
        num--;
      }
    })
  });
}
}

module.exports.help = {
    name: "marooning",
    aliases: [],
    usage: `For Treemail`
}
