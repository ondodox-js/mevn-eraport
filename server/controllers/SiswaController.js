const Siswa = require('../models/Siswa');

const index = async (req, resp) => {
    const result = await Siswa.find();
    resp.status(200).json({ result });
};

const store = async (req, resp) => {
    const val = req.body;
    const data = {
        nis: val.nis,
        data_siswa: {
            data_diri: {
                nama_lengkap: val.nama_lengkap,
                tempat_lahir: val.tempat_lahir,
                tanggal_lahir: val.tanggal_lahir,
                jenis_kelamin: val.jenis_kelamin,
                agama: val.agama,
                status_dalam_keluarga: val.status_dalam_keluarga,
                anak_ke: val.anak_ke,
                alamat: val.alamat,
                telepon: val.telepon,
                orang_tua: {
                    ayah: {
                        nama: val.nama_ayah,
                        alamat: val.alamat_ayah,
                        pekerjaan: val.perkerjaan_ayah,
                    },
                    ibu: {
                        nama: val.nama_ibu,
                        alamat: val.alamat_ibu,
                        pekerjaan: val.perkerjaan_ibu,
                    },
                    wali: {
                        nama: val.nama_wali,
                        alamat: val.alamat_wali,
                        pekerjaan: val.perkerjaan_wali,
                    },
                },
                foto: val.foto,
            },
            sekolah: {
                asal: val.asal_sekolah,
                diterima: {
                    pada_kelas: val.pada_kelas,
                    pada_tanggal: val.pada_tanggal,
                },
            },
        },
    };
    const result = await Siswa.create(data);
    resp.status(200).json(result);
};
const update = async (req, resp) => {
    const id = req.params.id;
    const result = await Siswa.findById(id);
    resp.json(result);
};
const destroy = async (req, resp) => {
    const id = req.params.id;
    const result = await Siswa.findByIdAndDelete(id);
    resp.json(result);
};

module.exports = { index, store, update, destroy };
