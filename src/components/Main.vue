<template>
  <div class="org_main">
    <el-row :gutter="24" type="flex" class="row-bg" justify="center">
      <el-col :span="18":offset="3"></el-col>
    </el-row>

    <el-row :gutter="24" type="flex" class="row-bg" justify="center">
      <el-col :span="20" :offset="2">
      <center>
       <h1>{{ msg }}</h1>

	<p>We are an organization with a website, and a <a href="http://bit.ly/MnActivist_for_Android">phone app</a>, aiming to be a one-stop apolitical shop for political information in Minnesota, starting with event listings. Follow our <a href="https://facebook.com/mnactivist">FB</a> and <a href="https://twitter.com/mnactivist">Twitter</a> for daily pictures of upcoming events! But we're just starting out, we've got an idea and proof of concept, and we'd love you're support! Either through a follow or a donation to help increase public access to our government.</p>

	<p>We are also looking to teach and train new coders to expand and maintain our database. Using an organizational structure anchored by co-directors of differing racial and gender identies, we seek to maintain an open organizational culture that allows individuals space for the their experiences. We feel that this is a sector ripe to provide such opportunities to both grow our communities and our work-force.</p>

	</center>
	<el-collapse @change="handleChange">
	  <el-collapse-item>			  
	    <template slot="title"><h2>Support</h2></template>
	    <el-col :span="24" class="row-bg">
	      Donating monthly is the most impactful way to help us directly. While MnActivist will always be free to everyone, you will become the first to know about, and test, new features (individual accounts) as they are made available. Additionally you are able to track how your contribution is used to bring greater access to all in our community, and greater stability to members of our community. <br/>
	      <el-col>
		<template slot="title"><h4>Donation Levels</h4></template>
		<div style="padding:20px 25px 0px 0px;">  
		  <el-col class="tn" :xs="8" :sm="8" :md="6" :lg="4" :xl="4" :offset="1" v-for="n in numbers">
		    <el-button  @click.prevent="purchaseStuff(n)" type="primary">${{n}} / month</el-button>
		  </el-col>
		</div>
	      </el-col>

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
	    msg: 'Welcome to MnActivist.Org',
	    posts: [],
	    isActive: false,
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

