module.exports = function(sequelize, DataTypes) {
    var consumerInfoTable = sequelize.define("consumerInfoTable", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        consumerAllergies: {
            type: DataTypes.STRING,
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        //Kitchen objects. More than likely more will be needed
        consumerStove: {
            type: DataTypes.STRING, //Making this string rather than Boolean so that we can pass in the type of grill
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        consumerGrill: {
            type: DataTypes.STRING,
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        consumerOven: {
            type: DataTypes.BOOLEAN,
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        consumerMicrowave: {
            type: DataTypes.BOOLEAN,
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        consumerSink: {
            type: DataTypes.BOOLEAN,
            is: ["^[a-z]+$", "i"] // will only allow letters
        }
    })
    return consumerInfoTable
}