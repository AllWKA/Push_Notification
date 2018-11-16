module.exports = app => {
    const Admins = app.db.models.admins;
    app.get('/admins', (req, res) => {

        Admins.findAll({
            through: {
                attributes: ['user_id', 'app_id'],
            }
        })
            .then(result => {

                res.json(result);

            })
            .catch(error => {

                res.status(412).json({ msg: error.message })
            });

    });
    app.post('/admin', (req, res) => {

        const user = req.body.user;
        const pwd = req.body.pwd;

        Admins.create({

            user: user,
            pwd: pwd
        })
            .then(newAdmin => {

                res.json(newAdmin);
            }).catch(error => {

                res.status(412).json({ msg: error.message })
            });

    });
}