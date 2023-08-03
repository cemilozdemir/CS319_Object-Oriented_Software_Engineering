"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Admin extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // models.Admin.belongsTo(models.User, {
            //     foreignKey: "user_id",
            // });
            // models.Admin.hasMany(models.AssignWorkHour, {
            //     foreignKey: "user_id",
            // });
        }
    }
    Admin.init(
        {
            user_id: {
                primaryKey: true,
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
            modelName: "Admin",
        }
    );
    return Admin;
};
