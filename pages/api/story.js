var fs = require("fs")

function Story(request, response) {
	var options = request.query

	// var jsonDB = getDB("stories.json")

	// let max = jsonDB.length
	// let random = Math.floor(Math.random() * (max + 1))

	response.json(options)
}

function readJsonFileSync(filepath, encoding) {
	if (typeof encoding == "undefined") {
		encoding = "utf8"
	}
	var file = fs.readFileSync(filepath, encoding)
	return JSON.parse(file)
}

function getDB(file) {
	var firstPath = __dirname.split("\\dark-stories")[0]
	var filepath = firstPath + "\\dark-stories\\" + file
	return readJsonFileSync(filepath)
}

export default Story
