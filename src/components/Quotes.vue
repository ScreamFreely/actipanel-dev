<template>
  <div class="org_main">

    <el-row :gutter="24" type="flex" class="row-bg" justify="center">
      <el-col :span="24" :offset="0">
      <center>
       <h1>{{ msg }}</h1>

       <p>These will appear between calendar events and be posted to <a href="//twitter.com/mnactivist">Twitter</a>. </p>

       <p>Please provide a link to verify your quote, otherwise it may not be published.</p>

       <p>Thank you!</p>

 <el-form ref="newQuote" :model="newQuote" label-width="20px">
		  <el-form-item label=" ">
		    <el-input placeholder="QuoteFirst Name" v-model="newQuote.quote"></el-input>
		  </el-form-item>

		  <el-form-item label=" ">
		    <el-input placeholder="Author" v-model="newQuote.author"></el-input>
		  </el-form-item>

		  <el-form-item label=" ">
		    <el-input placeholder="Link" v-model="newQuote.link"></el-input>
		  </el-form-item>
		  
		  
		  <el-form-item label=" ">
		  <span>
		  {{ num1 }} + {{ num2 }} = <input placeholder="??" size="5" v-model="newQuote.numnum"></input>
		  </span>
		  </el-form-item>

		  <el-button type='primary' @click="sendQuote(newQuote)">Submit</el-button>
		  
		  </el-form>
		</center>
      </el-col>
    </el-row>

     	

  </div>
</template>



<script>
import axios from 'axios';
export default {
    name: 'Main',
    data () {
	return {
	    msg: 'Submit a Quote',
	    posts: [],
	    isActive: false,
	    amount: '',
	    newQuote: {},
	    num1: Math.floor((Math.random() * 50) + 1),
      	num2: Math.floor((Math.random() * 10) + 1),
      	harold: 0,
	}
    },
    methods: {

    sendQuote: function(data){
			if (this.harold == data.numnum) {
				data.published = false;
				console.log(data);
				axios.post('https://api.mnactivist.org/api/add-quote/', data,)
				.then(response => {
					this.num1 = Math.floor((Math.random() * 50) + 1),
					this.num2 = Math.floor((Math.random() * 10) + 1),
					this.harold = this.num1 + this.num2;
					this.newQuote = {};
					this.$message({
						message: "Success! We got your quote, thank you!",
						type: 'success',
						duration: '5000',
					});
				})
      			.catch(error => {
        		console.log(error);
        		this.$message({
				    message: "Check required fields.",
				    type: 'error',
				    duration: '5000',
				});
    		})
	      } else {

	        this.$message({
			    message: "Invalid answer.",
			    type: 'error',
			    duration: '5000',
			    });
	      	}
    	},
    },

    mounted: function(){       
    },

  created: function(){
      console.log('created ran', this.events);
      this.harold = this.num1 + this.num2;
  },
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

