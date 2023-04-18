/*const {user} = require("../models/main_model");

module.exports = function hasRole(roles){
    return async(req,res,next) => {
        const user = await user.findOne({where: {id : req.body.id}})
        if(!user || !user.role == roles)
            return res.status(403);
        else next();
    }
}*/