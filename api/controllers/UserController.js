/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    
	login: async function (req, res) {

        if (req.method == "GET") return res.view('user/login');
    
        if (!req.body.username) return res.badRequest();
        if (!req.body.password) return res.badRequest();
    
        var user = await User.findOne({ username: req.body.username });
    
        if (!user) {
            res.status(401);
            return res.send("User not found");
        }
        const match = await sails.bcrypt.compare(req.body.password, user.password);

        if (!match) {
            res.status(401);
            return res.send("Wrong Password");
        }
        
    
        req.session.regenerate(function (err) {
    
            if (err) return res.serverError(err);
    
            req.session.username = req.body.username;
            req.session.role = user.role;
            req.session.uid= user.id;
    
            sails.log("Session: " + JSON.stringify(req.session) );
            
            return res.redirect('/');
    
        });
    
    },

    logout: async function (req, res) {

        req.session.destroy(function (err) {
        
            if (err) return res.serverError(err);
            
            return res.redirect('/');
            
        });
    },

    populate: async function (req, res) {

        if (!['supervises'].includes(req.params.association)) return res.notFound();
    
        const message = sails.getInvalidIdMsg(req.params);
    
        if (message) return res.badRequest(message);
    
        var model = await User.findOne(req.params.id).populate(req.params.association);
    
        if (!model) return res.notFound();
    
        return res.json(model);
    
    },
}
