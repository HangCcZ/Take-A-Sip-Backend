module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5848f9fafe31b8ad6b57d621c8ab0fb6'),
  },
});
