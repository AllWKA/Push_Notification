module.exports = app => {

    const App = app.db.models.app;



    app.get('/apps', (req, res) => {

        App.findAll({
            include: [{
                model: app.db.models.user
            }]
        })
            .then(result => res.json(result))
            .catch(error => {

                res.status(412).json({ msg: error.message })
            });

    });

    app.post('/app', (req, res) => {

        console.log(req.body.name);
        const name = req.body.name;
        App.create({

            name: name
        })
            .then(newOwner => {

                res.json(newOwner);
            })
            .catch(error => {

                res.status(412).json({ msg: error.message })
            });

    });

    app.get('/app/:id', (req, res) => {
        const id = req.params.id;
        App.find({

            where: { id: id }
        })
            .then(app => {

                res.json(app);
                console.log("OWNER:::",app);
                
            })
            .catch(error => {

                res.status(412).json({ msg: error.message })
            });
    });

    app.put("/app/:id", (req, res, next) => {

        const id = req.params.id;
        const name = req.body.name;

        App.update({

            name: name
        }, {

                where: { id: id }
            })
            .then(function (rowsUpdated) {

                res.json(rowsUpdated)
            })
            .catch(next)
    });

    app.delete('/app/:id', (req, res) => {

        const id = req.params.id;
        App.destroy({

            where: { id: id }
        })
            .then(deletedOwner => {

                res.json(deletedOwner);
            })
            .catch(error => {

                res.status(412).json({ msg: error.message })
            });
    });

}