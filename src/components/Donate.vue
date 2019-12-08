<template>
  <div class="org_main">

    <el-row :gutter="10" type="flex" class="row-bg" justify="center">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 22, offset: 1}" :md="{span: 22, offset: 1}" :lg="{span: 16, offset: 1}" :xl="{span: 16, offset: 1}">
       <h1>{{ msg }}</h1>

       <p>Donating monthly is the most impactful way to help us directly. While {{aState}} will always be free to everyone, you will become the first to know about, and test, new features when they are made available.</p>
      </el-col>
    </el-row>


    <el-row :span="24" class="row-bg">
     <el-col :xs="{span: 24, offset: 0}" :sm="{span: 24, offset: 0}" :md="{span: 12, offset: 0}" :lg="{span: 12, offset: 0}" :xl="{span: 12, offset: 0}" align="center"> 
        <span class="donor-box" style="float: center;" v-html="donorBox" /> 
      </el-col>
      <el-col :xs="{span: 24, offset: 0}" :sm="{span: 24, offset: 0}" :md="{span: 12, offset: 0}" :lg="{span: 12, offset: 0}" :xl="{span: 12, offset: 0}" align="center"> 
       <span class="" style="float: center; max-width: 500px;" v-html="donorRecord" /> 
      </el-col>
    </el-row>



    <el-row :gutter="10" type="flex" class="row-bg" justify="center">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 22, offset: 1}" :md="{span: 22, offset: 1}" :lg="{span: 16, offset: 1}" :xl="{span: 16, offset: 1}">
       <p><b>{{aState}}</b> is being built and maintained by <a href="https://screamfreely.org">ScreamFreely</a>, a non-profit based out of Minneapolis, Minnesota.</p>
       <p>If you would like to contact us, please email us at <a href="mailto:info@screamfreely.org">info@screamfreely.org</a>.</p>
      </el-col>
    </el-row>
     	

  </div>
</template>



<script>
import api from '../store/api'

export default {
    name: 'Main',
    data () {
	return {
	    msg: 'Supporting ' + api.name,
	    aState: api.name,
      donorBox: api.donorBox,
      donorRecord: api.donorRecord,
	    posts: [],
	    isActive: false,
	}
    },
    methods: {
		handleChange(val) {
	            console.log(val);
		},
    },

    mounted: function(){
    	let self = this;
		console.log(self);
    },

    created: function(){
	console.log('created ran');
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

