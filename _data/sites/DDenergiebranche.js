module.exports = {
	name: "Energiebranche", // optional, falls back to object key
	description: "Energiebranche NL",
	options: {
		// frequency: 1 * 100, baaah
		frequency: 60 * 168, 
		// 24 hours
		freshChrome: "run",  // verschillende sites = run, zonder refresh
	},
	urls: [
		// "https://www.gaslicht.com/",
		"https://www.eneco.nl/",
		"https://www.vattenfall.nl/",
		// "https://www.oxxio.nl/",
		// "https://www.greenchoice.nl/",
		// "https://www.pricewise.nl/",
		// "https://www.budgetthuis.nl/energie/",
		// "https://www.nle.nl/",
		// "https://www.engie.nl/",
		// "https://www.deltaenergie.nl/",
		// "https://www.coolblue.nl/energie",
		// "https://www.powerpeers.nl/",
		// "https://welkom-energie.nl/",
		// "https://www.easyswitch.nl/",
	]
};