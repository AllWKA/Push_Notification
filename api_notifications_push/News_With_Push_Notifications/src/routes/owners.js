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
                
                res.json(result);

            })
            .catch(error => {

                res.status(412).json({ msg: error.message })
            });
            

    });

    app.get('/owner/:name', (req, res) => {

        const name = req.params.name;
        
        
        Owners.find({
            where: { name: name },
            include: [{
                model: app.db.models.app,
                attributes: ['id', 'name']

            }]
        })
            .then(result => {
                
                res.json(result);
            })
            .catch(error => {

                res.status(412).json({ msg: error.message })
            });
            

    });

    app.get('/owner/:id', (req, res) => {

        const id = req.params.id;
        
        
        Owners.find({
            where: { id: id },
            include: [{
                model: app.db.models.app,
                attributes: ['id', 'name']

            }]
        })
            .then(result => {
                
                res.json(result);
            })
            .catch(error => {

                res.status(412).json({ msg: error.message })
            });
            

    });

    app.post('/owner', (req, res) => {

        const name = req.body.name;
        const surname1 = req.body.surname1;
        const surname2 = req.body.surname2;
        const postCode = req.body.postCode;

        Owners.create({

            name: name,
            surname1: surname1,
            surname2: surname2,
            postCode: postCode
        })
            .then(owner => {

                res.json(owners);
            })
            .catch(error => {

                res.status(412).json({ msg: error.message })
            });

    });

    app.put("/addAppToProductOwner/:id", (req, res, next) => {

        const App = req.body.app;
        const id = req.params.id;

        Owners.find({

            include: [{

                model: app.db.models.app,
                attributes: ['id', 'name']

            }],

            where: { id: id }
        })
            .then(admin => {
                
                admin.addApp(App);
                res.json(admin);
            }).catch(error => {

                res.status(412).json({ msg: error.message })
            });
    });
    
    app.delete('/owner/:id', (req, res) => {

        const id = req.params.id;

        Owners.destroy(

            { where: { id: id } })

            .then(owner => { res.json(owner); })

            .catch(error => { res.status(412).json({ msg: error.message }); });
    });
};