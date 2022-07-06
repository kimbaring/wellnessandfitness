<template>
<header-comp />
<nav-comp />
<banner-comp />
<middle-comp />
<main-comp />
<bottom-comp />
<footer-comp />
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import NavComp from '@/components/NavComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import BannerComp from '@/components/BannerComp.vue';
import MiddleComp from '@/components/MiddleComp.vue';
import MainComp from '@/components/MainComp.vue';
import BottomComp from '@/components/BottomComp.vue';




export default({
  components:{
    HeaderComp,
    NavComp,
    FooterComp,
    BannerComp,
    MiddleComp,
    MainComp,
    BottomComp
  },


  mounted(){
    $('.rslides').responsiveSlides();
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      dots:true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        1000:{
          items:1
        }
      }
    });
  }
})
</script>