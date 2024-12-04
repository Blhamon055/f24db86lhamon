const mongoose = require("mongoose")
const frappacinoSchema = mongoose.Schema({
	size: String,
	brand: String,
	orderNum: {
		type: Number,
		min: 0o0,
		max: 999,
	}
})

module.exports = mongoose.model("Frappacino", frappacinoSchema)
