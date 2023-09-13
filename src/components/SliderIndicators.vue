<template>
  <div class="slider-indicators">
    <div class="slide-number">{{ currentIndex + 1}} / {{ total }}</div>
    <button
      class="slider-indicator-item"
      :class="{ active: currentIndex === index }"
      v-for="(item, index) in total"
      :key="index"
      @click="$emit('switch', index)"
    ></button>
  </div>
</template>

<script>
export default {
  emits: ["switch"],
  props: ["total", "currentIndex"],
};
</script>

<style scoped>
.slider-indicators {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 1.5em;
  z-index: 2;
}

.slider-indicator-item {
  width: 15px;
  height: 15px;
  border: none;
  background: grey;
  opacity: 0.5;
  margin: 0.2em;
  cursor: pointer;
  border-radius: 50%;
}

.active {
  opacity: 1;
}

.slide-number {
  position: relative;
  top: -300px;
  color: white;
  right: 300px;
}
</style>
