import Laporan from "../models/LaporanModel.js";

// Create a new Laporan
export const createLaporan = async (req, res) => {
    try {
        const laporan = await Laporan.create(req.body);
        res.status(201).json(laporan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Laporan
export const getAllLaporan = async (req, res) => {
    try {
        const laporan = await Laporan.findAll();
        res.status(200).json(laporan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a Laporan by ID
export const getLaporanById = async (req, res) => {
    try {
        const laporan = await Laporan.findOne({
            where: { id: req.params.id },
        });
        if (!laporan) return res.status(404).json({ message: "Laporan not found" });
        res.status(200).json(laporan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a Laporan
export const updateLaporan = async (req, res) => {
    try {
        const laporan = await Laporan.update(req.body, {
            where: { id: req.params.id },
        });
        if (laporan[0] === 0) return res.status(404).json({ message: "Laporan not found" });
        res.status(200).json({ message: "Laporan updated successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a Laporan
export const deleteLaporan = async (req, res) => {
    try {
        const laporan = await Laporan.destroy({
            where: { id: req.params.id },
        });
        if (!laporan) return res.status(404).json({ message: "Laporan not found" });
        res.status(200).json({ message: "Laporan deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
