<template>
    <div class="wrapper">
        <SideBar />
        <NavBar />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import SideBar from '../layouts/SideBar.vue';
import NavBar from '../layouts/NavBar.vue';
import Footer from '../layouts/Footer.vue';
export default {
    name: 'IndexPage',
    components: {
        SideBar,
        NavBar,
        Footer,
    },
    mounted() {
        // this.$router.push('/home');
    },
};
</script>
