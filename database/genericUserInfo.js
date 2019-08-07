module.exports = function(sequelize, DataTypes) {
    var genericUserTable = sequelize.define("genericUserTable", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userFirstName: {
            type: DataTypes.STRING,
            required: true,
            len: [2, 50],
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        userLastName: {
            type: DataTypes.STRING,
            required: true,
            len: [2, 50],
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        userPhone: {
            type: DataTypes.STRING,
            isNumeric: true          // will only allow numbers
        },
        userAddress: {
            type: DataTypes.STRING
        }
        //maybe have a userID we can use that isn't the primary key to avoid giving away how many users we have if we wanted to display a userID for some reason
    })
    return genericUserTable
}