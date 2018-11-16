module.exports = (sequelize,DataType) => {

    const App = sequelize.define(
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

    App.associate = (models) => {
        //App.belongsToMany(models.user,{through: 'app_has_users'});
        console.log("jeje no tengo(by admins no mas oralesito)");
        
    };

    return App;

};