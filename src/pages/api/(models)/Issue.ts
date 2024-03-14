

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
