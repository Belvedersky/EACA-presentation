const { GraphQLObjectType } =  require('graphql');

const Gadget = require('../../models/presentation');
const queryAllPresentation = require('./all')
const queryPresentationById = require('./byId');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    queryPresentationById,
    queryAllPresentation,
  }
})

module.exports = RootQuery;