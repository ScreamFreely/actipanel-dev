<template>
  <div class="event_main">
  <el-row v-for="e in events" :gutter="24" type="flex" class="row-bg" justify="center">
     <el-col :span="20" class="events">
  	<el-row :span="18" type="flex" class="row-bg hidden-sm-and-down" justify="center">
        <el-col :span="12">	
          <h2>{{e.name}}</h2>
        </el-col>
        <el-col :span="6" class="time">
	  <b>{{e.start_date | moment("MMM D h:mma")}}</b>
	  <br />
	  <b class="push-day">{{e.start_date | moment("dddd")}}</b>
	  <br />
	  <b>{{ e.location.name }}</b>
	  <br />
          <b>{{ e.jurisdiction.name }}</b>
        </el-col>	  
     </el-row>
     <el-row :span="18" type="flex" class="row-bg hidden-md-and-up" justify="center">
          <h2>{{e.name}}</h2>
        </el-row>
     <el-row :span="18" type="flex" class="row-bg hidden-md-and-up" justify="center">		<el-col :span="18" class="">
	  <b>{{e.start_date | moment("dddd")}} {{e.start_date | moment("MMM D h:mma")}}</b>
	  <br />
	  <b>{{ e.location.name }} {{ e.jurisdiction.name }}</b>
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
  name: 'Events',
  data () {
    return {
      msg: 'Events',
      next: '',
      count: '',      
      events: [],
    }
  },
  methods: {
  getMore: function(next){
      this.$http.get(next)
      .then(function(response){
        console.log(response);
	this.events = this.events.concat(response.data.results);
	this.next = response.data.next.replace('http', 'https');	
      });
    }
  },
  created: function(){
      console.log('created ran');
      this.$http.get('https://api.mnactivist.org/api/events')
//      this.$http.get('http://localhost:8000/api/events')
      .then(function(response){
	this.events = response.data.results;
	this.next = response.data.next.replace('http', 'https');		
	this.count = response.data.count;		
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
  border: 2px #000 solid;
  border-radius: 25px;
  padding: 0px 5px 25px 5px;
  margin: 15px;
}
</style>
