
<template>
  <header-comp />
  <nav-comp />
  <RouterView />
  <footer-comp />
</template>

<script>
import calcHeight from '@/assets/js/calcheight.min.js'
import $ from '@/assets/js/jquery-2.1.1.min.js';
import '@/assets/js/jquery.easing.1.3.js';
import '@/assets/js/plugins.min.js';
import '@/assets/js/owl.carousel.min.js';
import '@/assets/js/jquery.skitter.min.js';
import '@/assets/js/responsiveslides.min.js';


import { RouterLink, RouterView } from 'vue-router';
import HeaderComp from '@/components/HeaderComp.vue';
import NavComp from '@/components/NavComp.vue';
import FooterComp from '@/components/FooterComp.vue';



export default({
  components:{
    HeaderComp,
    NavComp,
    FooterComp,
    RouterLink,
    RouterView
  }
});
</script>

<style>
@import '@/assets/css/style.css';
@import '@/assets/css/media.css';
@import "@/assets/css/owl.carousel.min.css";
@import "@/assets/css/owl.carousel.min.css";
@import "@/assets/css/owl.theme.default.min.css";
@import '@/assets/css/skitter.styles.min.css';
@import '@/assets/css/rslides.min.css';
@import '@/assets/css/hamburgers.min.css';
</style>
