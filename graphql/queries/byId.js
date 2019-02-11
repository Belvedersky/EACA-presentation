const { GraphQLString } =  require('graphql');

const presentationGraphQLType = require('../presentationType');
const Presentation = require('../../models/presentation');

module.exports = {
  type: presentationGraphQLType,
  args: { id: { type: GraphQLString }},
  resolve(parent, args) {
    return Presentation.findById(args.id)
  }
};