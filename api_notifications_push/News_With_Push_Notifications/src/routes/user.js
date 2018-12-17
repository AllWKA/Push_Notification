var bcrypt = require('bcryptjs');
// bcrypt.genSalt(10, (err, salt) => {

//     bcrypt.hash(admin.pwd, salt,(err, hash) => {
//         // BASE
//     });
// });
module.exports = app => {

    const User = app.db.models.user;

    app.get('/users', (req, res) => {

        User.findAll({
            include: [{ model: app.db.models.app }]
        })
            .then(result => { res.json(result); })

            .catch(error => { res.status(412).json({ msg: error.message }); });

    });

    app.post('/user', (req, res) => {

        bcrypt.genSalt(10, (err, salt) => {

            bcrypt.hash(req.body.pwd, salt, (err, hash) => {
                const name = req.body.name;
                const email = req.body.email;
                const pwd = hash;
                const appId = req.body.appId;

                User.create({

                    name: name,
                    email: email,
                    appId: appId,
                    pwd: pwd
                })
                    .then(user => { res.json(user); })

                    .catch(error => { res.status(412).json({ msg: error.message }); });
            });
        });


    });

    app.get('/user/:id', (req, res) => {

        const id = req.params.id;

        User.find({ where: { id: id } })

            .then(owner => { res.json(owner); });
    });

    app.put("/user/:id", (req, res, next) => {
        bcrypt.genSalt(10, (err, salt) => {

            bcrypt.hash(req.body.pwd, salt, (err, hash) => {

                const id = req.params.id;
                const name = req.body.name;
                const email = req.body.email;
                const pwd = hash;
                const status = req.body.status;

                User.update({

                    name: name,
                    email: email,
                    status: status,
                    pwd: pwd

                }, { where: { id: id } })

                    .then(rowsUpdated => { res.json(rowsUpdated); })

                    .catch(error => { res.status(412).json({ msg: error.message }); });
            });
        });

    });

    app.delete('/user/:id', (req, res) => {

        const id = req.params.id;

        User.destroy({ where: { id: id } })

            .then(deletedOwner => { res.json(deletedOwner); })

            .catch(error => { res.status(412).json({ msg: error.message }); });
    });

}