<template>
    <div class="org_main">
        <el-row>
            <el-col>
                <center>
                    <h1>{{ msg }}</h1>
                    <p>{{ siteName }} is the project of a single individual who learned to code for the sole reason of wanting of building this project.</p>
                    <p>To have an application whereby each morning they could wake, and know what their elected officials are up to.</p>
                    <p>Big shout-out to <a href="https://wwww.openstate.org" target="_blank">OpenStates</a> for laying the groundwork!!</p>
                    <p>If you dig the idea too, and would like to support the work, please <a href="https://www.patreon.com/bePatron?u=6465397">become a Patron</a> supporting monthly for as little as <b>$1 per month</b> ...</p>
                    <p>
                        <a class="patreon-btn" href="https://www.patreon.com/bePatron?u=6465397">
                            <img src="../../static/become_a_patron_button.png" />
                        </a>
                    </p>
                    Or if you'd like to buy me a cup of java ...
                    <br /><br />
                    it would be appreciated:
                    <br /><br />
                    <a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/cultureclap"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee"><span>Buy me a coffee</span></a>
                    <br /><br />
                    I also use <a href="https://paypal.me/DreamFreely" target="_blank">PayPal</a> & <a href="https://venmo.com/CultureClap" target="_blank">Venmo</a>, if you'd like ...
                    <br />
                    <h1>Data Policy</h1>
                    <div>
                        <p>I'm pretty strict about the following:</p>
                        <p>People, including myself, don't want our data tracked and sold.</p>
                        <p>Yea, this site is free to use; but our users <i>will never</i> be the product.</p>
                        <p>Right now, I'm just measuring growth by Patreon support</p>
                        <p>All of the code used to run this project is available on <a href="https://www.github.com/screamfreely" target="_blank">GitHub</a> as well.</p>
                    </div>
                    <h1>Thanks for droppin' by!</h1>
                    <p><a href="https://www.cultureclap.com" target="_blank"><img src="../../static/profile3.jpg" style="width: 100%;" /></a></p>
                </center>
            </el-col>
        </el-row>
    </div>
</template>


<script>
import api from '../store/api'

export default {
    name: 'Main',
    metaInfo: {
      title: api.site,
      titleTemplate: 'About | %s'
    },
    data() {
        return {
            msg: 'About ' + api.site,
            aState: api.aState,
            siteName: api.name,
            isActive: false,
            newDonation: {},
            amount: '',
            newComment: {},
        }
    },
    methods: {
        handleChange(val) {
            console.log(val);
        },
    }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
  color: #2F835D;	    
}
a {
  color: #2F835D;	  
}

.tn {
  margin: 20px;
}

p {
    margin: auto !important;
    width: 90% !important;
    padding: 10px !important;
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

