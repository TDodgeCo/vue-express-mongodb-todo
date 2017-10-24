'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var TaskSchema = new Schema({
    title: {
        type: String,
        required: 'Please enter the name of the task'
    },
    description: {
        type: String,
        required: 'Please enter a description of the task'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
})

module.exports = mongoose.model('Tasks', TaskSchema)