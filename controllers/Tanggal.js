import Tanggal from "../models/TanggalModel.js";

// Create a new ShiftLog
export const createShiftLog = async (req, res) => {
    try {
        const shiftLog = await Tanggal.create(req.body);
        res.status(201).json(shiftLog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all ShiftLogs
export const getAllShiftLogs = async (req, res) => {
    try {
        const shiftLogs = await Tanggal.findAll();
        res.status(200).json(shiftLogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a ShiftLog by ID
export const getShiftLogById = async (req, res) => {
    try {
        const shiftLog = await Tanggal.findOne({
            where: { id: req.params.id },
        });
        if (!shiftLog) return res.status(404).json({ message: "Shift Log not found" });
        res.status(200).json(shiftLog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getShiftLogByShift = async (req, res) => {
    try {
        const shiftLog = await Tanggal.findAll({
            where: { shift: req.params.shift },
        });
        if (!shiftLog) return res.status(404).json({ message: "Shift Log not found" });
        res.status(200).json(shiftLog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a ShiftLog
export const updateShiftLog = async (req, res) => {
    try {
        const shiftLog = await Tanggal.update(req.body, {
            where: { id: req.params.id },
        });
        if (shiftLog[0] === 0) return res.status(404).json({ message: "Shift Log not found" });
        res.status(200).json({ message: "Shift Log updated successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a ShiftLog
export const deleteShiftLog = async (req, res) => {
    try {
        const shiftLog = await Tanggal.destroy({
            where: { id: req.params.id },
        });
        if (!shiftLog) return res.status(404).json({ message: "Shift Log not found" });
        res.status(200).json({ message: "Shift Log deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
