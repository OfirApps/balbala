const venom = require('venom-bot')
const venomOptions = require('./venom-options.js')

const TWENTY_MINUTES = 1200000
let client = null

dateLog('Started index.js')
	dateLog('Initializing bot')
	venom
		//	create bot with options
		.create(venomOptions)
		// 	start bot
		.then((client) => startBot(client))
		// 	catch errors
		.catch((err) => {
			dateLog(err)
		})

function startBot(client) {
	dateLog('Starting bot')

	//	restart bot every 20 minutos
	//	stops working otherwise
	setTimeout(() => {
		//	close bot
		client.close()
		dateLog('Closing bot')

		//	init bot again
		initBot()
	}, TWENTY_MINUTES)

	client.onMessage((message) => {
	datelog(message.body)
    if (message.body === 'Hi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Welcome Venom 🕷')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });
}


//
//	Aux
//

// Catch ctrl+C
process.on('SIGINT', function () {
	client.close()
})

function dateLog(text) {
	console.log(new Date(), ' - ', text)
}
