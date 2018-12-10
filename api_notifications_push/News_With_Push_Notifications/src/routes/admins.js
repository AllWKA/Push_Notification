
module.exports = app => {
    const Admins = app.db.models.admins;

    app.get('/admins', (req, res) => {

        //TODO: cambiar todos los routes para que usen sus controladores.

        Admins.findAll({

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

    app.get('/admin/:id', (req, res) => {

        const id = req.params.id;

        Admins.find({
            include: [{

                model: app.db.models.app,
                attributes: ['id', 'name']
            }],

            where: { id: id }
        })
            .then(admin => {

                res.json(admin);
            }).catch(error => {

                res.status(412).json({ msg: error.message })
            });
    });

    app.get('/appsFromAdmin/:id', (req, res) => {

        const id = req.params.id;

        Admins.find({
            include: [{
                model: app.db.models.app,
                attributes: ['id', 'name']

            }],
            where: { id: id }
        })
            .then(admin => {

                admin.getApps().then(apps => { res.json(apps); });
            }).catch(error => {

                res.status(412).json({ msg: error.message })
            });;
    });

    app.post('/admin', (req, res) => {

        const user = req.body.user;
        const pwd = req.body.pwd;

        Admins.create({

            user: user,
            pwd: pwd,
        })
            .then(newAdmin => {
                res.json(newAdmin);


            }).catch(error => {

                res.status(412).json({ msg: error.message })
            });

    });

    //TODO: test in ionic, here not works
    app.put("/addAppToAdmin/:id", (req, res, next) => {

        const App = req.body.App;
        const id = req.params.id;

        Admins.find({

            include: [{

                model: app.db.models.app,
                attributes: ['id', 'name']

            }],

            where: { id: id }
        })
            .then(admin => {

                // Object.keys(apps).forEach(key => {

                //     App.find({

                //         where: { id: apps[key].id }
                //     })
                //         .then(app => {

                //             admin.addApp(app)

                //         });
                // })
                admin.addApp(App);
                res.json(admin);
            }).catch(error => {

                res.status(412).json({ msg: error.message })
            });
    });

    app.put("/admin/:id", (req, res, next) => {

        const id = req.params.id;
        const user = req.body.user;
        const pwd = req.body.pwd;


        Admins.update({

            user: user,
            pwd: pwd
        }, {

                where: { id: id }
            })
            .then(rowsUpdated => {

                res.json(rowsUpdated);
            })
            .catch(error => {

                res.status(412).json({ msg: error.message });
            });
    });

    app.delete('/admin/:id', (req, res) => {

        const id = req.params.id;
        Admins.destroy({

            where: { id: id }
        })
            .then(deletedAdmin => {

                res.json(deletedAdmin);
            }).catch(error => {

                res.status(412).json({ msg: error.message })
            });
    });



}