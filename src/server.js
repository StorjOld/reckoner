import graphqlHTTP from 'express-graphql';
import express from 'express';
import 'babel-polyfill';
import path from 'path';
import mongoose from 'mongoose';
import { Schema } from './schema';

const config = require('./config/main.json');
const port = (!global.process.env.PORT) ? 1234 : global.process.env.PORT;
const server = global.server = express();

if (process.env.NODE_ENV === "production") {
  mongoose.connect(process.env.DATABASE_URL);
} else {
  mongoose.connect(config.mongoDB);
}

server.set('port', port);
server.use(express.static(path.join(__dirname, 'public')));

server.use('/graphql', graphqlHTTP(request => ({
  schema: Schema,
  rootValue: { session: request.session },
  graphiql: true
})));

server.listen(server.get('port'), () => {
  console.log('The server is running at http://localhost: %s', server.get('port'));
});
