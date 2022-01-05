// import type { FastifyInstance } from 'fastify';
// import fastify from 'fastify';
// import { DocumentNode } from 'graphql';
// import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
// import { ApolloServer } from 'apollo-server-fastify';
// import type { ApolloServerPlugin } from 'apollo-server-plugin-base';
// import { typeDefs } from '@/lib/typeDefs';
// import { resolvers } from '@/resolvers';
// import type { IResolvers } from '@graphql-tools/utils';

// function closeAppPlugin(app: FastifyInstance): ApolloServerPlugin {
//   return {
//     async serverWillStart() {
//       return {
//         async drainServer() {
//           await app.close();
//         },
//       };
//     },
//   };
// }

// async function startServer(opts: {
//   typeDefs: DocumentNode | DocumentNode[] | string | string[];
//   resolvers: IResolvers | IResolvers[];
// }) {
//   const app = fastify();
//   const server = new ApolloServer({
//     ...opts,
//     plugins: [closeAppPlugin(app), ApolloServerPluginDrainHttpServer({ httpServer: app.server })],
//   });

//   await server.start();
//   app.register(server.createHandler());
//   await app.listen(3000).then((url) => {
//     console.log(`🚀  Server is listening on ${url.replace('127.0.0.1', 'localhost')}`);
//   });
// }

// startServer({ typeDefs, resolvers });
