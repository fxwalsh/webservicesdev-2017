var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'expressapp'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/expressapp-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'expressapp'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/expressapp-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'expressapp'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/expressapp-production'
  }
};

module.exports = config[env];
