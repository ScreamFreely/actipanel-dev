<template>
  <div class="org_main">
    <el-row :gutter="24" type="flex" class="row-bg" justify="center">
      <el-col :span="18":offset="3"></el-col>
    </el-row>

    <el-row :gutter="24" type="flex" class="row-bg" justify="center">
      <el-col :span="22" :offset="1">
      <center>
       <h1>{{ msg }}</h1>

	<p>{{ siteName }} is the project of a single individual, Canin Carlos a.k.a. Culture Clap.</p>

	<p>I learned to code for the sole reason of wanting to have an application whereby each morning I wake, I can know what my elected officials are up to.</p>

	<p>If you would like to support my work, I encourage you to become a Patron to support monthly for little as a dollar per month; or maybe just buy me a coffee as a one-time thank you :)</p>

	<p>
		<a class="patreon-btn" href="https://www.patreon.com/bePatron?u=6465397">
            <img src="../../static/become_a_patron_button.png"/>
        </a>
    </p>
    <p>
    	<a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/cultureclap"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee"><span>Buy me a coffee</span></a>
    </p>

	<h2>Data Policy</h2>
		<div>
			<p>I'm pretty strict about the following; people, including myself, don't want our data tracked and sold.</p>

			<p>Yea, this site is free to use; but our users will never been the product.</p>

			<p>Right now, I'm just measuring growth by Patreon support, Twitter followers</p>
		</div>

	<h2>Contact Us</h2>
	    <p>The best way to contact me is through <a href="https://www.instagram.com/cultureclap" target="_blank">Instagram,</a> as I'm not on <a href="https://twitter.com/cultureclap" target="_blank">Twitter,</a> as much as I used to be.</p>

	</center>

      </el-col>
    </el-row>

    <el-row v-if="isActive" v-for="p in posts.slice(0, 8)" :gutter="24" type="flex" class="row-bg" justify="center">
      <el-col :span="18">
        <h2><a :href="p.name">{{p.name}}</a></h2>
      </el-col> 
    </el-row>
  </div>
</template>



<script>
import axios from 'axios';
import api from '../store/api'

export default {
    name: 'Main',
    data () {
		return {
		    msg: 'About ' + api.site,
		    aState: api.aState, 
		    siteName: api.name,
		    isActive: false,
		    newDonation: {},
		    amount: '',
		    newComment: {},
	     	options: [
	     		{
		          value: 'sgn',
		          label: 'Suggestion'
		        }, 
		        {
		          value: 'dbg',
		          label: 'Tech Issue'
		        }, 
		        {
		          value: 'gte',
		          label: 'Thank you'
		        }, 
	  		],
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
    width: 60% !important;
    padding: 10px !important;
  }
}

</style>

