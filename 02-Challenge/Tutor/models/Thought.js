const { Schema, model } = require('mongoose');
const moment = require("moment")

const reactionSchema = require("./Reaction")

// create schema
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
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
    reactions: [reactionSchema],
},
{
    toJSON: {
        virtuals: true
    }
})

// add virtuals
ThoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length;
})




// create model
const Thought = model("Thought",ThoughtSchema);

// export the model
module.exports = Thought;