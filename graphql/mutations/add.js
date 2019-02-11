const {
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

const presentationGraphQLType = require('./../presentationType');
const Presentation = require('./../../models/presentation');

module.exports = {
    type: presentationGraphQLType,
    args: {
        name: {
            type: GraphQLString
        },
        release_date: {
            type: GraphQLString
        },
        author: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        }
    },
    resolve(parent, args) {
        const newPresentation = new Presentation({
            name: args.name,
            release_date: args.release_date,
            author: args.author,
            description: args.description,
        })

        return newPresentation.save();
    }
};