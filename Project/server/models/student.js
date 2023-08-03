"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Student extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // models.Student.belongsTo(models.User, { foreignKey: "user_id" });
            // models.Student.belongsToMany(models.Session, {
            //     foreignKey: "user_id",
            //     through: "Reserve",
            // });
        }
    }
    Student.init(
        {
            user_id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            penalty_points: {
                type: DataTypes.INTEGER,
            },
            weight: {
                type: DataTypes.FLOAT,
            },
            height: {
                type: DataTypes.FLOAT,
            },
        },
        {
            sequelize,
            modelName: "Student",
        }
    );
    return Student;
};
