<template>
  <div class="People">
    <el-row v-for="p in people" :gutter="24" type="flex" class="row-bg" justify="center">

      <el-col :span="18" class="cpeople">
	<h2><a :href="'people/' + p.id">{{p.name}}</a></h2>
	<el-row :span="18"> 
	  <div v-for="m in p.memberships" v-if="m.post !== null">
	    {{m.post.role}} from District {{m.post.label}}
	  </div>
	</el-row>
	<div v-if="p.memberships.length > 1">	  
	  <el-collapse @change="handleChange">
	    <el-collapse-item>			  
	      <template slot="title"><h3>Memberships</h3></template>
	      <div v-for="m in p.memberships" v-if="m.post == null">
		<a :href="'organization/' + m.organization.id">{{m.organization.name}}</a>
	      </div>
	    </el-collapse-item>
	  </el-collapse>
	</div>
      </el-col> 

    </el-row>
    
  <el-row :gutter="24" v-if="next !== null" type="flex" class="row-bg" justify="center">
  {{this.people.length}}<h1><a v-on:click="getMore(next)"><i class="el-icon-arrow-down"></i></a></h1>{{count}}
  </el-row>


  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'People',
  data () {
    return {
      msg: 'People',
      next: '',
      count: '',      
    }
  },
  methods: {
    handleChange(val) {
        console.log(val);
    },
    getMore: function(next){
      this.$store.dispatch('people/getPeople', next)
      mapState({events: state => state.events.events })
    },
  },
  created: function(){
      console.log('created ran');
      this.$store.dispatch('people/getPeople')
  },

  computed: mapState({
    // isAuth: state => state.auth.token,
    people: state => state.people.people,
    //next: state => state.people.next,
    //count: state => state.people.count,
  }),

}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
  color: #2F835D;	  
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
  color: #2F835D;	  
}
.cpeople {
  border: 0px #000 solid;
  border-radius: 25px;
  padding: 0px 5px 25px 5px;
  margin: 15px;
}
</style>
