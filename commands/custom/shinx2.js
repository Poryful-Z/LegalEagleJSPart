const Discord = require("discord.js");
const { registerFont } = require('canvas');
registerFont('Roboto-Black.ttf', { family: 'Lobster' });
const Canvas = require('canvas');


exports.run = async (bot, message, args) => {

const ags = message.content.slice(1).split(',');
      let s1 = ags[0].substring(12);
      let s2 = ags[1];
      let s3 = ags[2];

      message.channel.send('Creating Image').then(async (msg, member) => {  
  //const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
  const messageforsend = message.content.substring(11)
	const canvas = Canvas.createCanvas(820, 810);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage('./media/shinx.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#000000';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	
    
    
    ctx.fillStyle = '#000000' // White text
    ctx.font = '100px sans-serif' 
    text = `${s1}`
    x = canvas.width / 2 - ctx.measureText(text).width / 2 + 100
    y = 290// - ctx.measureText(text).height / 2
    ctx.fillText(text, x, y)
    
    ctx.lineWidth = 4;  //define the width of the stroke line
    ctx.font = '100px sans-serif'

    ctx.strokeText(text, x, y)


    ctx.fillStyle = '#000000' // White text
    ctx.font = '75px sans-serif' 
    if(typeof s3 != "undefined"){
    text = `${s2},${s3}`
    } else if (typeof s2 != "undefined") {
      text = `${s2}`
    } else {
      text = ` `
    }
    x = canvas.width / 2 - ctx.measureText(text).width / 2 + 100
    y = 350// - ctx.measureText(text).height / 2

    ctx.fillText(text, x, y)
    ctx.strokeStyle = '#46b0b7' // White text
    ctx.lineWidth = 1;  //define the width of the stroke line
    //ctx.strokeText(text, x, y)



	

	const att = new Discord.MessageAttachment(canvas.toBuffer(), `${messageforsend}.png`);

  message.channel.send(att);

})

}

module.exports.help = {
    name: "2shinx",
    aliases: [],
    usage: `shinx`
}