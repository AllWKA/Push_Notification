var bodyParser = require('body-parser').json();
module.exports = app => {

    const App = app.db.models.app;
    
    

    app.get('/apps',bodyParser,(req,res)=>{
        
        App.findAll({})
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message})
        });
        
    });

    app.post('/app',(req,res)=>{
        console.log(req.body);
        
    });

}