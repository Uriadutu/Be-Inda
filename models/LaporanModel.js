import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Laporan = db.define(
  "Laporan",
  {
    propHoleID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    project: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    prospect: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    holeID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    timeStart: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    timeFinish: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    northingProp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    eastingProp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cow: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rigNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateStart: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dateFinish: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    collarAzimuth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    collarDip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    northingHoleID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    eastingHoleID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    loggedBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateLogged: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    checkedBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateChecked: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    page: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    color: {
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
  },
  {
    freezeTableName: true,
  }
);

export default Laporan;
