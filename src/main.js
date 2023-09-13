import { createApp } from "vue";
import Slider from "./components/SliderComponent.vue";
import App from "./App.vue";

const app = createApp(App);
app.component("slider-images", Slider);
app.mount("#app");
