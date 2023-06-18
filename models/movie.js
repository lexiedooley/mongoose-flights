const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    airline: String, 
    airport: String, 
    flightNo: Number,
    departs: Date
}, {
    timeastamps: true
});

module.exports = mongoose.model('Movie', movieSchema);