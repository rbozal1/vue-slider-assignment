<template>
  <div class="carousel">
    <div class="carousel-inner">
      <slider-images></slider-images>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.app {
  display: flex;
  justify-content: center;
}
.carousel {
  position: relative;
  overflow: hidden;
  width: 800px;
  height: 500px;
  z-index: 10;
}
</style>
