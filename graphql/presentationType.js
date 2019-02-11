const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const PresentationType = new GraphQLObjectType({
  name: 'Presentation',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString }, 
    release_date: { type: GraphQLString },
    author: { type: GraphQLString },
    description: { type: GraphQLString }
  })
});

module.exports = PresentationType;