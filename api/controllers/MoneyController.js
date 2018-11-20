/**
 * MoneyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    index: async function (req, res) {

        // var models = await Person.find();
        return res.view('pages/index');

    },
};

