module.exports = {
	name: "energiedirect.nl", // optional, falls back to object key
	description: "energiedirect.nl pages",
	options: {
		frequency: 60 * 168, 
		// frequency: 1 * 100, 
		// 24 hours
		freshChrome: "site",
	},
	urls: [
		"https://www.energiedirect.nl/beste-bod/",
		"https://www.energiedirect.nl/energie/energie-aanbiedingen",
		// "https://www.energiedirect.nl/energie/goedkope-energie",
		// "https://www.energiedirect.nl/energie/overstappen-energie",
		// "https://www.energiedirect.nl/energie/energie-besparen",
		// "https://www.energiedirect.nl/energie/energiecontract",
		// "https://www.energiedirect.nl/isolatie",
		// "https://www.energiedirect.nl/zonnepanelen",
		// "https://www.energiedirect.nl/",
	]
};