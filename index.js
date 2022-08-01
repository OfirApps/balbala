
//copy from here
const qrcode = require('qrcode-terminal');
stickersMetaData = { name: "שרוך", author: "@שרוך_בוט" }
const { Client, LocalAuth, MessageMedia, Util, Buttons } = require('whatsapp-web.js');
const client = new Client({
  authStrategy: new LocalAuth(),
  headless: true,
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
  qrcode.generate(qr, { small: true });
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

  if (content === '!סטיקר') {
    console.log("bulbuliada")
    if (msg.hasMedia) {
      const media = await msg.downloadMedia();
      console.log(media.mimetype)
      if (media == null || media == "") {
        msg.reply("יש בעיה 😰, נסו שוב")
      } else if (media.mimetype != "image/jpeg") {
        msg.reply("סוג המדיה לא עובד\n*תזכורת* הבוט לא תומך בגיפים או סרטונים")
      } else {
        msg.reply(media, null, { sendMediaAsSticker: true, stickerName: "", stickerAuthor: "@שרוך_בוט" });
      }
    } else if (msg.hasQuotedMsg == true) {
      quoted = await msg.getQuotedMessage()
      if (quoted.hasMedia) {
        const media = await quoted.downloadMedia();
        console.log(media.mimetype)
        if (media == null || media == "") {
          quoted.reply("יש בעיה 😰, נסו שוב")
        } else if (media.mimetype != "image/jpeg") {
          quoted.reply("סוג המדיה לא עובד\n*תזכורת* הבוט לא תומך בגיפים או סרטונים")
        } else {
          msg.reply(media, null, { sendMediaAsSticker: true, stickerName: "", stickerAuthor: "@שרוך_בוט" });
        }
      } else {
        if (quoted.body.length > 100) {
          msg.reply("יש בהודעה הזאת יותר מ100 תווים, כדי להפוך אותה לסטיקר בבקשה תפחיתו את הגודל שלה")
        } else {
          text = quoted.body.replace(/\n/gm, "|")
          const media = await MessageMedia.fromUrl('https://chart.googleapis.com/chart?chst=d_text_outline&chld=FFF|16|h|000|b|' + text, { unsafeMime: true });

          console.log(media.mimetype)
          if (media == null || media == "") {
            msg.reply("יש בעיה 😰, נסו שוב")
          } else {
            msg.reply(media, null, { sendMediaAsSticker: true, stickerName: "", stickerAuthor: "@שרוך_בוט" });
          }
        }
      }
    } else {
      msg.reply("כדי ש *!סטיקר* יעבוד, השיבו עם פקודה זאת לתמונה על מנת ליצור סטיקר ממנה")
    }

  } else if (content == "לבלב יקקה" && ((msg.author || msg.from) == "972525077784@c.us")) {
    console.log("sudom")
    msgs = await chat.fetchMessages({ limit: 1000 })
    msgs = msgs.reverse()
    console.log(msgs.length)
    for (let i = 0; i < msgs.length; i++) {
      setTimeout(
        function() {
          msgs[i].react("❤")
          console.log("❤ a bish")
        }, 200 + (i * 200)
      )
      m9a3rwi3tgr = i
    }
    q4cj3try9e = new Date()
    q4cj3try9e = q4cj3try9e.getTime()
    console.log("The messages will all be reacted in " + new Date(q4cj3try9e + (500 + (msgs.length * 500))))
  } else if (content == "הקלטה אחרונה" || content == "הקלטה אחרונה.mp3" || content == "lastrecord" || content == "lastrecord.mp3") {
    const media = await MessageMedia.fromUrl('https://audiostorage.yhalaommadaitclass.repl.co/extra/kris.mp3');
    msg.reply(media, null, { sendAudioAsVoice: true });
  } else if (content == "!פוליגרף") {
    if (msg.hasQuotedMsg == true) {
      quoted = await msg.getQuotedMessage()
      if (Math.floor(Math.random() * 2 + 1) == 1) {
        quoted.reply("*בדיקת הפוליגרף הסתיימה*\nו--------------------------------ו\nהודעה הזו היא:\n*אמת!*")
      } else {
        quoted.reply("*בדיקת הפוליגרף הסתיימה*\nו--------------------------------ו\nהודעה הזו היא:\n*שקר!*")
      }
    } else {
      msg.reply("כדי להשתמש ב *!פוליגרף* צריך להגיב איתו להודעה");
    }
  } else if (content == "!עזרה") {
    msg.reply("עזרה 🤖"
      + "\n" + "!סטיקר - הפיכת תמונה לסטיקר/טקסט לסטיקר" +
      "\n" + "!פוליגרף - פוליגרף להודעה (תודה למייקל בוט)" +
      "\n" + "!כולם/@כולם תיוג כל מי שבקבוצה (קבוצות בלבד)" +
      "\n" + "!מילים - מילים לשיר" +
      /*העזרה תמיד יהיה הכי למטה*/
"\n" + "!חיי - בדיקת המצב של הבוט" +
      "\n" + "!עזרה - אתם פה עכשיו")
  } else if (content == "@כולם" || content == "!כולם") {
    if (chat.isGroup) {
      let text = "";
      let mentions = [];

      for (let participant of chat.participants) {
        const contact = await client.getContactById(participant.id._serialized);

        mentions.push(contact);
        text += `@${participant.id.user} `;
      }

      await chat.sendMessage(text, { mentions });
    } else {
      msg.reply("פקודת @כולם/!כולם עובדת רק בקבוצות!")
    }
  } else if (content == "!חיי") {
    msg.reply("חיי 👟")
  } else if (content == "!מילים") {
    msg.reply("פקודה זאת לא עובדת יותר 💔\nמומלצים להשתמש בליריקי - https://lyricy.ofirapps.repl.co\nאתר חינמי שמאפשר שמיעה וצפייה במילים של שירים")
  }
});
client.initialize();

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});
