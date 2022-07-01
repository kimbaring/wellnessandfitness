<template>
<div id="nav_area">
	<div class="nav_toggle_button">
	<div class="logo_wrap"></div>
		<div class="toggle_holder">
			<div class="hamburger hamburger--spin-r">
			  <div class="hamburger-box">
				<div class="hamburger-inner"></div>
			  </div>
			</div>
			<small>Menu</small>
		</div>
	<div class="clearfix"></div>
	</div>

	<div class="toggle_right_nav">
	  <nav class="page_nav">
			<div class="menu_slide_right">
				<a router-link="/" class="logo_slide_right"><figure><img src="images/main-logo.png" alt="Wellness and Fitness"></figure></a>
				<div class="toggle_holder">
					<div class="hamburger hamburger--spin-r">
					  <div class="hamburger-box">
						<div class="hamburger-inner"></div>
					  </div>
					</div>
					<small>Close</small>
				</div>
				<div class="clearfix"></div>
			</div>

			<div class="wrapper">
				<div class="nav-menu"><ul id="menu-main-menu" class="menu"><li id="menu-item-27" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-27"><router-link to="/">Services</router-link><span><i class="fa fa-2x">&nbsp;&nbsp;&nbsp;&nbsp;</i></span></li>
<li id="menu-item-14" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-14"><router-link to="/login">LOGIN</router-link><span><i class="fa fa-2x">&nbsp;&nbsp;&nbsp;&nbsp;</i></span></li>
</ul></div>			</div>
	  </nav>
		<div class="toggle_nav_close"></div>
	</div>
</div>
</template>

<script>
export default({
    name:'NavComp'
})
</script>