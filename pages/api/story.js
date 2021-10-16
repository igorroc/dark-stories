var fs = require("fs")

function Story(request, response) {
	var options = request.query

	var jsonDB = getDB("stories.json")

	let max = 0
	if (jsonDB) {
		max = jsonDB.length
	}
	let random = Math.floor(Math.random() * max)

	response.json(jsonDB[random])
}

function getDB(file) {
	return [
		{
			path: __dirname,
		},
	]
	// var firstPath = __dirname.split("\\dark-stories")[0]
	// var filepath = firstPath + "\\dark-stories\\" + file
	// return readJsonFileSync(filepath)
}

function readJsonFileSync(filepath, encoding) {
	if (typeof encoding == "undefined") {
		encoding = "utf8"
	}
	var file = fs.readFileSync(filepath, encoding)
	return JSON.parse(file)
}

export default Story
