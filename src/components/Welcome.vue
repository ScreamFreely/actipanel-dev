<template>
  <div class="hello">
    <el-row :gutter="24">
    <el-col :span="4" :offset="1"><h1><router-link :to="{ path: '/', exact: true }">{{ msg }}</router-link></h1></el-col>

<el-col :span="6" :offset="13" class="hidden-md-and-up">

<el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <h3>Menu<i class="el-icon-arrow-down el-icon--right"></i></h3>
      </span>
      <el-dropdown-menu slot="dropdown">
           <el-dropdown-item v-for="l in links"><h3><a :href="l.link">{{l.name}}</a></h3></el-dropdown-item>
	   <br />
           <el-dropdown-item v-for="l in basics" class="push-item"><h4><a :href="l.link">{{l.name}}</a></h4></el-dropdown-item>	   
      </el-dropdown-menu>
    </el-dropdown>
</el-col>

    <el-col :span="15" :offset="4" class="hidden-sm-and-down">
    <el-row>
     <el-col :push="2">
     <el-col v-for="l in links" :span="4" :offset="1" class="mi">
    	    <strong><router-link :to="l.link">{{l.name}}</router-link></strong>
       </el-col>
     </el-col>       
     </el-row>
     
     <el-row class="auxRow">
     <el-col :push="3">
         <el-col v-for="l in basics" :span="4" :offset="1">
	  	<small><router-link :to="l.link">{{l.name}}</router-link></small>
          </el-col>
      </el-col>
    </el-row>

    </el-col>
    </el-row>
</div>
</template>

<script>
export default {
  name: 'ObjectList',
  data () {
    return {
      msg: 'MnActivist',
      links: [
      { name: 'Events', link: '/events' },
      { name: 'People', link: '/people' },
      { name: 'Policy', link: '/policy' },
      { name: 'Organizations', link: '/organizations' },      
      ],
      basics:[
      { name: 'iOS', link: '/apple' },
      { name: 'Android', link: 'http://bit.ly/MnActivist_for_Android' },
//      { name: 'Add-a-Quote', link: '/quote' },
      { name: 'About', link: '/about' },      
      
      ],
      }
  },
  methods: {},
  created: function(){
      console.log('created ran');
  }
}
</script>


<style scoped>
.hello {
  height: 75px;
  border: 2px #fff solid;
  border-radius: 15px;
  padding: 5px;
  
}
.baseBorder {
    border: 4px #000 solid;
    border-radius: 4px;
    padding: 5px;
}
.auxRow {
#    margin-top: -25px;
    overflow: hidden;
}
.push-item {
    text-align: right;
    margin: -8px;
}
.el-col.mi {
    padding: 15px 5px 10px 5px;
}
h1, h2 {
  font-weight: normal;
  color: #2F835D;	    
#  color: #000000;	
}
a {
  color: #2F835D;	  
}
</style>
