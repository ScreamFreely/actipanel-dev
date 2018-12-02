<template>
  <div class="index">
       <nav>
       <router-view name="header"/>
       </nav>
       <main>
       <router-view name="main"/>
       </main>
  </div>
</template>

<script>
export default {
  name: 'Splash',
  data () {
    return {
      msg: 'Welcome to MnActivist',
      orgs: [],
    }
  },
  methods: {},
  created: function(){
      console.log('splash loaded');
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
</style>
