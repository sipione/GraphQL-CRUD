
const matriculaSchema = require('./schema/matricula.graphql');
const matriculasAPI = require('./datasource/matricula');
const matriculaResolvers = require('./resolvers/matriculaResolvers')


module.exports={
    matriculaSchema,
    matriculaResolvers,
    matriculasAPI
}
