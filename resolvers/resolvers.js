import { Books } from './../database/mongo-connectors';

export const resolvers = {
    Query: {
        getBook: (root, { id }) => {
            return new Promise((resolve, reject) => {
                Books.findById(id, (err, book) => {
                    if (err) reject(err)
                    else resolve(book)
                });
            });
        },
        getBooks: (root, { id }) => {
            return new Promise((resolve, reject) => {
                Books.find({}, (err, books) => {
                    if (err) reject(err)
                    else resolve(books)
                });
            });
        }
    },
    Mutation: {
        addBook: (root, { input }) => {
            const newBook = new Books({
                title: input.title,
                description: input.description,
                genre: input.genre,
                language: input.language,
                authors: input.authors
            });

            newBook.id = newBook._id;

            return new Promise((resolve, reject) => {
                newBook.save((err) => {
                    if (err) reject(err)
                    else resolve(newBook)
                })
            }) 
        },
    },
};
