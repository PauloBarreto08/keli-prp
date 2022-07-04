
<template>
    <div id="app">
        <p>
            <router-link to="/">Voltar a pagina Home</router-link> |
            <router-link to="/about">Sobre</router-link> 
            <br>
            <router-link to="/login">Fazer Login</router-link> |
            <router-link to="/registro">Fazer registro</router-link>
        </p>

        <router-view />
       
    </div>
</template>


<script>
import HomeView from './views/HomeView.vue'

export default {
  name: 'App',
  components: 
    HomeView
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
