"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class MakeAnnouncement extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // models.MakeAnnouncement.hasOne(models.SportCenter, {
            //     foreignKey: "sport_center_id",
            // });
            // models.MakeAnnouncement.hasMany(models.Announcement, {
            //     foreignKey: "announcement_id",
            // });
            // models.MakeAnnouncement.hasMany(models.SportHead, {
            //     foreignKey: "sport_head_user_id",
            // });
        }
    }
    MakeAnnouncement.init(
        {
            announcement_id: {
                allowNull: false,
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            sport_head_user_id: {
                allowNull: false,
                type: DataTypes.STRING,
                primaryKey: true,
            },
            sport_center_id: {
                allowNull: false,
                type: DataTypes.STRING,
                primaryKey: true,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            announcement_start_date: {
                allowNull: false,
                type: DataTypes.DATEONLY,
            },
            announcement_end_date: {
                allowNull: false,
                type: DataTypes.DATEONLY,
            },
        },
        {
            sequelize,
            modelName: "MakeAnnouncement",
        }
    );
    return MakeAnnouncement;
};
