"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class WorkoutProgram extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // models.WorkoutProgram.belongsToMany(models.Instructor, {
            //     foreignKey: "workout_program_id",
            //     through: "AssignWorkoutProgram",
            // });
            // models.WorkoutProgram.belongsToMany(models.Student, {
            //     foreignKey: "workout_program_id",
            //     through: "AssignWorkoutProgram",
            // });
            // models.WorkoutProgram.belongsToMany(models.Exercise, {
            //     foreignKey: "workout_program_id",
            //     through: "HasExercise",
            // });
        }
    }
    WorkoutProgram.init(
        {
            workout_program_id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
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
            modelName: "WorkoutProgram",
        }
    );
    return WorkoutProgram;
};
