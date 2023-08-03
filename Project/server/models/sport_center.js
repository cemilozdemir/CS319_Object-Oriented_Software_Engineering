"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class SportCenter extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // models.SportCenter.belongsToMany(models.Announcement, {
            //     foreignKey: "sport_center_id",
            //     through: "MakeAnnouncement",
            //     as: "Announcement",
            // });
        }
    }
    SportCenter.init(
        {
            sport_center_id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING(64),
            },
            name: {
                type: DataTypes.STRING(64),
            },
            campus: {
                allowNull: false,
                type: DataTypes.STRING(32),
            },
            opening_hour: {
                type: DataTypes.STRING(5),
            },
            closing_hour: {
                type: DataTypes.STRING(5),
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
            modelName: "SportCenter",
        }
    );
    return SportCenter;
};
