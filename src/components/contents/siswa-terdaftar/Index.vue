<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">
                            Data seluruh siswa terdaftar
                        </h1>
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li class="breadcrumb-item active">Dashboard v1</li>
                        </ol>
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!-- Main row -->
                <div class="row justify-content-end">
                    <div class="col-sm-12 col-md-6">
                        <!-- select -->
                        <div class="form-group">
                            <label>Daftar kelas</label>
                            <select
                                class="form-control"
                                v-model="selectKelas"
                                @change="opsiKelas()"
                            >
                                <option selected :value="false">
                                    Seluruh kelas
                                </option>
                                <option
                                    v-for="(kelas, index) in dataKelas"
                                    :key="index"
                                    :value="kelas"
                                >
                                    {{ `${kelas.nama_kelas}` }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    Data
                                    {{
                                        selectKelas
                                            ? `kelas ${selectKelas.nama_kelas}`
                                            : 'seluruh kelas'
                                    }}
                                </h3>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <div class="form-group row">
                                    <label
                                        for="inputEmail3"
                                        class="col-sm-2 col-form-label"
                                        >Wali kelas</label
                                    >
                                    <label
                                        for="inputEmail3"
                                        class="col-sm-2 col-form-label"
                                        >{{
                                            selectKelas
                                                ? `${selectKelas.wali_kelas}`
                                                : `Semua`
                                        }}</label
                                    >
                                </div>
                                <div class="form-group row">
                                    <label
                                        for="inputEmail3"
                                        class="col-sm-2 col-form-label"
                                        >Jumlah siswa</label
                                    >
                                    <label
                                        for="inputEmail3"
                                        class="col-sm-2 col-form-label"
                                        >{{
                                            selectKelas
                                                ? `${selectKelas.jumlah_siswa}`
                                                : dataKelas.reduce(
                                                      (i, j) =>
                                                          i + j.jumlah_siswa,
                                                      0
                                                  )
                                        }}
                                        Orang</label
                                    >
                                </div>
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th style="width: 10px">#</th>
                                            <th>NIS</th>
                                            <th>Nama siswa</th>
                                            <th
                                                class="text-center"
                                                style="widht: 40px"
                                            >
                                                Detail
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            class="row-kelas"
                                            v-for="(kelas, index) in dataKelas"
                                            :key="index"
                                            v-on:click="detailKelas()"
                                        >
                                            <td>{{ index + 1 }}</td>
                                            <td>{{ kelas.nama_kelas }}</td>
                                            <td class="align-middle">
                                                {{ kelas.jumlah_siswa }} Orang
                                            </td>
                                            <td class="text-center">
                                                {{ kelas.wali_kelas }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.card-body -->
                            <div class="card-footer clearfix">
                                <ul
                                    class="pagination pagination-sm m-0 float-right"
                                >
                                    <li class="page-item">
                                        <a class="page-link" href="#">«</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">1</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">3</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">»</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row (main row) -->
            </div>
            <!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataKelas: [],
            selectKelas: false,
        };
    },
    mounted() {
        const dataKelas = [
            {
                nama_kelas: 'X MIPA 1',
                jumlah_siswa: 32,
                wali_kelas: 'Dion Ferdian Syam',
            },
            {
                nama_kelas: 'X MIPA 2',
                jumlah_siswa: 36,
                wali_kelas: 'Yusniar Fitra Maudi',
            },
            {
                nama_kelas: 'X MIPA 3',
                jumlah_siswa: 34,
                wali_kelas: 'Rafel Dwi Ramadhan',
            },
            {
                nama_kelas: 'X MIPA 4',
                jumlah_siswa: 35,
                wali_kelas: 'Retno Putri Wulandari',
            },
        ];

        this.dataKelas = dataKelas;
    },
    methods: {
        opsiKelas: function () {
            // if (this.selectKelas) {
            //     const slugKelas = this.selectKelas.toLowerCase();
            //     console.log(slugKelas);
            // }
        },
    },
};
</script>

<style>
.row-kelas:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
}
</style>
