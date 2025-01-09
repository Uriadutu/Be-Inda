import express from "express";
import {
    createShiftLog,
    getAllShiftLogs,
    getShiftLogById,
    updateShiftLog,
    deleteShiftLog,
    getShiftLogByShift,
} from "../controllers/Tanggal.js";

const router = express.Router();

router.post("/tanggal", createShiftLog);
router.get("/tanggal", getAllShiftLogs);
router.get("/tanggal/:id", getShiftLogById);
router.get("/tanggal/shift/:shift", getShiftLogByShift);
router.put("/tanggal/:id", updateShiftLog);
router.delete("/tanggal/:id", deleteShiftLog);

export default router;
