module.exports = (sequelize, DataType) => {

    const Owner = sequelize.define(
        'productowners',
        {
            name: {
                type: DataType.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            surname1: {
                type: DataType.STRING,
                allowNull: true,
                validate: {
                    notEmpty: true
                }
            },
            surname2: {
                type: DataType.STRING,
                allowNull: true,
                validate: {
                    notEmpty: true
                }
            },
            postCode: {
                type: DataType.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            createdAt:{
                type: DataType.DATE
            },
            updatedAt:{
                type: DataType.DATE
            }
        });
    Owner.associate = (models) => {
        Owner.hasMany(models.app);
    };

    return Owner;
};
