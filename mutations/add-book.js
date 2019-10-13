import gql from 'graphql-tag';

const mutation = gql`
    mutation {
        addBook(input:
        {
            title: "The Lord of the Rings",
            description: "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore.",
            genre: "fantasy",
            language: "English"}) {
            id
            title
            description
        }
    }
`