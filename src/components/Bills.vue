<template>
  <div class="bills-div">

  <el-row v-for="o in bills" :gutter="24" type="flex" class="row-bg" justify="center">
      <el-col :span="18" class="bills">
          <h2><a :href="'policy/' + o.id">{{o.identifier}}</a></h2>
	  {{o.from_organization.name}} 
	  <p>{{o.title}}</p>
	  <p><a :href="o.sources[0].url">Link</a></p>


    <el-collapse @change="handleChange">
      <el-collapse-item>
      	<template slot="title"><h3>Actions</h3></template>
    	  <div v-for="a in o.actions" v-if="a.description !== 'passed_lower' && a.description !== 'passed_upper'">
    	     {{a.description}}
    	     {{a.date | moment("MM/D/YYYY")}}	     
    	  </div>
      </el-collapse-item>
    </el-collapse>
</el-col>    
</el-row>    

  <el-row :gutter="24" v-if="next !== null" type="flex" class="row-bg" justify="center">
  {{this.bills.length}}<h1><a v-on:click="getMore(next)"><i class="el-icon-arrow-down"></i></a></h1>{{count}}
  </el-row>


</div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'


export default {
  name: 'Bills',
  data () {
    return {
      msg: 'Bills',
      post_label: 'District',
      next: '',
      count: '',      
    }
  },

  created: function(){
      console.log('created ran');
      this.$store.dispatch('policy/getPolicy')
  },

  computed: mapState({
    // isAuth: state => state.auth.token,
    bills: state => state.policy.policies,
    //next: state => state.policy.next,
    //count: state => state.policy.count,
  }),

  methods: {
    getMore: function(next){
      this.$store.dispatch('events/getNewPolicies', next)
      mapState({bills: state => state.policy.policies })
    },
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
