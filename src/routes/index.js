import { createRouter, createWebHistory } from 'vue-router';

//page
import HomePage from '../components/page/Index.vue';
import HPIndex from '../components/contents/home/Index.vue';
import HPContact from '../components/contents/home/Contact.vue';

//siswa-terdaftar
import daftarSiswa from '../components/contents/siswa-terdaftar/Index.vue';

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
                path: '/daftar-siswa/:slug',
                name: 'daftar-siswa-slug',
                component: daftarSiswa,
            },
            {
                path: '/daftar-siswa',
                name: 'daftar-siswa',
                component: daftarSiswa,
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
