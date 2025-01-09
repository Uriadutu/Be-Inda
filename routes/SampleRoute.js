import express from "express";
import {
  createSample,
  getAllSamples,
  getSampleById,
  updateSample,
  deleteSample,
  getSampleByHole,
  terimaSample,
  getSampleByPanding,
  getSampleByTerima,
} from "../controllers/Sample.js";

const router = express.Router();

router.post("/samples", createSample); // Create
router.get("/samples", getAllSamples); // Read all
router.get("/samples/status/pending", getSampleByPanding); // Read all
router.get("/samples/status/terima/:id", getSampleByTerima); // Read all
router.get("/samples/:id", getSampleById); // Read by ID
router.get("/samples/hole/:id", getSampleByHole); // Read by ID
router.patch("/samples/:id", updateSample); // Update
router.patch("/terima-samples/:id", terimaSample); // Update
router.delete("/samples/:id", deleteSample); // Delete

export default router;
