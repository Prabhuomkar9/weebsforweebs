
const mongoose = require('mongoose');
const { Schema } = mongoose;
import dotenv from 'dotenv';


dotenv.config();
const DATABASE_URL =process.env.DATABASE_URL

mongoose.connect( DATABASE_URL || 'default_database_url_here');


const EventSchema = new Schema({
    image:{
        url:String,
        filename:String,
    },
    Name:{
        type:String,
        
    },
    date:{
       type: Date,
       default:Date.now,

    },
    description:{
        type:String,
    },
    location:{
        type:String,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
});

module.exports = new mongoose.model("Event",EventSchema);
