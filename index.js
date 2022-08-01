const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const qrcode = require('qrcode-terminal');
stickersMetaData = {name:"שרוך",author:"@שרוך_בוט"}
const { Client,LocalAuth,MessageMedia,Util} = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth(),
  headless:true,
  puppeteer: {
    args: ['--no-sandbox',
'--disable-setuid-sandbox',
'--disable-dev-shm-usage',
'--disable-accelerated-2d-canvas',
'--no-first-run',
'--no-zygote',
'--disable-gpu'
          ] 
  }
});
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});
mehobadim = ["972585007045@c.us"]
//https://audiostorage.yhalaommadaitclass.repl.co/extra/kris.mp3 -- Krissed
client.on('message', async (msg) => {
content = msg.body
const chat = await msg.getChat();
chat.sendSeen()
console.log("A new message arrived! - " + content + " - By: " + (msg.author || msg.from))

if ((msg.author || msg.from) == "972525077784@c.us") {
  msg.react("❤")
} else if (mehobadim.includes(msg.author || msg.from)) {
  msg.react("👍")
}
  
	if(content === 'img') {
	const media = await MessageMedia.fromUrl('https://via.placeholder.com/350x150.png');
msg.reply(media,null,{sendMediaAsSticker:true,stickerName:"",stickerAuthor:"@שרוך_בוט"});
} else if (content == "לבלב יקקה" && ((msg.author || msg.from) == "972525077784@c.us")) {
    console.log("sudom")
    msgs = await chat.fetchMessages({limit:1000})
    msgs = msgs.reverse()
    console.log(msgs.length)
    for (let i = 0; i < msgs.length; i++) {
      setTimeout(
        function () {
          msgs[i].react("❤")
          console.log("❤ a bish")
        },200+(i*200)
      )
      m9a3rwi3tgr = i
    }
    q4cj3try9e = new Date()
      q4cj3try9e = q4cj3try9e.getTime()
      console.log("The messages will all be reacted in " + new Date(q4cj3try9e+(500+(msgs.length*500))))
	} else if (content == "הקלטה אחרונה" || content == "הקלטה אחרונה.mp3" || content == "lastrecord" || content == "lastrecord.mp3") {
const media = await MessageMedia.fromUrl('https://audiostorage.yhalaommadaitclass.repl.co/extra/kris.mp3');
msg.reply(media,null,{sendAudioAsVoice:true});
} else if (content == "!פוליגרף") {
if (msg.hasQuotedMsg == true) {
  quoted = await msg.getQuotedMessage()
if (Math.floor(Math.random()*2+1) == 1) {
quoted.reply("*בדיקת הפוליגרף הסתיימה*\nו--------------------------------ו\nהודעה הזו היא:\n*אמת!*")
} else {
quoted.reply("*בדיקת הפוליגרף הסתיימה*\nו--------------------------------ו\nהודעה הזו היא:\n*שקר!*")
} 
} else {
msg.reply("כדי להשתמש ב *!פוליגרף* צריך להגיב איתו להודעה");
}
}
});
client.initialize();
