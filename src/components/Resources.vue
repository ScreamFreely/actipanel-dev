<template>
  <div class="org_main">
  <el-row :gutter="24" type="flex" class="row-bg" justify="center">
      <el-col :span="12"> <h1>{{ msg }}</h1></el-col>
  </el-row>
  <el-row :gutter="24" type="flex" class="row-bg" justify="center">
      <el-col :span="20" :offset="2">
      	      <p>Here are list of additional resources for those interested in organizing in their communities:</p>

	<el-collapse @change="handleChange">

	  <el-collapse-item>			  
	    <template slot="title"><h2>Activism</h2></template>
	      <el-col :span="24" :offset="0" v-for="p in progs">
	        <a :href="p.link">{{p.name}}</a> ({{p.type}})
		<p>{{p.desc}}</p>
	      </el-col>
	  </el-collapse-item>

	  <el-collapse-item v-if="coding">			  
	    <template slot="title"><h2>Coding</h2></template>
	      <el-col :span="24" v-for="p in progs">
	        <a :href="p.link">{{p.name}}</a> ({{p.type}})
		<p>{{p.desc}}</p>
	      </el-col>
	  </el-collapse-item>

	  <el-collapse-item v-if="other">			  
	    <template slot="title"><h2>Other</h2></template>
	      <el-col :gutter="18" v-for="p in progs">
	        <a :href="p.link">{{p.name}}</a> ({{p.type}})
		<p>{{p.desc}}</p>
	      </el-col>
	  </el-collapse-item>

	</el-collapse>


      </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Additional Resources:',
      posts: [],
      coding: false,
      other: false,
      isActive: false,
      progs: [
      {
	name: 'PR 101',
	link: 'https://drive.google.com/file/d/1Edw48Wkv2nkmw5K2nYG2VnPYkKgGfOvQ/view?usp=sharing',
	type: 'Google Doc',
	desc: 'An introduction to creating and implementing a press release'
	},
      ]
    }
  },
  methods: {
  	handleChange(val) {
            console.log(val);
	},
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
</style>
