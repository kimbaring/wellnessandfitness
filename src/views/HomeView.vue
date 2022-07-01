<template>
 <banner-comp />
<middle-comp />
<main-comp />
<bottom-comp />
</template>

<script>
import BannerComp from '@/components/BannerComp.vue';
import MiddleComp from '@/components/MiddleComp.vue';
import MainComp from '@/components/MainComp.vue';
import BottomComp from '@/components/BottomComp.vue';




export default({
  components:{
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