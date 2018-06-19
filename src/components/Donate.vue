<template>
  <div class="org_main">

    <el-row :gutter="24" type="flex" class="row-bg" justify="center">
      <el-col :span="20" :offset="2">
      <center>
       <h1>{{ msg }}</h1>

	<p>Donating monthly is the most impactful way to help us directly. While MnActivist will always be free to everyone, you will become the first to know about, and test, new features when they are made available.</p>

	<p>The email address associated with your contribution is the only piece of data we will retain. While we use <a href="//stripe.com" target="_blank">Stripe</a> to process to your contribution. You will receive one email to confirm you subscription, and one other to let you know when individual accounts are available.</p>

	<p>Thank you,</p>

  	<el-form :inline="true" ref="newDonation" :model="newDonation" label-width="20px">
	
	<el-form-item label=" " required>
	  <el-select v-model="amount" placeholder="Monthly Support">
	      <el-option
	      v-for="n in numbers"
	      :key="n"
	      :label="n"
	      :value="n">
	      </el-option>
	  </el-select>
	</el-form-item>

	<el-button  @click.prevent="purchaseStuff(amount)" type="primary">${{amount}} / month</el-button>
	
	</el-form>
	<br/>
	<iframe class="airtable-embed" src="https://airtable.com/embed/shr5KmvdL1Bndz1bj?backgroundColor=green&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

	<p><b>MnActivist</b> is being built and maintained by <a href="https://screamfreely.org">ScreamFreely</a>, a non-profit based out of Minneapolis, Minnesota.</p>
	<p>If you would like to contact us, please email us at <a href="mailto:info@screamfreely.org">info@screamfreely.org</a>.</p>
	</center>
	</el-col>
</el-row>

      </el-col>
    </el-row>

     	

  </div>
</template>



<script>
export default {
    name: 'Main',
    data () {
	return {
	    msg: 'Supporting MnActivist',
	    posts: [],
	    isActive: false,
	    amount: '',
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
		if (number == ''){return}
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
  color: #2F835D;	    
}
a {
  color: #2F835D;	  
}
.tn {
  margin: 20px;
}
</style>

