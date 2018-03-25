<template>
  <div class="hello">
    <el-row :gutter="20" :offset="2">
      <el-col :span="15" :offset="3">
	<h1>{{ person.name }}</h1>

	<el-collapse @change="handleChange">
	  <div v-if="person.memberships.length > 0">
	    <el-collapse-item>			  
	      <template slot="title"><h3>Memberships</h3></template>
	      <div v-for="m in person.memberships">
		<a :href="'/organization/' + m.organization.id">{{m.organization.name}}</a>
	      </div>
	    </el-collapse-item>
	  </div>


	  <div v-if="person.billsponsorship_set.length > 0">
	    <el-collapse-item>			  
	      <template slot="title"><h3>Bill Sponsorships</h3></template>
	      <div v-for="b in person.billsponsorship_set">
		<a :href="'/policy/' + b.id">{{b.identifier}}</a> {{b.title}}
	      </div>
	    </el-collapse-item>
	  </div>
	</el-collapse>

	</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ObjectList',
  data () {
    return {
      msg: 'Person',
      person: {},
    }
  },
  methods: {
    handleChange(val) {
        console.log(val);
    }
  },      
  created: function(){
      console.log('created ran');
//      this.$http.get('http://localhost:8000/api/person/' + this.$route.params.id)
      this.$http.get('https://api.mnactivist.org/api/person/' + this.$route.params.id)      
      .then(function(response){
	this.person = response.data.results[0];	
      });
      
  }
}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
  color: #42b983;	
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
