require('./Database');

const mongoose = require('mongoose');
const schema = mongoose.Schema;

//opsi
const str = { type: String };
const num = { type: Number };
const date = { type: Date };
const orang_tua = {
  nama: str,
  alamat: str,
  pekerjaan: str,
};

const detailSiswaField = {
  data_diri: {
    nama_lengkap: str,
    tempat_lahir: str,
    tanggal_lahir: date,
    jenis_kelamin: str,
    agama: str,
    status_dalam_keluarga: str,
    anak_ke: num,
    alamat: str,
    telepon: str,
    orang_tua: {
      ayah: orang_tua,
      ibu: orang_tua,
      wali: orang_tua,
    },
    foto: str,
  },
  sekolah: {
    asal: str,
    diterima: {
      pada_kelas: str,
      pada_tanggal: date,
    },
  },
};

const siswaField = new schema(
  {
    nis: str,
    data_siswa: detailSiswaField,
  },
  { timestamps: true }
);

const Siswa = mongoose.model('siswa', siswaField, 'siswa');

module.exports = Siswa;
