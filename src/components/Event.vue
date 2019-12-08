<template>
  <div class="event_main">
    <el-row :gutter="24" type="flex" class="row-bg" justify="left">
      <el-col :span="8" :offset="1"> <h1>{{ event.name }}</h1></el-col>
          <el-col :span="6" :offset="6" class="time">
	    <b>{{event.start_date | moment("MMM D h:mma")}}</b>
	    <br />
	    <b class="push-day">{{event.start_date | moment("dddd")}}</b>
	    <br />
	    <b>{{ event.location.name }}</b>
	    <br />
            <b>{{ event.jurisdiction.name }}</b>
          </el-col>	  
   </el-row>

    <el-row :gutter="16" type="flex" class="row-bg" justify="center">

    <el-col :span="20" class="events">

      <el-row :span="18" type="flex" class="row-bg hidden-sm-and-down" justify="center">
	</el-row>

	<el-row :span="18" type="flex" class="row-bg hidden-md-and-up" justify="center">
          <h2><a :href="event.name">{{event.name}}</a></h2>
        </el-row>

	<el-row :span="18" type="flex" class="row-bg hidden-md-and-up" justify="center">
	  <el-col :span="18" class="">
	    <b>{{event.start_date | moment("dddd")}} {{event.start_date | moment("MMM D h:mma")}}</b>
	    <br />
	    <b>{{ event.location.name }} {{ event.jurisdiction.name }}</b>
          </el-col>	  
	</el-row>

	</el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  name: 'Events',
  data () {
    return {
      msg: 'Events',
      event: {},
    }
  },
  methods: {},
  created: function(){
      console.log('created ran');
      this.$http.get('https://api.mnactivist.org/api/event/' + this.$route.params.id)
//      this.$http.get('http://localhost:8000/api/event/' + this.$route.params.id)
      .then(function(response){
	this.event = response.data.results[0];	
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
  padding: 0px 5px 25px 5px;
  margin: 15px;
}
</style>
