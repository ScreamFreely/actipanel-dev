<template>
  <div class="event_main">
  <center>
    <h3>Calendar of Events</h3>
  </center>
  <br/>
  
  <el-row v-if="addEvent == true" :gutter="24" type="flex" class="row-bg">
  	  <el-col :span="22" :offset="1" justify="center">

<center>

 <p>Just have a Facebook Event?</p>

    <el-form ref="newFBEvent" :model="newFBEvent" label-width="20px">
      <el-form-item label=" " prop="name" required>
      <el-input placeholder="Facebook Event Link" v-model="newFBEvent.link"></el-input>
      </el-form-item>
    </el-form>

    <el-button type='primary' size='mini' @click="sendFBEvent(newFBEvent)">Submit Fb Event</el-button>

</center>
    <br/><br/>

  	  <el-form ref="newEvent" :model="newEvent" label-width="20px">

	      <el-form-item label=" " prop="name" required>
    <el-input placeholder="Event Name" v-model="newEvent.name"></el-input>
    </el-form-item>

    <el-form-item label=" " required>
         <el-date-picker
              v-model="newEvent.date"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="Pick a day">
          </el-date-picker>
  </el-form-item>

  <el-form-item label=" " required>
    <el-time-select
  v-model="newEvent.time"
  :picker-options="{
    start: '06:30',
    step: '00:15',
    end: '23:30'
  }"
  value-format="HH:mm:ss"
  placeholder="Select time">
</el-time-select>
</el-form-item>
  
  <el-form-item label=" " required>
    <el-select v-model="newEvent.event_type" placeholder="Event Type">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>
  </el-form-item>
 
  <el-form-item label="">
    <el-input placeholder="Location Name" v-model="newEvent.loc_name"/>
  </el-form-item> 

  <el-form-item label=" " required>
    <el-input placeholder="Address" v-model="newEvent.location"></el-input>
  </el-form-item>
  
  <el-form-item label=" " required>
    <el-input placeholder="City" v-model="newEvent.city"></el-input>
  </el-form-item>
  
  <el-form-item label=" ">
    <el-input placeholder="mnactivist.org" v-model="newEvent.link">
        <template slot="prepend">http://</template>
          </el-input>
  </el-form-item>
  
  <el-form-item label=" " required>
    <el-input
      type="textarea"
        autosize
          placeholder="What's going on?"
            v-model="newEvent.description">
    </el-input>
  </el-form-item>
  
  <el-form-item label=" ">
    <el-input placeholder="" v-model="newEvent.password"></el-input>   
  </el-form-item>

	<el-form-item label=" ">
	<span>
	{{ num1 }} + {{ num2 }} = <input placeholder="??" size="5" v-model="newEvent.numnum"></input>
	</span>
	</el-form-item>


	<el-button type='primary' @click="sendEvent(newEvent)">Submit</el-button>
	<el-button @click="addEvent = !addEvent" icon="el-icon-close"/>
	
	</el-form>
	</el-col>
</el-row>

<div v-if="addEvent == false">
<center><span>
<el-select v-model="calendar">
  <el-option v-for="cal in callist" :key="cal.name" :label="cal.name" :value="cal.name"></el-option>
</el-select>
<el-button v-on:click="getCal(calendar)" icon="el-icon-refresh"/>
<!--<el-button v-on:click='addEvent = !addEvent' icon="el-icon-plus">Event</el-button>-->
</span></center>


<el-row v-if="addEvent == false" v-for="e in events" :gutter="24" type="flex" class="row-bg" justify="center"> 

  <el-col :span="20" class="events">
  	<el-row :span="18" type="flex" class="row-bg hidden-sm-and-down" justify="center">
        <el-col :span="12">
          <a v-if="e.sources[0].url" :href="e.sources[0].url" target="_blank">
            <h2>{{e.name}}</h2>
          </a>
          <h2 v-else-if="!e.sources.url">{{e.name}}</h2>

	         <a v-if="cals" :href="'sendToGCal(e)'">gCal</a>
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
          <a v-if="e.sources[0].url" :href="e.sources[0].url" target="_blank">
            <h2>{{e.name}}</h2>
          </a>
          <h2 v-else-if="!e.sources.url">{{e.name}}</h2>
    </el-row>
    <el-row :span="18" type="flex" class="row-bg hidden-md-and-up" justify="center">		
      <el-col :span="18" class="">
    	  <b>{{e.start_date | moment("dddd")}} {{e.start_date | moment("MMM D h:mma")}}</b>
    	  <br />
    	  <b>{{ e.location.name }} {{ e.jurisdiction.name }}</b>
      </el-col>	  
     </el-row>
  </el-col>
</el-row>

<el-row v-if="next !== null" :gutter="24" type="flex" class="row-bg" justify="center">
  {{this.events.length}}<h1><a href="#" v-on:click="getMore(next)" aria-label="Load more events"><i class="el-icon-arrow-down"></i></a></h1>{{count}}
</el-row>

</div>
</div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'Events',
  data () {
    return {
      addEvent: false,
      calendar: '',
    }
  },

  created: function(){
      this.$store.dispatch('events/getCalendars')
      this.$store.dispatch('events/getEvents')
  },

  computed: mapState({
    events: state => state.events.events,
    callist: state => state.events.callist,
    newEvent: state => state.events.newEvent,
    newFBEvent: state => state.events.newFBEvent,
   // addEvent: state => state.events.addEvent,
   // calendar: state => state.events.calendar,
    cals: state => state.events.cals,
    next: state => state.events.next,
    count: state => state.events.count,
  }),

  methods: {
  getMore: function(next){
      this.$store.dispatch('events/getNewEvents', next)
      mapState({events: state => state.events.events })
  },

  addToGCal: function(event){
      var time = event.start_date;
      var link = event.location.name;
      var city = event.jurisdation.name;
      var nlink = "https://calendar.google.com/calendar/r/eventedit?text=" + event.name + "&dates=" + event.start_date + "/" + event.start_date + "&ctz=America/Chicago"
      return nlink
    },

  sendFBEvent: function(data){
      var sdata = Object.assign( {}, data);
      if (sdata.link == '') { return };
      this.$store.dispatch('events/newFbEvent', sdata)
    },
 
  sendEvent: function(data){
      data.startdate = data.date + 'T' + data.time +':00+00:00';
      data.location = data.loc_name + ' |0| ' + data.location;
      if (data.link == '') { data.link = 'sf.org' };
      if (this.harold == data.numnum) {
        this.$store.dispatch('events/newEvent', data)
      } else {
        this.$message({
      	  message: "Invalid answer.",
      	  type: 'error',
      	  duration: '5000',
	      });
      }
    },
    
  getCal: function(cal){
       this.$store.dispatch('events/getCalendar', cal)
       mapState({events: state => state.events.events })    
    },
  },
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
