# GraphQL-CRUD
A CRUD made with node js using graphQL in the Apollo Server in order to manage two differents data sources

## Overview

At first, the code was made in Portuguese because it was made for a Brazilian scholar system.

The apollo server receives all the schemas merged and an array of resolvers as the basic props. After that, the props dataSources create a new instance of the class that makes the connection with the database. 

The program is a back-end CRUD ready to be consumed by the front-end. The GraphQl was used to manage two different data sources, one from a json server and other from an sqlite database.

Following the MVC pattern this project could be considered the Controller field. 

Each entity "turma", "user" and "matricula" has an index.js, a schema, resolvers and datasource folders. The index.js archive is the entry point to the folder, sharing the path for each functionality. The Schema folder contains the .graphql archive to construct all the schema elements, the queries and the mutations. In the resolvers folder it is possible to find the object with the scalar, query and mutations functions, calling the datasource method for each "route". The datasource folder contains the class with methods which handle the database information (json or sqlite in this case).
