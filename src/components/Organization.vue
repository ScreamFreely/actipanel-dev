<template>
  <div class="org_main">
    <el-row :gutter="24" type="flex" class="row-bg" justify="center">
      <el-col :span="12"> <h1>{{ org.name }} </h1></el-col>
      <el-col :span="2" v-if="org.extras.followable == true"><a href="#" v-on:click="follow = !follow">0</a></el-col>
    </el-row>

    <el-row v-if="follow == true" :gutter="24" type="flex" class="row-bg" justify="center">

      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="Timeline">
          <el-checkbox v-model="checked"/>
        </el-form-item>
        <el-form-item label="Email">
          <el-checkbox v-model="checked"/>
        </el-form-item>
        <el-form-item label="Text">
          <el-checkbox v-model="checked"/>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
      </el-form>

    </el-row>


    <el-row v-if="org.memberships.length > 0" :gutter="24" type="flex" class="row-bg" justify="left">
	<el-col :span="15" :offset="4">
      	   <el-collapse @change="handleChange">
	    <el-collapse-item>			  
	      <template slot="title"><h3>Members</h3></template>
	      <div v-for="m in org.memberships" v-if="m.post == null">
		<a :href="'/person/' + m.person.id">{{m.person.name}}</a>
	      </div>
	    </el-collapse-item>
	  </el-collapse>
	</el-col>
    </el-row>

    <el-row v-if="org.bills.length > 0" :gutter="24" type="flex" class="row-bg" justify="left">
	<el-col :span="15" :offset="4">
      	   <el-collapse @change="handleChange">
	    <el-collapse-item>			  
	      <template slot="title"><h3>Bills</h3></template>
	      <div v-for="b in org.bills">
		<a :href="'/bill/' + b.id">{{b.identifier}}</a> - {{b.title}}
	      </div>
	    </el-collapse-item>
	  </el-collapse>
	</el-col>
    </el-row>


  </div>
</template>

<script>
export default {
  name: 'Organization',
  data () {
    return {
      msg: 'Organization List',
      org: {},
      follow: 'False',
    }
  },
  methods: {
    handleChange(val) {
        console.log(val);
    },
    onSubmit() {
        this.follow = 'False';
        console.log('val');
    }
  },      
  created: function(){
      console.log('created ran');
      this.$http.get('https://api.mnactivist.org/api/organization/' + this.$route.params.id)      
//      this.$http.get('http://localhost:8000/api/organization/' + this.$route.params.id)
      .then(function(response){
	this.org = response.data.results[0];	
      });
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
