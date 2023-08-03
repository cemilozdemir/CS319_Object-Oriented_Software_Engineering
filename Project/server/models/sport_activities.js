"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class SportActivity extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // models.SportActivity.belongsToMany(models.Session, {
            //     foreignKey: "sport_activity_id",
            //     through: "HasSession",
            //     as: "Session",
            // });
        }
    }
    SportActivity.init(
        {
            sport_activity_id: {
                type: DataTypes.STRING,
            },
            sport_center_id: {
                type: DataTypes.STRING,
            },
            capacity: {
                type: DataTypes.INTEGER,
            },
            is_team_sport: {
                type: DataTypes.BOOLEAN,
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
            modelName: "SportActivity",
        }
    );
    return SportActivity;
};
