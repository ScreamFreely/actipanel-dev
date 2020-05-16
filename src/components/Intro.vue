<template>
  <div class="" style="padding-top: 75px;">
    <center>
      <h1>Welcome to {{ msg }}</h1>

      <p>Heyo, my name is Canin and I'm building this as an entry point to civic engagment & technology.</p>

      <p>Right now <a href="http://www.mnactivist.org" target="_blank">MnActivist.Org</a> is the only domain with scrapers running; though I'm working to get the rest of the domains populated as well.</p>

      <p>Stay informed by subscribing to updates via Substack</p>

      <iframe src="https://screamfreely.substack.com/embed" width="350" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>

      <br/>

      <h1>Wanna contribute?</h1>

      <p>I'm also building materials to help those interested, learn to code.</p> 

      <p>It's an eight-step path to learn how to write web-scrapers, with the context necessary, so y'all can contribute.</p>

      <div>
          <a class="gumroad-button" href="https://gum.co/RebelCoding">Rebel Coding</a>
      </div>

      <p>You can check out the materials at <a href="https://www.rebelcoding.com" target="_blank">RebelCoding.com</a> for free.</p>

      <br/>

      <h1>And lastly ...</h1>

      <p>If you would like to support my work, I encourage you to become a Patron to support monthly for little as $1 per month ...</p>

      <p>
        <a class="patreon-btn" href="https://www.patreon.com/bePatron?u=6465397">
                <img src="../../static/become_a_patron_button.png"/>
            </a>
      </p>

      <p>... or maybe just buy me a coffee as a one-time thank you :)</p>

      <p>
        <a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/cultureclap"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee"><span>Buy me a coffee</span></a>
      </p>

      <img src="../../static/profile3.jpg"/>

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
p {
    margin: auto !important;
    width: 95% !important;
    padding: 10px !important;
  }
a {
  color: #2F835D;	

}

.patreon-btn img {
  border-radius: 10px;
}

.bmc-button img {
  height: 34px !important;
  width: 35px !important;
  margin-bottom: 1px !important;
  box-shadow: none !important;
  border: none !important;
  vertical-align: middle !important;
}

.bmc-button{
  padding: 7px 15px 7px 10px !important;
  line-height: 35px !important;
  height:51px !important;
  text-decoration: none !important;
  display:inline-flex !important;
  color:#FFFFFF !important;
  background-color:#FF813F !important;
  border-radius: 5px !important;
  border: 1px solid transparent !important;
  padding: 7px 15px 7px 10px !important;
  font-size: 22px !important;
  letter-spacing: 0.6px !important;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;
  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  margin: 0 auto !important;
  font-family:'Cookie', cursive !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
}

.bmc-button span {
  margin-left:5px;font-size:28px !important;
}

.bmc-button:hover, .bmc-button:active, .bmc-button:focus {
  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  text-decoration: none !important;
  box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  opacity: 0.85 !important;
  color:#FFFFFF !important;
}

@media (min-width: 1200px){
  p {
    margin: auto !important;
    width: 40% !important;
    padding: 10px !important;
  }
}
</style>
