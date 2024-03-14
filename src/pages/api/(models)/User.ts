import mongoose from "mongoose"
const {Schema} = mongoose;
import dotenv from 'dotenv';


dotenv.config();
const DATABASE_URL =process.env.DATABASE_URL
try{
mongoose.connect( DATABASE_URL || 'default_database_url_here');

const UserSchema= new Schema({

     username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    dateOfBirth: {
        type: Date
    },
    bio: {
        type: String
    },
    profileImage: {
        data: Buffer,
        type: String
    },
    phoneNumber: {
        type: String
    }, 
    Type:{
        type:String,
        default:"EXTERNAL", //EXTERNAL,USER,ADMIN
    }
});


const UserS = mongoose.model('User', UserSchema);

module.exports = UserS;
}
catch(err){
    console.log("couldnt connect")
}