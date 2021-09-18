module.exports = {
	name: "EG Funnels", // optional, falls back to object key
	description: "Elek en Gas funnels",
	options: {
		// frequency: 1 * 10, 
		// frequency: 60 * 168, 
		frequency: 60 * 24, 
		// 24 hours
		freshChrome: "run", // verschillende sites is RUN
	},
	urls: [
		"https://www.essent.nl/beta/horizontal-offer",
		"https://www.energiedirect.nl/beta/calculate",
		"https://www.vattenfall.nl/producten/energie/",
		"https://www.eneco.nl/duurzame-energie/",
		"https://www.coolblue.nl/energie",
		"https://www.greenchoice.nl/tarieven/",
		"https://www.budgetthuis.nl/energie/",
		"https://www.frankenergie.nl/",
	]
};