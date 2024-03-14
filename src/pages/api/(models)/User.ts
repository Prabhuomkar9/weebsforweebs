import mongoose from "mongoose"

const {Schema} = mongoose;

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


const User = mongoose.model('User', UserSchema);

module.exports = User;