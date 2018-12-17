module.exports = (sequelize, DataType) => {

    const Owner = sequelize.define(
        'productowners',
        {
            name: {
                type: DataType.STRING,
                allowNull: false
            },
            surname1: {
                type: DataType.STRING,
                allowNull: true
            },
            surname2: {
                type: DataType.STRING,
                allowNull: true
            },
            postCode: {
                type: DataType.INTEGER,
                allowNull: false
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
