module.exports = (sequelize,DataType) => {

    const User = sequelize.define(
        'user',
        {
            name: {
                type: DataType.STRING,
                allowNull: false,
                validate:{
                    notEmpty: true
                }
            },
            status:{
                type: DataType.ENUM('active', 'inactive')
            },
            email: {
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

    User.associate = (models) => {
        User.hasOne(models.app);
    };

    return User;

};