const Discord = require("discord.js");
const { registerFont } = require('canvas');
registerFont('Populationzerobb-ZDXK.otf', { family: 'Lobster' });
const Canvas = require('canvas');


exports.run = async (bot, message, args) => {

const ags = message.content.slice(1).split(',');
      let s1 = ags[0].substring(12);
      let s2 = ags[1];
      let s3 = ags[2];

      message.channel.send('Creating Image').then(async (msg, member) => {  
  //const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
  const messageforsend = message.content.substring(11)
	const canvas = Canvas.createCanvas(1920, 1200);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage('./media/piplup.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#000000';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	
    
    
    ctx.fillStyle = '#FFFFFF' // White text
    
    ctx.font = '260px sans-serif'
    text = `${s1}`
    console.log(ctx.measureText(text).width);
    ctx.font = '260px sans-serif'
    if (ctx.measureText(text).width <= 700) {
    ctx.font = '260px sans-serif' 
    } else if (ctx.measureText(text).width <= 1200) {
    ctx.font = '175px sans-serif' 
    } else if (ctx.measureText(text).width <= 1800) {
      ctx.font = '125px sans-serif'
    } else {
      ctx.font = '75px sans-serif'
    }
    x = canvas.width / 2 - ctx.measureText(text).width / 2 - 500
    y = 550// - ctx.measureText(text).height / 2
    ctx.fillText(text, x, y)
    
    
    ctx.lineWidth = 4;  //define the width of the stroke line
    ctx.font = '260px sans-serif'
    if (ctx.measureText(text).width <= 700) {
    ctx.font = '260px sans-serif' 
    } else if (ctx.measureText(text).width <= 1200) {
    ctx.font = '175px sans-serif' 
    } else if (ctx.measureText(text).width <= 1800) {
      ctx.font = '125px sans-serif'
    } else {
      ctx.font = '75px sans-serif'
    }

    ctx.strokeText(text, x, y)


    ctx.fillStyle = '#000000' // White text
    if(typeof s3 != "undefined"){
    text = `${s2},${s3}`
    ctx.font = '100px sans-serif' 
    if (ctx.measureText(text).width <= 1300) {
    ctx.font = '100px sans-serif' 
    } else if (ctx.measureText(text).width <= 1900) {
    ctx.font = '75px sans-serif' 
    } else if (ctx.measureText(text).width <= 3000) {
      ctx.font = '50px sans-serif'
    } else {
      ctx.font = '35px sans-serif'
    }
    } else if (typeof s2 != "undefined") {
      text = `${s2}`
      if (ctx.measureText(text).width <= 1300) {
    ctx.font = '100px sans-serif' 
    } else if (ctx.measureText(text).width <= 1900) {
    ctx.font = '75px sans-serif' 
    } else if (ctx.measureText(text).width <= 3000) {
      ctx.font = '50px sans-serif'
    } else {
      ctx.font = '35px sans-serif'
    }
    } else {
      text = ` `
    }
    x = canvas.width / 2 - ctx.measureText(text).width / 2 - 500
    y = 750// - ctx.measureText(text).height / 2

    ctx.fillText(text, x, y)
    ctx.strokeStyle = '#46b0b7' // White text
    ctx.lineWidth = 1;  //define the width of the stroke line
    //ctx.strokeText(text, x, y)



	

	const att = new Discord.MessageAttachment(canvas.toBuffer(), `${messageforsend}.png`);

  message.channel.send(att);

})

}

module.exports.help = {
    name: "piplup",
    aliases: [],
    usage: `jolsone`
}