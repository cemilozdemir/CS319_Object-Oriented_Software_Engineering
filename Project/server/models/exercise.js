"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Exercise extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static assoaciate(models) {
            // models.Exercise.belongsToMany(models.WorkOutProgram, {
            //     foreignKey: "exercise_id",
            //     through: "Has_exercise",
            // });
        }
    }
    Exercise.init(
        {
            exercise_id: {
                primaryKey: true,
                type: DataTypes.STRING,
            },
            name: {
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
            modelName: "Exercise",
        }
    );
    return Exercise;
};
