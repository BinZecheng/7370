/**
 * MoneyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    // action - create
    create: async function (req, res) {

        if (typeof req.body.Money === "undefined")
            return res.badRequest("Form-data not received.");

        await Money.create(req.body.Money);

        return res.redirect('/');
    },
    
    index: async function (req, res) {

        // var models = await Person.find();
        return res.view('pages/index');

    },
};

