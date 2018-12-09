<template>
  <div class="org_main">

    <el-row :gutter="24" type="flex" class="row-bg" justify="center">
      <el-col :span="20" :offset="1">
      <center>
       <h1>{{ msg }}</h1>

       <iframe class="airtable-embed" src="https://airtable.com/embed/shrjb6JoPJKyUUVVC?backgroundColor=green" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

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
	    msg: 'MnActivist Volunteer Attendants',
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

