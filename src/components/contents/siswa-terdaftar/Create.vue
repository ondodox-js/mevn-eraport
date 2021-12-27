<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Tambah siswa</h1>
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
                <div class="row">
                    <div class="col-md-6">
                        <div class="card card-info">
                            <div class="card-header">
                                <h3 class="card-title">Data diri</h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- form start -->
                            <form class="form-horizontal">
                                <div class="card-body">
                                    <div class="form-group row">
                                        <label
                                            for="nis"
                                            class="col-sm-3 col-form-label"
                                            >NIS</label
                                        >
                                        <div class="col-sm-9">
                                            <input
                                                id="nis"
                                                type="email"
                                                class="form-control"
                                                placeholder="Nomor induk siswa.."
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label
                                            for="nama-lengkap"
                                            class="col-sm-3 col-form-label"
                                            >Nama lengkap</label
                                        >
                                        <div class="col-sm-9">
                                            <input
                                                id="nama-lengkap"
                                                type="email"
                                                class="form-control"
                                                placeholder="Nama lengkap.."
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label
                                            for="ttl"
                                            class="col-sm-3 col-form-label"
                                            >Ttl</label
                                        >
                                        <div class="col-sm-9">
                                            <div class="row">
                                                <div class="col-7">
                                                    <input
                                                        id="ttl"
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Tempat lahir.."
                                                    />
                                                </div>
                                                <div class="col-5">
                                                    <input
                                                        type="date"
                                                        class="form-control"
                                                        placeholder=".col-5"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label
                                            for="ttl"
                                            class="col-sm-3 col-form-label"
                                            >Agama</label
                                        >
                                        <div class="col-sm-9">
                                            <div class="row">
                                                <div class="col-5">
                                                    <select
                                                        class="custom-select"
                                                    >
                                                        <option>
                                                            option 1
                                                        </option>
                                                    </select>
                                                </div>
                                                <div
                                                    class="col-7 d-flex align-items-center justify-content-around"
                                                >
                                                    <div
                                                        class="custom-control custom-radio"
                                                    >
                                                        <input
                                                            class="custom-control-input"
                                                            type="radio"
                                                            id="pria"
                                                            name="jenisKelamin"
                                                        />
                                                        <label
                                                            for="pria"
                                                            class="custom-control-label"
                                                            >Pria</label
                                                        >
                                                    </div>
                                                    <div
                                                        class="custom-control custom-radio"
                                                    >
                                                        <input
                                                            class="custom-control-input"
                                                            type="radio"
                                                            id="wanita"
                                                            name="jenisKelamin"
                                                        />
                                                        <label
                                                            for="wanita"
                                                            class="custom-control-label"
                                                            >Wanita</label
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label
                                            for="anak-ke"
                                            class="col-sm-3 col-form-label"
                                            >Anak ke -</label
                                        >
                                        <div class="col-sm-9">
                                            <div class="row gap-4">
                                                <div class="col-3">
                                                    <input
                                                        id="anak-ke"
                                                        type="number"
                                                        class="form-control"
                                                        placeholder="ke"
                                                    />
                                                </div>
                                                <div
                                                    class="col-9 d-flex justify-content-between"
                                                >
                                                    <label
                                                        for="status"
                                                        class="col-6 text-center col-form-label"
                                                        >Status</label
                                                    >
                                                    <select
                                                        class="col-6 custom-select"
                                                        id="status"
                                                    >
                                                        <option>
                                                            option 1
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-3 col-form-label"
                                            >Alamat</label
                                        >
                                        <div class="col-sm-12 col-md-9">
                                            <div class="form-group">
                                                <textarea
                                                    class="form-control"
                                                    rows="3"
                                                    placeholder="Enter ..."
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /.card-body -->
                                <div class="card-footer">
                                    <button type="submit" class="btn btn-info">
                                        Sign in
                                    </button>
                                    <button
                                        type="submit"
                                        class="btn btn-default float-right"
                                    >
                                        Cancel
                                    </button>
                                </div>
                                <!-- /.card-footer -->
                            </form>
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
export default {};
</script>

<style></style>
