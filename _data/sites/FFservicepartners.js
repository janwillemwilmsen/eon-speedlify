module.exports = {
	name: "Servicepartners", // optional, falls back to object key
	description: "Servicepartners websites",
	options: {
		// frequency: 1 * 100, 
		frequency: 60 * 168, 
		// 24 hours
		freshChrome: "run", // verschillende sites is RUN
	},
	urls: [
		"https://www.klimaatroute.nl/",
		"https://www.kemkens.nl/",
		"https://www.ewacht.nl/",
		"https://www.geas.nl/",
		"https://www.voltalimburg.nl/",
		"https://www.energiewonen.nl/",
		"https://www.zon7.nl/",
		"https://isoprofs.nl/",
		"https://www.nederlandisoleert.nl/",
		"https://www.cvtotaal.nl/",
		"https://www.voltasolar.nl/",
		"https://www.energiewacht.nl/"
	]
};