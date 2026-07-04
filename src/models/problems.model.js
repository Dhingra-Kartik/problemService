const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title: { 
    type: String,
    required: [true, "Title cannot be empty"]
    },

    description: {
        type: String,
        required: true,
        default: "It is NOT described !"
    },

    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        default: 'Easy'
    },

    testCases: [
        {
            input : {
                type: String,
                required : true
            }, 
            output: {
                type: String,
                required: true
            }
        }
    ], 

    editorial: {
        type: String
    },

    codeStubs: [
        {
            language: {
            type: String,
            enum: ["CPP", "JAVA", "PYTHON"],
            required: true
        },
            startSnippet: {
            type: String,
        },
            userSnippet: {
            type: String,
        },
            endSnippet: {
            type: String,
        },
        }
    ]
});

const Problem = mongoose.model('Problem', problemSchema);
module.exports = Problem;