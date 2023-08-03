"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Announcement extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {}
    }
    Announcement.init(
        {
            announcement_id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            title: {
                type: DataTypes.STRING,
            },
            content: {
                type: DataTypes.STRING(1024),
            },

            author: {
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

            endDate:{
            
                type: DataTypes.DATE,
            }
        },
        {
            sequelize,
            modelName: "Announcement",
        }
    );
    return Announcement;
};
