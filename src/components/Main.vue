<template>
  <div class="org_main">
    <el-row :gutter="24" type="flex" class="row-bg" justify="center">
      <el-col :span="18":offset="3"> <h1>{{ msg }}</h1></el-col>
    </el-row>
    <el-row :gutter="24" type="flex" class="row-bg" justify="center">
      <el-col :span="20" :offset="2">
      	<p>Hello and welcome to MnActivist.</p>

      	<p>We're super excited to bring this updated beta release!</p>
	<p>Below is some information about the project and how to get involved!</p>

	<el-collapse @change="handleChange">
	  <el-collapse-item>			  
	    <template slot="title"><h2>Support</h2></template>
	    <el-col :span="24" class="row-bg">
	      <h3>Membership</h3>
	      Donating monthly is the most impactful way to help us directly.<br/>
	      <el-col>
		<template slot="title"><h4>Donation Levels</h4></template>
		<div style="padding:20px 25px 0px 0px;">  
		  <el-col class="tn" :xs="8" :sm="8" :md="6" :lg="4" :xl="4" :offset="1" v-for="n in numbers">
		    <el-button  @click.prevent="purchaseStuff(n)" type="primary">${{n}} / month</el-button>
		  </el-col>
		</div>
	      </el-col>

	    </el-col>

	    <el-col :span="24" class="row-bg">
	      <h3>Social Media</h3>
	      Following us on social media is hugely beneficial too.		
	      <div style="padding:20px 25px 0px 0px;">
		<el-col :xs="9" :sm="9" :md="3" :lg="3" :xl="3" :offset="1" v-for="m in media">
		  <a :href="m.url"><h3>{{m.name}}</h3></a>
		</el-col>
	      </div>
	    </el-col>
<br /><br />

	    <el-col :span="24" class="row-bg">
	      <h3>Mailing List</h3>
	      Hopefully soon, memberships won't mean donating monthly, but instead that anyone will be able to get individual accounts to personalize text and email updates.	
	      <div style="padding:20px 25px 0px 0px;">

		<!-- Begin MailChimp Signup Form -->
		<link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">
		<div id="mc_embed_signup">
		  <form action="https://mnactivist.us17.list-manage.com/subscribe/post?u=26ef08dec24fecd6f14eba76f&amp;id=def8e19bf9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
		    <div id="mc_embed_signup_scroll">
		      <label for="mce-EMAIL">Subscribe to MnActivist</label>
		      <input type="email" style="width: 15em" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
		      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
		      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_26ef08dec24fecd6f14eba76f_def8e19bf9" tabindex="-1" value=""></div>
		      <div class="clear"><input type="submit" value="Activate!" name="subscribe" id="mc-embedded-subscribe" class="btn kaushan"></div>
		    </div>
		  </form>
		</div>
		<!--End mc_embed_signup-->
	      </div>
	    </el-col>

	  </el-collapse-item>


	  <el-collapse-item>			  
	    <template slot="title"><h2>Data Policy</h2></template>
	    <div>
	      <p>Users don't want to be tracked, we're already tracked enough.</p>

	      <p>So we're choosing to measure our growth by how many people follow us on social media, how many folks join the mailing list, and how many folks contribute. That's it. We're not logging any IP addresses on any of our domains, there's no Google Analytics, or the like, running in the background either. Nor will we ever sell your data, to anyone. To be honest, that information isn't as important to us as your participation and conversation.</p>

	      <p>We want to build trust founded on respect for your time and intelligence as a user of our platforms; that's another reason we're open source! So we aren't going to send you emails every week updating you with policy. Though we are building a mechanism through which you can read and sign-up for email and text updates on what interests you!</p>

	      <p>We want to build tools that are useful to those who must budget their time, and still want to be civically engaged.</p>
	    </div>
	  </el-collapse-item>

	  <el-collapse-item>			  
	    <template slot="title">
	    <h2>FOSS</h2>
	    </template>
	    <p>Free & Open-source Software is super important, and MnActivist is built upon it. We also kinda hope our enthuisiasm might be able to affect of few others! In this spirit, here are a list of the major open-source technologies we use to build and maintain MnActivist.</p>
	    <el-row v-for="p in progs" class="tn">
	      <el-col :span="5"><img :src="p.image" width="75px"></el-col>
	      <el-col :span="15" :offset="3"><b v-html="p.name"></b> {{p.desc}}</el-col>
	    </el-row>
	  </el-collapse-item>

	  <el-collapse-item>			  
	    <template slot="title"><h2>Contact Us</h2></template>
	    <p><b>MnActivist</b> is being built and maintained by <a href="https://screamfreely.org">ScreamFreely</a>, a non-profit based out of Minneapolis, Minnesota.</p>
	    <p>If you would like to contact us, please email us at <a href="mailto:info@screamfreely.org">info@screamfreely.org</a>.</p>
	  </el-collapse-item>

	</el-collapse>

      </el-col>
    </el-row>

    <el-row v-if="isActive" v-for="p in posts.slice(0, 8)" :gutter="24" type="flex" class="row-bg" justify="center">
      <el-col :span="18">
        <h2><a :href="p.name">{{p.name}}</a></h2>
      </el-col> 
    </el-row>
  </div>
</template>



<script>
export default {
    name: 'Main',
    data () {
	return {
	    msg: 'About MnActivist.Org',
	    posts: [],
	    isActive: false,
	    media: [{name: 'Twitter', url: 'https://twitter.com/mnactivist'}, {name: 'FaceBook', url: 'https://facebook.com/mnactivist'}, {name: 'Instagram', url: 'https://instagram.com/mnactivist'}],
	    progs: [
		{
		    name: '<b>Django</b>',
		    image: 'http://www.unixstickers.com/image/data/stickers/django/django-neg.sh.png',
		    desc: 'is a Python web application framework that we use to serve an API. It is accessible to those just beginning to code, and extensible enough to stump seasoned developers.',
		},
		{
		    name: 'PostgreSQL',
		    image: 'https://d1q6f0aelx0por.cloudfront.net/product-logos/a28dcd12-094d-4248-bfcc-f6fb954c7ab8-postgres.png',
		    desc: 'is our database management system. Well-documented, mature, and extensible.',
		},
		{
		    name: 'Vue.js',
		    image: 'https://vuejs.org/images/logo.png',
		    desc: 'provides our client-side framework. Focusing on minimizing files sizes, and accessible organization, Vue has been a welcome addition to our stack!',
		},
		{
		    name: 'ElementUI',
		    image: 'https://avatars2.githubusercontent.com/u/22293321?s=200&v=4',
		    desc: 'is a component libary for Vue, and responsible for the fluidity of user exprience provided.',
		},
		{
		    name: 'OpenCivicData',
		    image: 'https://i2.wp.com/sunlightf.wpengine.com/wp-content/uploads/2014/11/OpenCivicDatafb-800.png?w=900',
		    desc: 'has provided the scraping framework we use. As well as the data architecture on which we are building.',
		},
		{
		    name: 'Nginx',
		    image: 'https://d1q6f0aelx0por.cloudfront.net/fa443219-42e0-4886-96b4-8733de694b72-c641a5d6-1ebf-44ee-9607-aef9b4ca1a3b-logo_large.png',
		    desc: 'serves it all up',
		},      
	    ],
	    numbers: ['1', '3', '5', '7', '10', '12', '15', '20', '25', '35', '50', '75', '100', '250', '500', '1000'],
	    stripe_token: {},
	    subscription: 0,
	    //            price: 999,
	    //            stripe_instance: {},
	    //            order_status: 'READY'
	}
    },
    methods: {
	handleChange(val) {
            console.log(val);
	},
	purchaseStuff: function(number){
	    this.subscription = number;
            this.stripe_instance.open({
		name: 'MnActivist',
		description: 'Monthly Subscription',
		amount: number * 100,
            })
            console.log('attempting to get a token');
        },
        sendData2Server: function(){
            this.order_status= "PENDING";
            this.$http.post('/process_payment', {token_id: this.stripe_token.id, price: this.subscription, email: this.stripe_token.email })
		.then((response) => {
                    console.log(response.body);
                    this.order_status= "SUCCESSFULLY COMPLETED";
		},(response) => {
                    // error callback
                    console.log(response.body);
                    this.order_status= "FAILED";
		});
        },	
    },

    mounted: function(){
    	let self = this;
	console.log(self);
        this.stripe_instance = StripeCheckout.configure({
            key: 'pk_live_bmTPtIT5SziXC2f12at3TFPs',    //put your own publishable key here
            image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
            locale: 'auto',
            token: function(token) {
		console.log('got a token. sending data to localhost', token);
		self.stripe_token= token;
		self.sendData2Server();
            }
        });
    },

    created: function(){
	console.log('created ran');
	//      this.$http.get('http://localhost:8000/api/orgs')
	//      .then(function(response){
	//	this.posts = response.data;	
	//      });
    }
}

</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.tn {
  margin: 20px;
}
</style>

