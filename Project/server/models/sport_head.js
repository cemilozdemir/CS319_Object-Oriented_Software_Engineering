"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class SportHead extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // models.SportHead.belongsTo(models.User, { foreignKey: "user_id" });
        }
    }
    SportHead.init(
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
            modelName: "SportHead",
        }
    );
    return SportHead;
};
