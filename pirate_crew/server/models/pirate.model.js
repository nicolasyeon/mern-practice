const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must have a name for the pirate"],
    },
    imageUrl: {
        type: String,
        required: [true, "You must have a picture for the pirate"]
    },
    treasureChests: {
        type: String,
        required: [true, "You must have a certain amount of treasure chests"]
    },
    catchPhrase: {
        type: String,
        required: [true, "You must have a description for your pirate"]
    },
    crewPosition: {
        type: String,
        required: [true, "You must have a crew position for your pirate"],
        enum: ["Captain", "First Mate", "Quarter Master", "Bootswain", "Powder Monkey"],
    },
    pegLeg: {
        type: Boolean,
        default: true
    },
    eyePatch: {
        type: Boolean,
        default: true
    },
    hookHand: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });
module.exports = mongoose.model('Pirate', PirateSchema);
