module.exports = app =>{

    const Messege = app.db.models.Messege;

    app.route('/messeges').get((req,res)=>{
        Messege.findAll({})
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: "jeje:" + error.message});
        });
    });

};