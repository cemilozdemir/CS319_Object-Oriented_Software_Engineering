"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class AssignWorkHour extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // models.AssignWorkHour.hasMany(models.SportHead, {
            //     foreignKey: "sport_head_user_id",
            // });
            // models.AssignWorkHour.hasMany(models.Instructor, {
            //     foreignKey: "instructor_user_id",
            // });
            // models.AssignWorkHour.hasMany(models.Session, {
            //     foreignKey: "session_id",
            // });
        }
    }
    AssignWorkHour.init(
        {
            instructor_user_id: {
                allowNull: false,
                type: DataTypes.STRING,
                primaryKey: true,
            },
            sport_head_user_id: {
                allowNull: false,
                type: DataTypes.STRING,
                primaryKey: true,
            },
            session_id: {
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
            modelName: "AssignWorkHour",
        }
    );
    return AssignWorkHour;
};
