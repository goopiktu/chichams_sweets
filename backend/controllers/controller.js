const controller = {
    
    getFavicon: function(req, res){
        res.status(204);
    },

    getIndex: function (req, res){
        res.render('index');
    },

    //more functions here
}

module.exports = controller;