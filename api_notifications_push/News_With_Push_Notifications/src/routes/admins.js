module.exports = app => {
    const Admins = app.db.models.admins;
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
    app.post('/admin', (req, res) => {

        const user = req.body.user;
        const pwd = req.body.pwd;
        const apps = req.body.apps;

        Admins.create({

            user: user,
            pwd: pwd,
            apps: apps
        })
            .then(newAdmin => {

                res.json(newAdmin);
            }).catch(error => {

                res.status(412).json({ msg: error.message })
            });

    });
}