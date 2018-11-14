console.log("-*- soy el model user y me llaman");
module.exports = (sequelize, DataType) => {

    var User = sequelize.define(
        'user',
        {
            name: {
                type: DataType.STRING
            },
            status: {
                type: DataType.ENUM,
                values: ['active', 'inactive']
            },
            email: {
                type: DataType.STRING
            }
        }
    );

    /*User.associate = (models) => {
        //associations can be define here

        // User.belongsToMany(models.UserHasMessege);
        User.hasMany(models.UserHasMessege);
    };*/

    return User;
};