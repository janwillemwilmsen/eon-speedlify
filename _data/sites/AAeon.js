module.exports = {
	name: "eon", // optional, falls back to object key
	description: "E.ON websites",
	options: {
		frequency: 60 * 168, 
		// frequency: 60 * 23, 
		// frequency: 1 * 100, 
		// 24 hours
		freshChrome: "run",
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
	},
	urls: [
		"https://eon.de/",
		// "https://essent.nl/",
		// "https://www.energiedirect.nl/",
		// "https://www.vandebron.nl/",
		// "https://www.lidl-strom.de/",
		// "https://www.eonnext.com/",
		// "https://www.eprimo.de/",
		// "https://e-mobility.ewe.de/",
		// "https://www.e-wie-einfach.de/",
		// "https://www.enviam.de/",
		// "https://www.lew.de/",
		// "https://www.rhenag.de/",
		// "https://www.ele.de/",
		// "https://www.suewag.de/",
		// "https://www.energis.de/",
		// "https://www.eon.com/en.html",
		// "https://www.eon.se/",
		// "https://www.eon.dk/",
		// "https://www.eon-italia.com/",
		// "https://www.eon.hu/",
		// "https://elmuemasz.hu/",
		// "https://www.eon.cz/",
		// "https://www.eon.ro/",
		// "https://www.innogy.pl/",
		// "https://www.innogy.sk/",
		// "https://www.powerhouse.nl",
		// // "https://www.essent.be/",
		// // "https://www.npower.com/",
	]
};