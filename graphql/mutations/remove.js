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
        }
    },
    resolve(parent, args) {
        return Presentation.findOneAndDelete(args.id).exec()
            .then(presentation => presentation.remove())
            .then(deletedPresentation => deletedPresentation)
            .catch(err => console.log(err))
    }
};