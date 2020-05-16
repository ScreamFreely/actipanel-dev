<template>
  <div class="event_main" style="padding-top: 75px;">
    <center>
      <h1>Welcome to {{ msg }}</h1>

      <br>

      <p>Heyo, my name is Canin and i'm building this as an entry point to civic engagment & technology.</p>

      <p>Right now <a href="http://www.mnactivist.org" target="_blank">MnActivist.Org</a> is the only domain with scrapers running. Though I'm working to get the rest of the domains populated as well.</p>

      <p>Learn more by subscribing to the founder via Substack</p>

      <center>
        <iframe src="https://screamfreely.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
      </center>

      <p>I'm also building some materials to help those interested, learn to code.</p> 

      It's an eight-step path to learn how to write web-scrapers, with the context necessary, so y'all can contribute.</p>

      <div>
          <a class="gumroad-button" href="https://gum.co/RebelCoding">Rebel Coding</a>
      </div>

      <p>You can check out the materials at <a href="https://www.rebelcoding.com" target="_blank">RebelCoding.com</a> for free</p>

    </center>
  </div>
</template>
<script>
import api from '../store/api'


export default {
  name: 'Events',
  data: function () {
    return {
      msg: api.site,
    }
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
