<template>
  <div class="org_main">

    <el-row v-for="o in orgs" :gutter="24" type="flex" class="row-bg" justify="center">
      <el-col :span="18" class="baseBorder">
        <h2><a :href="'organization/' + o.id">{{o.name}}</a></h2>
	<span v-if="o.parent !== null">{{o.parent.name}}</span>
	<el-row :span="18"> 
	  <div v-if="o.memberships.length > 0">
	    <el-collapse @change="handleChange">
	      <el-collapse-item v-if="o.memberships[0].person !== null">
		<template slot="title"><h3>Memberships</h3></template>
		<div v-for="m in o.memberships" v-if="m.person !== null">
		  <a :href="'/person/' + m.person.id">{{m.person.name}}</a>
		</div>
	      </el-collapse-item>
	    </el-collapse>
	  </div>

	</el-row>
      </el-col> 
    </el-row>

    <el-row :gutter="24" v-if="next !== null" type="flex" class="row-bg" justify="center">
      {{this.orgs.length}}<h1><a v-on:click="getMore(next)"><i class="el-icon-arrow-down"></i></a></h1>{{count}}
    </el-row>


  </div>
</template>


<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'Organizations',
  data () {
    return {
      msg: 'Organizations',
      next: '',
      count: '',      
    }
  },
  methods: {
  handleChange(val) {
        console.log(val);
    },
  getMore: function(next){
      this.$store.dispatch('events/getNewOrgs', next)
      mapState({events: state => state.orgs.orgs })
    },
  },
  created: function(){
      console.log('created ran');
      this.$store.dispatch('orgs/getOrgs')
  },
  computed: mapState({
    // isAuth: state => state.auth.token,
    orgs: state => state.orgs.orgs,
    //next: state => state.orgs.next,
    //count: state => state.orgs.count,
  }),
}
</script>

<style scoped>
.baseBorder {
    border: 0px #000 solid;
    border-radius: 25px;
    padding: 0px 5px 25px 5px;
    margin: 15px;	
}
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
