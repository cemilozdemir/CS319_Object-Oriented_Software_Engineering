"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Instructor extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // models.Instructor.belongsTo(models.User, { foreignKey: "user_id" });
            // models.Instructor.hasMany(models.AssignWorkHour, {
            //     foreignKey: "user_id",
            // });
        }
    }
    Instructor.init(
        {
            user_id: {
                primaryKey: true,
                type: DataTypes.STRING,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        },
        {
            sequelize,
            modelName: "Instructor",
        }
    );
    return Instructor;
};
