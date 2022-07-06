const { GraphQLScalarType } = require("graphql");


const matriculaResolvers = {
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'string de data e hora no formato ISO-8601',
        serialize: (value) => value.toISOString(),
        parseValue: (value) => new Date(value),
        parseLiteral: (ast) => new Date(ast.value)
      }),
    Query: {
        matriculas: (_, __, { dataSources })=> dataSources.matriculasAPI.getMatriculas()
    },
    Mutation: {
        matrcicularEstudante: (_, dados, {dataSources})=> dataSources.matriculasAPI.matrcicularEstudante(dados)
    }
}

module.exports = matriculaResolvers;