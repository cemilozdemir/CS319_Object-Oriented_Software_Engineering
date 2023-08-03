"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class HasSession extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // models.HasSession.belongsTo(models.SportActivity, {
            //     foreignKey: "sport_activity_id",
            // });
            // models.HasSession.hasMany(models.Session, {
            //     foreignKey: "session_id",
            // });
        }
    }
    HasSession.init(
        {
            sport_activity_id: {
                allowNull: false,
                type: DataTypes.STRING,
                primaryKey: true,
            },
            sport_center_id: {
                allowNull: false,
                type: DataTypes.STRING,
                primaryKey: true,
            },
            session_id: {
                allowNull: false,
                type: DataTypes.INTEGER,
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
        },
        {
            sequelize,
            modelName: "HasSession",
        }
    );
    return HasSession;
};
