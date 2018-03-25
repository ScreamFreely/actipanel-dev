<template>
  <div class="bills-div">
  <el-row :gutter="24" type="flex" class="row-bg" justify="left">
      <el-col :span="8" :offset="1"> <h3>{{ bill.identifier }}</h3></el-col>
  </el-row>
  <el-row :gutter="24" type="flex" class="row-bg" justify="center">
      <el-col :span="18" class="bills">
	  {{bill.from_organization.name}} 
	  <p>{{bill.title}}</p>
	  <p><a :href="bill.sources[0].url">Link</a></p>


<el-collapse @change="handleChange">
  <el-collapse-item>
  	<template slot="title"><h3>Actions</h3></template>
	  <div v-for="a in bill.actions" v-if="a.description !== 'passed_lower' && a.description !== 'passed_upper'">
	     {{a.description}}
	     {{a.date | moment("MM/D/YYYY")}}	     
	  </div>
  </el-collapse-item>

  <el-collapse-item>
  	<template slot="title"><h3>Sponsors</h3></template>
	  <div v-for="s in bill.sponsorships" v-if="s !== null">
	     <a :href="'/people/' + s.id">{{s.name}}</a>
	  </div>
  </el-collapse-item>

</el-collapse>


</el-col>    
</el-row>    
  </div>
</template>

<script>
export default {
  name: 'Bills',
  data () {
    return {
      msg: 'Bills',
      post_label: 'District',
      bill: {},
    }
  },
  methods: {
    handleChange(val) {
        console.log(val);
    },
  },
  created: function(){
      console.log('created ran');
      this.$http.get('https://api.mnactivist.org/api/bill/' + this.$route.params.id)      
//      this.$http.get('http://localhost:8000/api/bill/' + this.$route.params.id)
      .then(function(response){
      console.log(response.data);
      this.bill = response.data.results[0];
      });
  },
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
.bills {
  border: 0px #000 solid;
  border-radius: 25px;
  padding: 0px 5px 25px 5px;
  margin: 15px;
}
</style>
