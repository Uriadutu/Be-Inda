import Sumary from "../models/SumaryModels.js";


// CREATE: Menambahkan data baru ke tabel Sumary
export const createSumary = async (req, res) => {
  try {
    const newSumary = await Sumary.create(req.body);
    res.status(201).json({
      message: "Data berhasil ditambahkan.",
      data: newSumary,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menambahkan data.",
      error: error.message,
    });
  }
};

// READ: Mendapatkan semua data dari tabel Sumary
export const getAllSumary = async (req, res) => {
  try {
    const sumary = await Sumary.findAll();
    res.status(200).json(sumary);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data.",
      error: error.message,
    });
  }
};
export const getAllSumarybyTgl = async (req, res) => {
  try {
    const sumary = await Sumary.findAll({
      where : {
        by_tgl : req.params.tgl
      }
    });
    res.status(200).json(sumary);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data.",
      error: error.message,
    });
  }
};

// READ: Mendapatkan data Sumary berdasarkan ID
export const getSumaryById = async (req, res) => {
  try {
    const sumary = await Sumary.findOne({
      where: { id: req.params.id },
    });
    if (sumary) {
      res.status(200).json(sumary);
    } else {
      res.status(404).json({ message: "Data tidak ditemukan." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data.",
      error: error.message,
    });
  }
};

// UPDATE: Memperbarui data Sumary berdasarkan ID
export const updateSumary = async (req, res) => {
  try {
    const updatedRows = await Sumary.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedRows[0] > 0) {
      res.status(200).json({ message: "Data berhasil diperbarui." });
    } else {
      res.status(404).json({ message: "Data tidak ditemukan." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Gagal memperbarui data.",
      error: error.message,
    });
  }
};

// DELETE: Menghapus data Sumary berdasarkan ID
export const deleteSumary = async (req, res) => {
  try {
    const deletedRows = await Sumary.destroy({
      where: { id: req.params.id },
    });
    if (deletedRows > 0) {
      res.status(200).json({ message: "Data berhasil dihapus." });
    } else {
      res.status(404).json({ message: "Data tidak ditemukan." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Gagal menghapus data.",
      error: error.message,
    });
  }
};
