<template>
<header-comp />
<nav-comp />
<div id="main_area">
    <div class="wrapper">
        <div class="main_con">
            <main>
<router-view></router-view>
</main></div></div></div>
<footer-comp />
</template>

<script>
import { RouterView } from 'vue-router';
import HeaderComp from '@/components/HeaderComp.vue';
import NavComp from '@/components/NavComp.vue';
import FooterComp from '@/components/FooterComp.vue';


export default({
  components:{
   RouterView,
   HeaderComp,
       NavComp,
   FooterComp
  },


  mounted(){
  }
})
</script>