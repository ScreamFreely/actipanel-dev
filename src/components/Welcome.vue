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
               <el-dropdown-item v-for="l in links"><h3><a :href="l.link" @mouseover="platform = s.platform" @mouseout="platform = ''"><i :class="[l.type + ' fa-' + l.name + ' fa-2x']"></i></a> {{l.title}}</h3></el-dropdown-item>  
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>

      <el-col :span="15" :offset="4" class="hidden-sm-and-down">
        <el-row type="flex" class="row-bg" justify="end">
            <span style="color: #000;padding: 8px;font-size:1.35em;"><b>{{platform}}</b></span>
            <span v-for="s in links" :span="2" :offset="1" style="text-align: right;margin: 0px 25px 0px 15px;">
              <a :href="s.link" @mouseover="platform = s.title" @mouseout="platform = ''"><i :class="[s.type + ' fa-' + s.name + ' fa-2x']"></i></a> 
            </span>
         </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '../store/api'

export default {
  name: 'ObjectList',
  data () {
    return {
      msg: api.site,
      platform: '',
      links: [
  //      { type: 'fab', title: 'iOS', name: 'itunes-note', link: '//bit.ly/MnActivist_for_iOS' },
  //      { type: 'fab', title: 'Android', name: 'google-play', link: '//bit.ly/MnActivist_for_Android' },
  //      { name: 'Add-a-Quote', link: '/quote' },
        { type: 'fas', title: 'About', name: 'question-circle', link: '/about' },     
      ],
      }
  },
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
}
a {
  color: #2F835D;	  
}
</style>
