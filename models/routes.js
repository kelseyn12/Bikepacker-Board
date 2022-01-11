const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routesSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: [{ type: String, required: true }],
    difficulty: { type: String, required: true },
    days: { type: String, required: true },
    distance: {type: String, required: true },
    contributor: {type: String, required: true },
    additionalInfo: {type: String, required: true },
});

module.exports = mongoose.model('Routes', routesSchema)