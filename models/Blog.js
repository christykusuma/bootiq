const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
    description: String,
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

module.exports = mongoose.model('blog', blogSchema);