
import mongoose from "mongoose"
const {Schema} = mongoose;
import dotenv from 'dotenv';

dotenv.config();
const DATABASE_URL =process.env.DATABASE_URL

mongoose.connect( DATABASE_URL || 'default_database_url_here');

const IssueSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Open', 'In Progress', 'Resolved'],
        default: 'Open',
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    image:{
        type:String,
        required:false
    },
    likes:{
        type:Number,
        default:0
    },
    upvotedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    Comments:[
        {
            type: Schema.Types.ObjectId,
            ref:"Comment"
        },
    ],
    images:[{
        url:String,
        filename:String,

    }]

});

const Issue = mongoose.model('Issue', IssueSchema);

module.exports = Issue;
