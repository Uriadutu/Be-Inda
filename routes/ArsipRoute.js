import express from "express";
import {
    createArsip,
    getArsip,
    getArsipbyId,
    deleteArsip,
} from "../controllers/Arsip.js"

const router = express.Router();

router.post("/arsip", createArsip);
router.get("/arsip", getArsip);
router.get("/arsip/:id", getArsipbyId);
router.delete("/arsip/:id", deleteArsip);

export default router;
