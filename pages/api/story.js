var fs = require("fs")

async function Story(request, response) {
	var options = request.query

	var jsonDB = await getDB("stories.json")

	let max = 0
	if (jsonDB) {
		max = jsonDB.length
	}
	let random = Math.floor(Math.random() * max)

	response.json(jsonDB[random])
}

async function getDB(file) {
	let jsonFile
	await fetch("https://raw.githubusercontent.com/igorroc/dark-stories/master/stories.json")
		.then((response) => {
			if (!response.ok) {
				throw new Error("HTTP error " + response.status)
			}
			return response.json()
		})
		.then((json) => {
			jsonFile = json
		})
		.catch(function (e) {
			console.error("ERROOO", e)
		})

	return jsonFile
}

export default Story
