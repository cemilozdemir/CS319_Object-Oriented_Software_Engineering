"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // models.User.hasMany(models.Student, {
            //     foreignKey: "user_id",
            //     constraints: false,
            // });
            // models.User.hasMany(models.Instructor, {
            //     foreignKey: "user_id",
            //     constraints: false,
            // });
            // models.User.hasMany(models.Admin, {
            //     foreignKey: "user_id",
            //     constraints: false,
            // });
            // models.User.hasMany(models.SportHead, {
            //     foreignKey: "user_id",
            //     constraints: false,
            // });
        }
    }
    User.init(
        {
            user_id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            hashed_password: DataTypes.STRING,
            cell_phone: DataTypes.STRING,
            user_type: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    return User;
};
