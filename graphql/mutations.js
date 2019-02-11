const { GraphQLObjectType, GraphQLString } = require('graphql');

const addPresentation = require('./mutations/add')
const updatePresentation = require('./mutations/update')
const removePresentation = require('./mutations/remove')

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPresentation,
    updatePresentation,
    removePresentation
  }
})

module.exports = Mutation;