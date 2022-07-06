
const turmaResolvers = require('./resolvers/turmaResolvers')
const turmaSchema = require('./schema/turma.graphql')
const turmasAPI = require('./datasource/turma')

module.exports={
    turmaResolvers,
    turmaSchema,
    turmasAPI
}