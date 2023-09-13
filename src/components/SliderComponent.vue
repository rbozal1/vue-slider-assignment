<template>
  <div class="slider">
    <div class="slider-inner">
      <slider-indicators
        :total="slides.length"
        :current-index="currentSlide"
        @switch="switchSlide($event)"
      ></slider-indicators>
      <slider-item
        v-for="(slide, index) in slides"
        :key="index"
        :slide="slide"
        :currentSlide="currentSlide"
        :idx="index"
        :direction="direction"
        @mouseenter="stopSlideTimer"
        @mouseout="startSlideTimer"
      />
      <slider-control @prev="prev" @next="next"></slider-control>
    </div>
  </div>
</template>

<script>
import SliderItem from "./SliderItem.vue";
import SliderControl from "./SliderControls.vue";
import SliderIndicators from "./SliderIndicators.vue";

export default {
  components: { SliderItem, SliderControl, SliderIndicators },
  data() {
    return {
      slides: [
        {
          img: "https://www.w3schools.com/howto/img_nature_wide.jpg",
          text: "Caption Text 1",
        },
        {
          img: "https://www.w3schools.com/howto/img_snow_wide.jpg",
          text: "Caption Text 2",
        },
        {
          img: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
          text: "Caption Text 3",
        },
      ],
      currentSlide: 0,
      slideInterval: null,
      direction: "right",
    };
  },

  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },

    prev(step = -1) {
      const index =
        this.currentSlide > 0
          ? this.currentSlide + step
          : this.slides.length - 1;
      this.setCurrentSlide(index);
      this.direction = "left";
      this.startSlideTimer();
    },

    _next(step = 1) {
      const index =
        this.currentSlide < this.slides.length - 1
          ? this.currentSlide + step
          : 0;
      this.setCurrentSlide(index);
      this.direction = "right";
    },
    next(step = 1) {
      this._next(step);
      this.startSlideTimer();
    },
    startSlideTimer() {
      this.stopSlideTimer();
      this.slideInterval = setInterval(() => {
        this._next();
      }, 5000);
    },
    stopSlideTimer() {
      clearInterval(this.slideInterval);
    },

    switchSlide(index) {
      const step = index - this.currentSlide;
      if (step > 0) {
        this.next(step);
      } else {
        this.prev(step);
      }
    },
  },

  mounted() {
    this.startSlideTimer();
  },
  beforeUnmount() {
    this.stopSlideTimer();
  },
};
</script>

<style scoped>
.slider {
  display: flex;
  justify-content: center;
}

.slider-inner {
  position: relative;
  width: 900px;
  height: 400px;
  overflow: hidden;
}
</style>

// An ActiveUser component
