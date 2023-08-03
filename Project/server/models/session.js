"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Session extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // models.Session.belongsToMany(models.Student, {
            //     foreignKey: "session_id",
            //     through: "Reserve",
            //     as: "Student",
            // });
            // models.Session.belongsToMany(models.SportActivity, {
            //     foreignKey: "session_id",
            //     through: "HasSession",
            //     as: "SportActivity",
            // });
        }
    }
    Session.init(
        {
            session_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            activity_day: {
                type: DataTypes.DATEONLY,
            },
            slot: {
                type: DataTypes.INTEGER,
            },
            time_interval: {
                type: DataTypes.STRING,
            },
            duration: {
                type: DataTypes.INTEGER,
            },
            disinfection_duration: {
                type: DataTypes.INTEGER,
            },
        },
        {
            sequelize,
            modelName: "Session",
        }
    );
    return Session;
};
