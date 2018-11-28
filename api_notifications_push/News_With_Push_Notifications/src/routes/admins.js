
module.exports = app => {
    const Admins = app.db.models.admins;
    const App = app.db.models.app;

    app.get('/admins', (req, res) => {

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

    app.put("/addAppToAdmin/:id", (req, res, next) => {

        const apps = req.body.apps;
        const id = req.params.id;

        Admins.find({

            include: [{

                model: app.db.models.app,
                attributes: ['id', 'name']

            }],

            where: { id: id }
        })
            .then(admin => {

                Object.keys(apps).forEach(key => {

                    App.find({

                        where: { id: apps[key].id }
                    })
                        .then(app => {

                            admin.addApp(app)

                        });
                }).catch(error => {

                    res.status(412).json({ msg: error.message })
                });
                res.json(admin);
            })
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

                res.status(412).json({ msg: error.message })
            });
    });

    app.put("/deleteAppFromAdmin/:id", (req, res, next) => {

        //const apps = req.body.apps;
        const id = req.params.id;
        const updateApps = req.body.apps;

        Admins.find({

            include: [{

                model: app.db.models.app,
                attributes: ['id', 'name']

            }],

            where: { id: id }
        })
            .then(admin => {


                const oldApps = admin.apps;


                //admin.setApps([]);

                const newApps = [];
                console.log("-->",newApps);


                /*Object.keys(apps).forEach(key => {

                    App.find({

                        where: { id: apps[key].id }
                    })
                        .then(app => {

                            admin.addApp(app);
                            
                        });
                });*/

                Object.keys(oldApps).forEach(key => {

                    var oldId = oldApps[key].id;
                    var valid = true;
                    Object.keys(updateApps).forEach(key => {
                        
                        if (oldId == updateApps[key].id) {
                            console.log("invalid id:", updateApps[key].id);

                            valid = false;
                        }

                    });
                    if (valid == true) {
                        console.log("valid id:",oldId);
                        
                        App.find({

                            where: { id: oldId }
                        })
                            .then(app => {

                                newApps.push(app);
                            });
                        
                    }

                    console.log("--.-->",newApps[0]);
                    



                });

                res.json(admin);
            }).catch(error => {

                res.status(412).json({ msg: error.message })
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