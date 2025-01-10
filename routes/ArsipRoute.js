import express from "express";
import {
    createArsip,
    getArsip,
    getArsipbyId,
    deleteArsip,
    getArsipbyTerima,
    terimaArsip,
    getArsipbyPending,
} from "../controllers/Arsip.js"

const router = express.Router();

router.post("/arsip", createArsip); 
router.patch("/arsip/terima/:id", terimaArsip); 
router.get("/arsip/status/terima", getArsipbyTerima);
router.get("/arsip/status/pending", getArsipbyPending);
router.get("/arsip", getArsip);
router.get("/arsip/:id", getArsipbyId);
router.delete("/arsip/:id", deleteArsip);

export default router;
