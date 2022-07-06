const { ApolloServer } = require('apollo-server')
const { mergeTypeDefs } = require('graphql-tools')
const path = require('path')

const {userSchema, userResolvers, UsersAPI} = require('./user')
const {turmaResolvers, turmaSchema, turmasAPI} = require('./turma')
const { matriculaSchema, matriculaResolvers, matriculasAPI } = require('./matricula')

const typeDefs = mergeTypeDefs([userSchema, turmaSchema, matriculaSchema])
const resolvers = [userResolvers, turmaResolvers, matriculaResolvers]

//Elemento requerido pela documentação do kinex do SQLdatasource
const dbConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: path.resolve(__dirname, './data/database.db')
  }
} 

const server = new ApolloServer( { 
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      usersAPI: new UsersAPI(),
      turmasAPI: new turmasAPI(dbConfig),
      matriculasAPI: new matriculasAPI(dbConfig)
    }
  },
 })

server.listen().then(({url}) => {
  console.log(`Servidor rodando na porta ${url}`)
})