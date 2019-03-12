const mongoose = require("mongoose")
const Schema = mongoose.Schema

const metadataSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
})

module.exports = new mongoose.model("Metadata", metadataSchema)
