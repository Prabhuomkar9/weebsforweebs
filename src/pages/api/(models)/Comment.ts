
import mongoose from "mongoose"
const {Schema} = mongoose;
import dotenv from 'dotenv';

dotenv.config();
const DATABASE_URL =process.env.DATABASE_URL

mongoose.connect( DATABASE_URL || 'default_database_url_here');
const commentSchema = new Schema({
    comment: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    likes:{
        type:Number,
        default:0
    },
    likedBy: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User', // Assuming your user model is named 'User'
        },
    ],
    commentedBy:{
        type:String,
        default:"annonymous"
    },
    commentedAt:{
        type:Date,
        default:Date.now()
    }
    
    });

 
  module.exports =  mongoose.model("Comment", commentSchema);

