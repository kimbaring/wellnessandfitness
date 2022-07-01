<template>
<div id="main_area">
    <div class="wrapper">
        <div class="main_con">
            <main>
                <h1 id="h1_title" class="h1_title">Wellness and Fitness</h1>
                <p>We are using these temporary contents on the website.  These dummy texts are for display purposes only to show the volume of content that will be placed on this particular page. We have reserved this space to display more information about the company. In the near future
                </p>
            </main>
            <figure class="main_img"><img src="../assets/images/main-img.jpg" alt="people doing yoga"></figure>
        </div>
        
    </div>
</div>
</template>

<script>
export default({
    name: 'MainArea'
});
</script>

<style scoped>
.main_con{padding: 130px 0 40px;}
main{padding: 186px 0 70px 64px;width: calc(100% - 794px);background: transparent;}
main::before{content:"";position:absolute;background-color: #effffc;width: 100%;height:100%;z-index: -1;top:0;left:0;width: 100vw;max-width: 1400px;}

.main_img{position: absolute;right:0;z-index: 2;top:0}
.main_img::after{content:url(images/main-after.png);position: absolute;right: -177px;bottom: -116px;z-index: -1;}

@media only screen
and (max-width : 1400px) {
	main{width: calc(100% - 675px);padding: 120px 0 70px 64px;min-height: 580px;}
	.main_img{width: 550px;}
}

@media only screen
and (max-width : 1300px) {
	.main_con{padding: 105px 0 40px;}
    main{width: calc(100% - 485px);min-height: 460px;padding: 70px 0 70px 64px;}
	.main_img::after{bottom: -83px;}
	.main_img{width: 450px;}
}

@media only screen
and (max-width : 1010px) {
  .main_con{padding: 0;}
  main{width: 100%;padding: 70px 25px;min-height: auto;box-sizing: border-box;}
  main #h1_title{font-size: 45px;margin-bottom: 20px}
  .main_img{display:none;}
}
</style>
