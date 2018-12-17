const getAdmins = (req, res) => {

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
}

const getAdmin = (req, res) => {
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
}