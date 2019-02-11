const {
    GraphQLObjectType,
    GraphQLString
} = require('graphql');
const presentationGraphQLType = require('./../presentationType');
const Presentation = require('./../../models/presentation');

module.exports = {
    type: presentationGraphQLType,
    args: {
        id: {
            type: GraphQLString
        },
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
        return Presentation.findById(args.id)
            .then(presentation => {
                presentation.name = args.name
                presentation.release_date = args.release_date,
                    presentation.author = args.author,
                    presentation.description = args.description

                return presentation.save()

            })
            .then(updatedPresentation => updatedPresentation)
            .catch(err => console.log(err))
    }
};