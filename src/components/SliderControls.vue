<template>
  <div>
    <button class="slider-control left" @click="$emit('prev')"></button>
    <button class="slider-control right" @click="$emit('next')"></button>
  </div>
</template>

<script>
export default {
  emits: ["prev", "next"],
};
</script>
<style scoped>
.slider-control {
  background-color: inherit;
  border: solid white;
  display: inline-block;
  position: absolute;
  top: calc(60% - 25%);
  padding: 5px;
  border-width: 0 3px 3px 0;
  color: white;
  cursor: pointer;
}

.left {
  left: 10px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.right {
  right: 10px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
</style>
