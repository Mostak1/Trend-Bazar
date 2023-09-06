<script setup>

</script>
<style scoped>
.carousel_img {
  background-image: url(../assets/images/slider-bg.jpg);
  height: 400px;
}
</style>
<template>
  <div class="container">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active row" data-bs-interval="1000">
          <!-- <img height="500px" src="https://i.dummyjson.com/data/products/14/1.jpg" class="d-block w-100" alt="..."> -->
          <div class="carousel_img">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda et eveniet quis
            iusto magni veniam maiores reiciendis, architecto aperiam esse? Placeat, nobis reiciendis velit quasi repellat
            dolor aperiam architecto quibusdam.</div>
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
