module.exports = (sequelize,DataType) => {

    const App = sequelize.define(
        'app',
        {
            name: {
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

    App.associate = (models) => {
        App.hasMany(models.user);
    };

    return App;

};