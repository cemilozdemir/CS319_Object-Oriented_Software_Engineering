"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Warn extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // models.Warn.hasMany(models.SportHead, {
            //     foreignKey: "sport_head_user_id",
            // });
            // models.Warn.hasMany(models.Student, {
            //     foreignKey: "student_user_id",
            // });
        }
    }
    Warn.init(
        {
            student_user_id: {
                allowNull: false,
                type: DataTypes.STRING,
                primaryKey: true,
            },
            sport_head_user_id: {
                allowNull: false,
                type: DataTypes.STRING,
                primaryKey: true,
            },
            reasoning: {
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
            modelName: "Warn",
        }
    );
    return Warn;
};
