module.exports = app => {

    const User = app.db.models.user;



    app.get('/users', (req, res) => {

        User.findAll({
            include: [{

                model: app.db.models.app,
                as: 'userApps',
                attributes: ['id', 'name'],
                through: { attributes: ['userId','appId'] }
            }]
        })
            .then(result => {

                res.json(result);

            })
            .catch(error => {

                res.status(412).json({ msg: error.message })
            });

    });

    app.post('/user', (req, res) => {

        console.log(req.body.name);
        console.log(req.body.email);

        const name = req.body.name;
        const email = req.body.email;
        
        User.create({

            name: name,
            email: email
        })
            .then(newOwner => {

                res.json(newOwner);
            })

    });

    app.get('/user/:id', (req, res) => {

        const id = req.params.id;
        
        User.find({

            where: { id: id }
        })
            .then(owner => {

                res.json(owner);
            });
    });

    app.put("/user/:id", (req, res, next) => {

        const id = req.params.id;
        const name = req.body.name;
        const email = req.body.email;
        const status = req.body.status;

        User.update({

            name: name,
            email: email,
            status: status
        }, {

                where: { id: id }
            })
            .then(rowsUpdated => {

                res.json(rowsUpdated)
            })
            .catch(error => {

                res.status(412).json({ msg: error.message })
            });
    });

    app.delete('/user/:id', (req, res) => {

        const id = req.params.id;
        User.destroy({

            where: { id: id }
        })
            .then(deletedOwner => {

                res.json(deletedOwner);
            }).catch(error => {

                res.status(412).json({ msg: error.message })
            });
    });

}