module.exports = {
	name: "Energieanbieter", // optional, falls back to object key
	description: "Energieanbieter DU",
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
		// test
	},
	urls: [
		"https://www.lekker.de/",
		"https://www.yello.de/",
		"https://www.vattenfall.de/",
		// "https://www.enpure.de/",
		// "https://www.billig-will-ich.de/",
		// "https://www.extraenergie.com/",
		// "https://www.gruenwelt.de/",
		// "https://www.greenpeace-energy.de/",
		// "https://www.elli.eco/",
		// "https://www.yippie.de/",	 
	]
};