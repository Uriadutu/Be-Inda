import Sample from "../models/SampleModels.js";

// Create
export const createSample = async (req, res) => {
  try {
    const newSample = await Sample.create(req.body);
    res.status(201).json({ message: "Sample created successfully", newSample });
  } catch (error) {
    res.status(500).json({ message: "Error creating sample", error });
  }
};

// Read all
export const getAllSamples = async (req, res) => {
  try {
    const samples = await Sample.findAll();
    res.status(200).json(samples);
  } catch (error) {
    res.status(500).json({ message: "Error fetching samples", error });
  }
};

// Read by ID
export const getSampleById = async (req, res) => {
  try {
    const { id } = req.params;
    const sample = await Sample.findByPk(id);
    if (!sample) {
      return res.status(404).json({ message: "Sample not found" });
    }
    res.status(200).json(sample);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sample", error });
  }
};
export const getSampleByPanding = async (req, res) => {
  try {
    const sample = await Sample.findAll({
      where : {
        status : "pending"
      }
    });
    if (!sample) {
      return res.status(404).json({ message: "Sample not found" });
    }
    res.status(200).json(sample);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sample", error });
  }
};
export const getSampleByTerima = async (req, res) => {
  try {
    const sample = await Sample.findAll({
      where : {
        status : "Diterima",
        holeId : req.params.id

      }
    });
    if (!sample) {
      return res.status(404).json({ message: "Sample not found" });
    }
    res.status(200).json(sample);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sample", error });
  }
};
export const getSampleByHole = async (req, res) => {
  try {
    const sample = await Sample.findAll({
        where : {
            holeId : req.params.id
        }
    });
    if (!sample) {
      return res.status(404).json({ message: "Sample not found" });
    }
    res.status(200).json(sample);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sample", error });
  }
};

// Update
export const updateSample = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSample = await Sample.update(req.body, { where: { id } });
    if (!updatedSample[0]) {
      return res.status(404).json({ message: "Sample not found" });
    }
    res.status(200).json({ message: "Sample updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating sample", error });
  }
};
export const terimaSample = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSample = await Sample.update({ status: "Diterima" }, { where: { id } });
    if (!updatedSample[0]) {
      return res.status(404).json({ message: "Sample not found" });
    }
    res.status(200).json({ message: "Sample updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating sample", error });
  }
};

// Delete
export const deleteSample = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSample = await Sample.destroy({ where: { id } });
    if (!deletedSample) {
      return res.status(404).json({ message: "Sample not found" });
    }
    res.status(200).json({ message: "Sample deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting sample", error });
  }
};
