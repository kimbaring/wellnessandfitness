<template>
<!-- Banner -->
<div id="banner">
	<div class="wrapper">
		<div class="bnr_con animatedParent animateOnce">
            <div v-if="this.$route.name == 'Home'">
				<div class="slider">
					<ul class="rslides">
						<li><figure><img src="../assets/images/slider/3.jpg" class="fade" alt="doing exercise" /></figure></li>
						<li><figure><img src="../assets/images/slider/1.jpg" class="random" alt="doing exercise"/></figure></li>
						<li><figure><img src="../assets/images/slider/2.jpg" class="random" alt="doing exercise"/></figure></li>
					</ul>
				</div>

				<div class="bnr_info animated slideInLeft">
                    <div class="textwidget"><h2>This Reserves a Place for Your Slogan</h2>
                    <p>Dummy text for the reader to review. Words shown on this layout are placeholders. This space is reserved for more details about the company.</p>
                    <p><a href="#">Start Your Fitness Now</a></p>
                    </div>
				</div>
			</div>
            <div v-else>
				<div class="non_ban">
                    <div class="non_ban_img">
                        <figure><img src="../assets/images/slider/nh-banner.jpg" alt="caregiver and senior woman looking at the book" /></figure>
                    </div>

                    <div class="page_title">
                            <h1 class="h1_title">Blog</h1>
                    </div>
				</div>
            </div>
		</div>
	</div>
</div>
<!-- End Banner -->
</template>

<script>
export default({
    name: 'BannerComp'
})

</script>

<style>
</style>