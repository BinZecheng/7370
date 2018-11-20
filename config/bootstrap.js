/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function (done) {

  sails.bcrypt = require('bcryptjs');
  const saltRounds = 10;

  sails.getInvalidIdMsg = function (opts) {

    if (opts.id && isNaN(parseInt(opts.id))) {
      return "Primary key specfied is invalid (incorrect type).";
    }

    if (opts.fk && isNaN(parseInt(opts.fk))) {
      return "Foreign key specfied is invalid (incorrect type).";
    }

    return null;        // falsy

  }

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  if (await User.count() > 0) {
    return done();
  }

  // await Person.createEach([
  //   { name: "Martin Choy", age: 23 },
  //   { name: "Kenny Cheng", age: 22 }
  //   // etc.
  // ]);


  const hash = await sails.bcrypt.hash('123456', saltRounds);

  await User.createEach([
    { "username": "admin", "password": hash, role:"admin"},
    { "username": "user", "password": hash, role:"user"},

  ]);

  
  return done();

};
