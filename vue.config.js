// vue.config.js
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/FastSecurity/'
    : '/',
    lintOnSave: true
};
