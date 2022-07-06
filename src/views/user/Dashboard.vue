<template>
<h2>Upcoming Live Sessions</h2>
<div class="thumb_carousel owl-carousel">
    <section v-for="(s,i) in liveSessions.list" :key="i">
        <div class="thumb_holders">
        </div>
        <h2>{{ s.title }}</h2>
        <p>{{ s.desc }}</p>
        <small>1:00pm - 2:00pm</small>
    </section>
</div>
<h2>Continue with your Classes</h2>
<div class="thumb_carousel owl-carousel">
    <section v-for="(s,i) in liveSessions.list" :key="i">
        <div class="thumb_holders">
        </div>
        <h2>{{ s.title }}</h2>
        <p>{{ s.desc }}</p>
    </section>
</div>
</template>

<script>
export default({
    data(){
        return{
            liveSessions:{
                hasSessions: true,
                list:[
                    {title: "Live Session A", desc: "We are using these temporary contents on the website.", time:"1:00pm - 2:00pm", thumb_img:""},
                    {title: "Live Session B", desc: "We are using these temporary contents on the website.", time:"1:00pm - 2:00pm", thumb_img:""},
                    {title: "Live Session C", desc: "We are using these temporary contents on the website.", time:"1:00pm - 2:00pm", thumb_img:""},
                    {title: "Live Session D", desc: "We are using these temporary contents on the website.", time:"1:00pm - 2:00pm", thumb_img:""}

                ]
            }
        }
    },
    mounted(){
		$('.thumb_carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:false,
			dots:true,
            autoplay:true,
			responsive:{
				0:{
				items:1
				},
				600:{
				items:1
				},
                800:{
				items:2
				},
				1000:{
				items:4
				}
			}
		});
	}
})
</script>

<style scoped>
main > h2{font-family: Karma;font-size: 30px;line-height: 60px;margin-bottom: 20px;font-weight: 600;}
main > h2:not(:first-child){margin-top: 70px;}
.owl-carousel .owl-item{margin: 0 20px;}
.thumb_carousel section{padding: 0 20px;background: #fff;}
.thumb_carousel section:hover{box-shadow: 0 0 10px #aaa;}
.thumb_carousel section h2{font-family: Karma;font-size: 20px;line-height: 40px;font-weight: 600;}
.thumb_carousel section small{font-style: italic;font-size: 14px;color:#ffffff;background: #7bb0a7;padding: 0px 10px;display: inline-block;border-radius: 25px;margin-top:10px;}
.thumb_holders{height: 240px;background: #ccc;margin-bottom: 10px;}
.owl-carousel .owl-dots.disabled, .owl-carousel .owl-nav.disabled{display: block !important;}
</style>
