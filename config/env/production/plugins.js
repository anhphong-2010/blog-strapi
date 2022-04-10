module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      apolloServer: {
        introspection: true,
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME_PROD"),
        api_key: env("CLOUDINARY_KEY_PROD"),
        api_secret: env("CLOUDINARY_SECRET_PROD"),
      },
    },
  },
});
