import express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer, gql } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';
import models from "./models";
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const app = express();

// const graphqlEndpoint = '/graphql';

// app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema }));

// app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

models.sequelize.sync().then((x) => {
    app.listen(8081,'localhost',() =>{
        console.log('sever start');
    });
});
