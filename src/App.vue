<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';


</script>

<template>
  <Header></Header>
    
 
  <div class="">

    <RouterView />
  </div>

  <Footer></Footer>
</template>

<style scoped>

</style>
