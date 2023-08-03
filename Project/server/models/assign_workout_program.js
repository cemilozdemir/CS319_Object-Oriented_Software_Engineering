"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class AssignWorkoutProgram extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // models.AssignWorkoutProgram.hasMany(models.WorkoutProgram, {
            //     foreignKey: "workout_program_id",
            // });
            // models.AssignWorkoutProgram.hasMany(models.Instructor, {
            //     foreignKey: "instructor_user_id",
            // });
            // models.AssignWorkoutProgram.hasMany(models.Student, {
            //     foreignKey: "student_user_id",
            // });
        }
    }
    AssignWorkoutProgram.init(
        {
            instructor_user_id: {
                allowNull: false,
                type: DataTypes.STRING,
                primaryKey: true,
            },
            student_user_id: {
                allowNull: false,
                type: DataTypes.STRING,
                primaryKey: true,
            },
            workout_program_id: {
                allowNull: false,
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            assigned_date: {
                allowNull: false,
                type: DataTypes.DATE,
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
            modelName: "AssignWorkoutProgram",
        }
    );
    return AssignWorkoutProgram;
};
