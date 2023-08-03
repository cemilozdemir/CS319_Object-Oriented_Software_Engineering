"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class HasExercise extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // models.HasExercise.hasMany(models.Exercise, {
            //     foreignKey: "exercise_id",
            // });
            // models.HasExercise.hasMany(models.WorkoutProgram, {
            //     foreignKey: "workout_program_id",
            // });
        }
    }
    HasExercise.init(
        {
            exercise_id: {
                allowNull: false,
                type: DataTypes.STRING,
                primaryKey: true,
            },
            workout_program_id: {
                allowNull: false,
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            set_count: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            rep_count: {
                allowNull: false,
                type: DataTypes.INTEGER,
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
            modelName: "HasExercise",
        }
    );
    return HasExercise;
};
