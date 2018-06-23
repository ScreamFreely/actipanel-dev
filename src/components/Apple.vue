<template>
  <div class="org_main">

    <el-row :gutter="24" type="flex" class="row-bg" justify="center">
      <el-col :span="24" :offset="0">
      <center>
       <h1>{{ msg }}</h1>

       <p>Apple has a somewhat laborious process in order to make applications available to their customers. MnActivist is in the testing stage, and in order to access the app, you'll need to download Apple's <a href="https://itunes.apple.com/us/app/testflight/id899247664?mt=8" target="_blank">Test Flight</a> app. Through this we can send you an invitation to test the app, using the following information.</p>

 <el-form ref="newApple" :model="newApple" label-width="20px">
		  <el-form-item label=" ">
		    <el-input placeholder="First Name" v-model="newApple.first"></el-input>
		  </el-form-item>

		  <el-form-item label=" ">
		    <el-input placeholder="Last Name" v-model="newApple.last"></el-input>
		  </el-form-item>

		  <el-form-item label=" ">
		    <el-input placeholder="Email Address" v-model="newApple.email"></el-input>
		  </el-form-item>
		  
		  
		  <el-form-item label=" ">
		  <span>
		  {{ num1 }} + {{ num2 }} = <input placeholder="??" size="5" v-model="newApple.numnum"></input>
		  </span>
		  </el-form-item>

		  <el-button type='primary' @click="sendApple(newApple)">Submit</el-button>
		  
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
	    msg: 'MnActivist Test Flight',
	    posts: [],
	    isActive: false,
	    amount: '',
	    newApple: {},
	    num1: Math.floor((Math.random() * 50) + 1),
      	num2: Math.floor((Math.random() * 10) + 1),
      	harold: 0,
	}
    },
    methods: {

    sendApple: function(data){
			if (this.harold == data.numnum) {
				data.state = 'mn';
				axios.post('https://api.mnactivist.org/api/add-apple/', data,)
				.then(response => {
					this.num1 = Math.floor((Math.random() * 50) + 1),
					this.num2 = Math.floor((Math.random() * 10) + 1),
					this.harold = this.num1 + this.num2;
					this.newApple = {};
					this.$message({
						message: "Success! We got ya deets, thank you!",
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

