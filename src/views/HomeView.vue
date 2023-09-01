<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="container">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="1000">
          <img height="500px" src="https://i.dummyjson.com/data/products/14/1.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img height="500px" src="https://i.dummyjson.com/data/products/71/1.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img height="500px" src="https://i.dummyjson.com/data/products/41/1.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
