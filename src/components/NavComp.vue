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
				<div class="nav-menu">
					<ul id="menu-main-menu" class="menu">
						<li :id="tab.id" :class="tab.class" v-for="(tab,i) in activeTabs" :key="i"><router-link :to="tab.link">{{tab.label}}</router-link><span><i class="fa fa-2x"></i></span></li>
					</ul>
				</div>
			</div>
	  </nav>
		<div class="toggle_nav_close"></div>
	</div>
</div>
</template>

<script>
export default({
    name:'NavComp',
	data(){
		return{
			allTabs:[
				{ id:"", class:"", link:"/", label: "Services"},
				{ id:"", class:"", link:"/login", label: "LOGIN"},
			],
			activeTabs:[
				{ id:"", class:"", link:"/", label: "Services"},
				{ id:"", class:"", link:"/login", label: "LOGIN"},
			]
		};
	}
})
</script>