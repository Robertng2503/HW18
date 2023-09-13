const { Schema, model } = require('mongoose');
const moment = require("moment")

// create schema
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
     },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function(date) {
            return moment(date).format("MM/DD/YYYY")
        }
    },
    username: {
        type: String,
        required: true,
    },
},
{
    toJSON: {
        getters: true
    }
})

module.exports = reactionSchema;