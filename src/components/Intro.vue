<template>
  <div class="event_main" style="padding-top: 75px;">
    <center>
      <h1>Welcome to {{ msg }}</h1>

      <br>

      <p>We are building an entry point for civic engagment & technology for all.</p>

      <p>Learn more by subscribing to the founder via <a>Substack</a>

      <p>Or check out the curriculum below to start learning to code and contribute yourself.</p>

      <div>
<div class="gumroad-product-embed" data-gumroad-product-id="RebelCoding"><a href="https://gumroad.com/l/RebelCoding">Loading...</a></div>
      </div>

    </center>
  </div>
</template>
<script src="https://gumroad.com/js/gumroad-embed.js"></script>
<script>
import axios from 'axios';
import { mapState } from 'vuex'

export default {
  name: 'Events',
  data: function () {
    return {
      msg: 'CaActivist',
      calendar:'',
      newEvent: {},
      newFBEvent: {},
      next: '',
      count: '',      
      harold: 0,
    }
  },
  methods: {

    
  },
  
  created: function(){
      console.log('created ran', this.events);
      this.harold = this.num1 + this.num2;
      axios.get('https://api.mnactivist.org/api/events')
      .then(response => (this.events = response.data.results));
      axios.get('https://api.mnactivist.org/api/jurisdictions')
      .then(response => (this.callist = response.data.results, this.callist.push({'id': 'null', 'name': 'Arts & Music'}, {'id': 'null', 'name': 'Civic'}, {'id': 'null', 'name': 'Demonstrations'}, {'id': 'null', 'name': 'Educative'}, {'id': 'null', 'name': 'Org Events'}, {'id': 'null', 'name': 'All Events'} )));
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
