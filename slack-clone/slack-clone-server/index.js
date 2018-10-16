import express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer, gql } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import models from "./models";
import cors from 'cors'

import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));

const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

// export default mergeResolvers(resolvers);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const app = express();

// const graphqlEndpoint = '/graphql';

// app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema }));F

// app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));

app.use(cors('*'));
const server = new ApolloServer({
    schema, context: {
        models,
        user: {
            id: 1
        }
    }
});
server.applyMiddleware({ app });

models.sequelize.sync({ force: false }).then((x) => {
    app.listen(8081, 'localhost', () => {
        console.log(`🚀 Server ready at http://localhost:8081${server.graphqlPath}`);
    });
});
