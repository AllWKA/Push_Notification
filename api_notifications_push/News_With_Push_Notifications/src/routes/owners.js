module.exports = app => {
    const Owners = app.db.models.productowners;
    app.get('/owners', (req, res) => {
        
        Owners.findAll({

            include: [{
                model: app.db.models.app,
                attributes: ['id', 'name']

            }]
        })
            .then(result => {
                //getUpdatedApps(result.body);
                console.log("->",JSON.parse(result));
                
                res.json(result);

            })
            .catch(error => {

                res.status(412).json({ msg: error.message })
            });
            

    });
    app.put("/owner/:name", (req, res, next) => {

        const name = req.body.name;
        const surname1 = req.body.surname1;
        const surname2 = req.body.surname2;
        const postCode = req.body.postCode;
        const apps = getUpdatedApps(req.body.apps);

        User.update({

            name: name,
            surname1: surname1,
            surname2: surname2,
            postCode: postCode
        }, {

                where: { name: name }
            })
            .then(rowsUpdated => {

                res.json(rowsUpdated)
            })
            .catch(error => {

                res.status(412).json({ msg: error.message })
            });
    });
};

function getUpdatedApps(a){

    console.log("->",a);
    
}