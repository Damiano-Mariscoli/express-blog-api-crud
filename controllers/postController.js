
const postsList = require("../data/posts");


function index(req, res){
        res.json(postsList);

}




module.exports = { index }