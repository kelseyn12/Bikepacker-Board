const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routesSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: [{ type: String }],
    difficulty: { type: String },
    days: { type: String },
    distance: {type: String },
    contributor: {type: String },
    additionalInfo: {type: String },
});

module.exports = mongoose.model('Routes', routesSchema)