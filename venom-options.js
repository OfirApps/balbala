module.exports = {
	autoClose: 0,
	browserArgs: [
		'--disable-web-security',
		'--no-sandbox',
		'--disable-web-security',
		'--aggressive-cache-discard',
		'--disable-cache',
		'--disable-application-cache',
		'--disable-offline-load-stale-cache',
		'--disk-cache-size=0',
		'--disable-background-networking',
		'--disable-default-apps',
		'--disable-extensions',
		'--disable-sync',
		'--disable-translate',
		'--hide-scrollbars',
		'--metrics-recording-only',
		'--mute-audio',
		'--no-first-run',
		'--safebrowsing-disable-auto-update',
		'--ignore-certificate-errors',
		'--ignore-ssl-errors',
		'--ignore-certificate-errors-spki-list',
	],
	(statusSession, session) => {
      console.log('Status Session: ', statusSession); //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken
      //Create session wss return "serverClose" case server for close
      console.log('Session name: ', session);
    },
	'Pusay',
}
