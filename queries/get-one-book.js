import gql from 'graphql-tag';

const mutation = gql`
    {
        getBook(id: "5da33c8235b824faaa219076") {
            title
            description
            genre
            language
        }
    }

`