import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Sumary from "./SumaryModels.js";
const { DataTypes } = Sequelize;

const Sample = db.define(
  "sample",
  {
    holeId: {
      type: DataTypes.INTEGER,
      references: {
        model: Sumary, // Nama model referensi
        key: "id", // Kolom di model referensi
      },
      allowNull: false, // Foreign key wajib diisi
      onUpdate: "CASCADE", // Perilaku saat data induk diperbarui
      onDelete: "CASCADE", // Perilaku saat data induk dihapus
    },
    sampleID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    from: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    to: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    colour1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    colour2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    colour3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    primary: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    secondary: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    alterationType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    alterationIntensity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quartzType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    intensity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dry: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    moist: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    wet: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    actualKg: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    planKg: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    sulphideType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sulphidePercent: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    oxideWeak: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    oxideMedium: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    oxideStrong: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "pending",
    },

  },

  {
    freezeTableName: true,
  }
);

// Relasi: Sample -> Hole
Sumary.hasMany(Sample, { foreignKey: "holeId" });
Sample.belongsTo(Sumary, { foreignKey: "holeId" });

export default Sample;
