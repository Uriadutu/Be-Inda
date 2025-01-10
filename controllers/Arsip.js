import path from "path";
import fs from "fs";
import Arsip from "../models/ArsipModel.js";

export const getArsip = async (req, res) => {
  try {
    const response = await Arsip.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Tidak ada data arsip" });
  }
};

export const getArsipbyId = async (req, res) => {
  try {
    const response = await Arsip.findOne({
      where: { id: req.params.id },
    });
    if (!response) return res.status(404).json({ msg: "Data tidak ditemukan" });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: "Gagal mengambil data arsip" });
  }
};

export const getArsipbyTerima = async (req, res) => {
  try {
    const response = await Arsip.findAll({
      where: { status: "Diterima" },
    });
    if (!response) return res.status(404).json({ msg: "Data tidak ditemukan" });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: "Gagal mengambil data arsip" });
  }
};
export const getArsipbyPending = async (req, res) => {
  try {
    const response = await Arsip.findAll({
      where: { status: "pending" },
    });
    if (!response) return res.status(404).json({ msg: "Data tidak ditemukan" });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: "Gagal mengambil data arsip" });
  }
};
export const terimaArsip = async (req, res) => {
  try {
    const arsip = await Arsip.findOne({
      where: { id: req.params.id },
    });
    if (!arsip) return res.status(404).json({ msg: "Data tidak ditemukan" });
    await arsip.update({ status: "Diterima" });
  } catch (error) {
    res.status(500).json({ msg: "Gagal menerima data arsip" });
  }
};


export const createArsip = async (req, res) => {
    const { tanggal } = req.body;
  
    // Validasi file
    if (!req.files || !req.files.file) {
      return res.status(400).json({ msg: "Tidak ada file yang dipilih" });
    }
  
    const file = req.files.file;
    const ext = path.extname(file.name); 
  
    // Gunakan nama file asli
    const originalName = file.name;
  
    // Validasi ekstensi file (opsional, tambahkan jika diperlukan)
    const allowedExtensions = [".pdf", ".xlsx"];
    if (!allowedExtensions.includes(ext.toLowerCase())) {
      return res
        .status(422)
        .json({ msg: `Ekstensi file tidak diperbolehkan: ${ext}` });
    }
  
  
    // URL file yang akan disimpan di database
    const fileUrl = `${req.protocol}://${req.get("host")}/arsip/${originalName}`;
  
    // Pindahkan file ke folder publik
    file.mv(`./public/arsip/${originalName}`, async (err) => {
      if (err) {
        console.error("Error memindahkan file:", err);
        return res.status(500).json({ msg: "Gagal mengunggah file" });
      }
  
      try {
        // Simpan data ke database
        await Arsip.create({
          drilling: originalName,
          tanggal,
          urlDrilling: fileUrl,
          status : "pending"
        });
  
        res.status(201).json({ msg: "Drilling report berhasil ditambahkan" });
      } catch (error) {
        console.error("Error menyimpan data drilling report:", error);
        res.status(500).json({ msg: "Gagal menyimpan data drilling report" });
      }
    });
  };
  

export const deleteArsip = async (req, res) => {
  try {
    const report = await Arsip.findOne({ where: { id: req.params.id } });
    if (!report) return res.status(404).json({ msg: "Data tidak ditemukan" });

    const filePath = `./public/arsip/${report.drilling}`;
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    await Arsip.destroy({ where: { id: req.params.id } });
    res.status(200).json({ msg: "Drilling report berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: "Gagal menghapus drilling report" });
  }
};
