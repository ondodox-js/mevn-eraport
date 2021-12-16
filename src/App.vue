<template>
    <sidebar />
    <div class="main-wrapper">
        <!-- main-nav -->
        <Nav />
        <!-- main -->
        <Main />
        <!-- footer -->
        <Footer />
    </div>
</template>
<script>
import Sidebar from './components/layouts/Sidebar.vue';
import Nav from './components/layouts/Nav.vue';
import Main from '../public/Main.vue';
import Footer from './components/layouts/Footer.vue';

export default {
    name: 'App',
    components: {
        Sidebar,
        Nav,
        Main,
        Footer,
    },
};
</script>

<!--<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>-->
