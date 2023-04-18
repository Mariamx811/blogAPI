const user = require("./user_model");
const post = require("./posts_model");

user.hasMany(post);
post.belongsTo(user);

module.exports = {user,post};