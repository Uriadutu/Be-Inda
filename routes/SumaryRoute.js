import express from "express";
import {
  createSumary,
  getAllSumary,
  getSumaryById,
  updateSumary,
  deleteSumary,
  getAllSumarybyTgl,
} from "../controllers/Sumary.js"

const router = express.Router();

router.post("/sumary", createSumary); // CREATE
router.get("/sumary", getAllSumary); // READ ALL
router.get("/sumary/tgl/:tgl", getAllSumarybyTgl); // READ ALL
router.get("/sumary/:id", getSumaryById); // READ BY ID
router.patch("/sumary/:id", updateSumary); // UPDATE
router.delete("/sumary/:id", deleteSumary); // DELETE

export default router;
