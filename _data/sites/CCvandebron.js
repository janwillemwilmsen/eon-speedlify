module.exports = {
	name: "Vandebron.nl", // optional, falls back to object key
	description: "Vandebron.nl pages",
	options: {
		frequency: 60 * 168, 
		// frequency: 1 * 100, 
		// 24 hours
		freshChrome: "site",
	},
	urls: [
		// "https://vandebron.nl/",
		"https://vandebron.nl/energie-berekenen",
		"https://vandebron.nl/energiebronnen",
		"https://vandebron.nl/energie-berekenen/energie-vergelijken/energievergelijker",
		"https://vandebron.nl/klantenservice",
	
	]
};