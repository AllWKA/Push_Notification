module.exports = (sequelize,DataType) => {

    const Admins = sequelize.define(
        'admins',
        {
            user: {
                type: DataType.STRING,
                allowNull: false,
                validate:{
                    notEmpty: true
                }
            },
            pwd: {
                type: DataType.STRING,
                allowNull: false,
                validate:{
                    notEmpty: true
                }
            },
            createdAt:{
                type: DataType.DATE
            },
            updatedAt:{
                type: DataType.DATE
            }
        }
    );

    Admins.associate = (models) => {
        //TODO: many to many a app
        Admins.belongsToMany(models.app, {through: 'app_has_admins'});
        
    };

    return Admins;

};