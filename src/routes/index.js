import { createRouter, createWebHistory } from 'vue-router';

//page
import HomePage from '../components/page/Index.vue';
import HPIndex from '../components/contents/home/Index.vue';
import HPContact from '../components/contents/home/Contact.vue';

//siswa-terdaftar
import daftarSiswa from '../components/contents/siswa-terdaftar/Index.vue';
import tambahSiswa from '../components/contents/siswa-terdaftar/Create.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        children: [
            {
                path: '/home',
                name: 'home.index',
                component: HPIndex,
            },
            {
                path: '/contact',
                name: 'home.contact',
                component: HPContact,
            },
            {
                path: '/daftar-siswa',
                name: 'daftar-siswa',
                component: daftarSiswa,
            },
            {
                path: '/daftar-siswa/tambah-siswa',
                name: 'daftar-siswa-tambah',
                component: tambahSiswa,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'active',
});

export default router;
