module.exports = (sequelize,DataType) => {

    const App = sequelize.define(
        'app',
        {
            name: {
                type: DataType.STRING,
                allowNull: false,
                validate:{
                    notEmpty: true
                },
                unique: true
            },
            createdAt:{
                type: DataType.DATE
            },
            updatedAt:{
                type: DataType.DATE
            }
        }
    );

    App.associate = (models) => {
        App.hasMany(models.user);
        App.belongsToMany(models.admins,{through: 'app_has_admins'});
        App.belongsTo(models.productowners, {foreignKey: 'productOwnerId'});
    };

    return App;

};