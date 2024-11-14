const mongoose = require("mongoose")
const frappacinoSchema = mongoose.Schema({
	size: String,
	brand: String,
	orderNum: Number
})

module.exports = mongoose.model("Frappacino", frappacinoSchema)
