import mongoose from "mongoose"
const {Schema} = mongoose;
import dotenv from 'dotenv';

dotenv.config();
const DATABASE_URL =process.env.DATABASE_URL

mongoose.connect( DATABASE_URL || 'default_database_url_here');
// mongoose.connect(process.env.MONGODB_URL);

const SalesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String, // 'rental' or 'sale'
        enum: ['rental', 'sale'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    squareFeet: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    agent: {
        name: {
            type: String,
            required: true
        },
        contact: {
            type: String
        }
    },
    images: [{
        url: String,
        filename: String,

    }]
});

const Room = mongoose.model('Room', SalesSchema);

module.exports = Room;
