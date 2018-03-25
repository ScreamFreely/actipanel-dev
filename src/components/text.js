export default {
    name: 'Main',
    data () {
	return {
	    msg: 'About MnActivist.Org',
	    posts: [],
	    isActive: false,
	    progs: [
		{
		    name: 'Django',
		    image: 'http://www.unixstickers.com/image/data/stickers/django/django-neg.sh.png'
		},
		{
		    name: 'PostgreSQL',
		    image: 'https://d1q6f0aelx0por.cloudfront.net/product-logos/a28dcd12-094d-4248-bfcc-f6fb954c7ab8-postgres.png'
		},
		{
		    name: 'Vue.js',
		    image: 'https://vuejs.org/images/logo.png'
		},
		{
		    name: 'ElementUI',
		    image: 'https://avatars2.githubusercontent.com/u/22293321?s=200&v=4'
		},
		{
		    name: 'OpenCivicData',
		    image: 'https://i2.wp.com/sunlightf.wpengine.com/wp-content/uploads/2014/11/OpenCivicDatafb-800.png?w=900'
		},
		{
		    name: 'Nginx',
		    image: 'https://d1q6f0aelx0por.cloudfront.net/fa443219-42e0-4886-96b4-8733de694b72-c641a5d6-1ebf-44ee-9607-aef9b4ca1a3b-logo_large.png'
		},      
	    ],
	    numbers: ['1', '3', '5', '7', '10', '12', '15', '20', '25', '35', '50', '75', '100'],
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
            key: 'pk_test_dmRStJTZR2tCTU5h1srOOr0a',    //put your own publishable key here
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

