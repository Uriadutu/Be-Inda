import express from "express";
import {
    createLaporan,
    getAllLaporan,
    getLaporanById,
    updateLaporan,
    deleteLaporan,
} from "../controllers/Laporan.js"

const router = express.Router();

router.post("/laporan", createLaporan);
router.get("/laporan", getAllLaporan);
router.get("/laporan/:id", getLaporanById);
router.put("/laporan/:id", updateLaporan);
router.delete("/laporan/:id", deleteLaporan);

export default router;
