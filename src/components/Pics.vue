<template>
  <div class="event_main">
    <el-row :gutter="24" type="flex" class="row-bg" justify="left">
      <el-col :span="8" :offset="6"> <h1>{{ msg }}</h1></el-col>
  </el-row>
  <el-row v-for="e in events" :gutter="24" type="flex" class="row-bg" justify="center">
     <el-col :span="20" class="events">
  	<el-row :span="18" type="flex" class="row-bg hidden-sm-and-down" justify="center">
        <el-col :span="12">	
          <h2>{{e.name}}</h2>
        </el-col>
        <el-col :span="6" class="time">
	  <strong>{{e.start_date | moment("MMM D h:mma")}}</strong>
	  <br />
	  <strong class="push-day">{{e.start_date | moment("dddd")}}</strong>
	  <br />
	  <strong>{{ e.location.name }}</strong>
        </el-col>	  
     </el-row>
     <el-row :span="18" type="flex" class="row-bg hidden-md-and-up" justify="center">
          <h2>{{e.name}}</h2>
        </el-row>
     <el-row :span="18" type="flex" class="row-bg hidden-md-and-up" justify="center">		<el-col :span="18" class="">
	  <strong>{{e.start_date | moment("dddd")}} {{e.start_date | moment("MMM D h:mma")}}</strong>
	  <br />
	  <strong>{{ e.location.name }}</strong>
        </el-col>	  
     </el-row>
     </el-col>
  </el-row>

  <el-row :gutter="24" v-if="next !== null" type="flex" class="row-bg" justify="center">
  {{this.events.length}}<h1><a v-on:click="getMore(next)"x><i class="el-icon-arrow-down"></i></a></h1>{{count}}
  </el-row>

</div>
</template>

<script>
export default {
  name: 'Pics',
  data () {
    return {
      msg: this.msg = this.$route.params.place.replace('-', ' '),
      next: '',
      count: '',      
      events: [],
    }
  },
  methods: {},
  created: function(){
      console.log('created ran', );
      this.$http.get('https://api.mnactivist.org/api/pics/' + this.$route.params.place)
      .then(function(response){
	this.events = response.data.results;

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
.time {
  padding: 20px 5px 5px 5px;
  text-align: right;
}
.push-day {
  padding: 3px 0px 0px 15px;
}
.events {
  border: 0px #000 solid;
  border-radius: 25px;
  padding: 0px 5px 10px 5px;
  margin: 10px;
}
</style>
