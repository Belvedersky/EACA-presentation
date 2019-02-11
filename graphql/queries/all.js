const { GraphQLList } =  require('graphql');

const presentationGraphQLType = require('../presentationType');
const Presentation = require('../../models/presentation');

module.exports = {
    type: new GraphQLList(presentationGraphQLType),
    args: {},
    resolve() {
      return Presentation.find({})
    }
  }