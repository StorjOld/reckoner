import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { getItemField } from './items';

const queryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root for query operations.',
  fields: () => ({
    getItem: getItemField
  })
});


export const Schema = new GraphQLSchema({
  query: queryType
});
