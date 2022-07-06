const { GraphQLScalarType } = require("graphql");

const turmaResolvers ={
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'string de data e hora no formato ISO-8601',
        serialize: (value) => value.toISOString(),
        parseValue: (value) => new Date(value),
        parseLiteral: (ast) => new Date(ast.value)
      }),
    Query: {
        //parent ou root foi suprimido por 1 _, args por __, o info foi apagado e fica depois do context
        turmas: (_, __, { dataSources }) => dataSources.turmasAPI.getTurmas(),
        turma: (_, { id }, { dataSources }) => dataSources.turmasAPI.getTurma(id)
    },
    Mutation : {
        incluiTurma: (_, {turma}, {dataSources})=> dataSources.turmasAPI.incluiTurma(turma),
        atualizaTurma: (_, novosDados, {dataSources})=> dataSources.turmasAPI.atualizaTurma(novosDados),
        deletaTurma: (_, {id}, {dataSources})=>dataSources.turmasAPI.deletaTurma(id)
    }
}

module.exports = turmaResolvers;