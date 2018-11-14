console.log("-*- soy el model messege y me llaman");
module.exports = (sequelize, DataType) => {

    console.log("emmm:",sequelize);
    

    var Messege = sequelize.define(
        'messege',
        {
            title: {
                type: DataType.STRING
            },
            content: {
                type: DataType.STRING
            }
        }
    );

    // Messege.associate = (models) => {
    //     //associations can be define here

    //     // Messege.belongsToMany(models.UserHasMessege);
    //     Messege.hasMany(models.UserHasMessege);

    // };
        console.log("33333333333:",Messege);
        
    return Messege;
};