const { DataTypes } = require("sequelize");
const { TABLE_NAMES, COLUMN_NAMES } = require("./Constants");
const { sequelize } = require("../db/conn");

const User = sequelize.define(
  "User",
  {
    [COLUMN_NAMES.USERS.ID]: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    [COLUMN_NAMES.USERS.USER_NAME]: {
      type: DataTypes.STRING(45),
      allowNull: false,
      validate: {
        notNull: { msg: "User name is required" },
        len: [1, 45],
      },
    },
    [COLUMN_NAMES.USERS.SCORE]: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: TABLE_NAMES.USERS,
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: [COLUMN_NAMES.USERS.USER_NAME],
      },
    ],
  }
);

module.exports = {
  User,
};
