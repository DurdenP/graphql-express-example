import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/books', {
});

const bookSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    genre: {
        type: String
    },
    language: {
        type: String
    },
    authors: {
        type: Array
    }
});

const Books = mongoose.model('books', bookSchema);

export { Books };