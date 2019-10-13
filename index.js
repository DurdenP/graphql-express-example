import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './data/schema';

const app = express();

const port = 8080

app.get('/', (req, res) => {
    res.send(`GraphiQL at localhost:${port}/graphql`);
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(port, () => console.log(`Running server on port localhost:${port}/graphql`));