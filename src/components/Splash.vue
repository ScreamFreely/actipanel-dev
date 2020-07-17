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
import api from '../store/api'

export default {
  name: 'Splash',
  metaInfo: {
    title: api.site,
    titleTemplate: 'Splash | %s'
  },
  data () {
    return {
      msg: 'Welcome to MnActivist',
      orgs: [],
    }
  },
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
