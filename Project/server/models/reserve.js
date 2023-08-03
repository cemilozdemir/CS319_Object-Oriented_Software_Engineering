"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Reserve extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // models.Reserve.hasMany(models.Student, {
            //     foreignKey: "student_user_id",
            // });
            // models.Reserve.hasMany(models.Session, {
            //     foreignKey: "session_id",
            // });
        }
    }
    Reserve.init(
        {
            student_user_id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            session_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            is_absend: {
                type: DataTypes.BOOLEAN,
            },
            date_reserved: {
                type: DataTypes.DATE,
            },
        },
        {
            sequelize,
            modelName: "Reserve",
        }
    );
    return Reserve;
};
