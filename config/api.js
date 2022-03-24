module.exports = {
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      apolloServer: {
        introspection: true,
      },
    },
  },
};
