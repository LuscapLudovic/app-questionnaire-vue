<template>
  <div id="app">
    <div id="nav">
      <h1>
        Questionnaire
      </h1>
      <router-view/>
      <!--<router-link to="/about">About</router-link>-->
    </div>
  </div>
</template>
<script>
  import Login from "@/views/Login";
  export default {
    name: "App",
    components: {
      Login
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
