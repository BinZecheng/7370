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

    // action - create
    create: async function (req, res) {

        if (req.method == "GET"){
            console.log(req.params);
            var busiType = req.params.busiType;
            return res.view('money/create',{
                busiType: busiType
            });
        }

        if (typeof req.body.Money === "undefined")
            return res.badRequest("Form-data not received.");

        await Money.create(req.body.Money);

        return res.redirect('/');
    },

    user: async function (req, res) {

        // var models = await Person.find();
        return res.view('pages/user');

    },
};

