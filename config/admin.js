module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1613775cd5199e3c185953b9475853b6'),
  },
});
