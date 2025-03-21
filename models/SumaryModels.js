import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Sumary = db.define(
  "sumary",
  {
    holeID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    by_tgl : {
      type: DataTypes.STRING,
      allowNull: true,
    },
    proposedID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    depth: {
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
    total_meter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sample_ns: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    azimuth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sampleid_from: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sampleid_to: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
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
    timeStart: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    timeFinish: {
      type: DataTypes.STRING,
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

    //===================//
    loggedBy: {
        type: DataTypes.STRING,
        defaultValue : "-",
      },
      tanggal: {
        type: DataTypes.STRING,
        defaultValue : "-",
      },
      checkBy: {
        type: DataTypes.STRING,
        defaultValue : "-",
      },
      tglCheck: {
        type: DataTypes.STRING,
        defaultValue : "-",
      },
      page: {
        type: DataTypes.STRING,
        defaultValue : "-",
      },
  },
  {
    freezeTableName: true,
  }
);

export default Sumary;
