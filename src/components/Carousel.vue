<template lang="html">
    <div class="carousel">

      <img v-for="image in images" :src="image.src"  :alt="image.alt" :key="image.src" class="mw-100">

    </div>
</template>

<script>
import { tns } from "@/../node_modules/tiny-slider/src/tiny-slider";
import "@/../node_modules/tiny-slider/dist/tiny-slider.css";

export default {
  name: "Carousel",
  props: ["images"],
  data() {
    return {};
  },
  mounted() {
    tns({
      container: ".carousel",
      mode: "gallery",
      // axis: "vertical",
      items: 1,
      controls: false,
      autoplayButtonOutput: false,
      // nav: false,
      // fixedWidth: 1200,
      // autoWidth: true,
      // slideBy: "page",
      slideBy: 1,
      autoplay: true
    });
    // slider.rebuild();
  }
};
</script>

<style lang="scss">
.carousel img {
  // display: block;
}
.tns-outer {
  position: relative;
  .tns-inner {
    overflow: hidden;
  }
  .tns-nav {
    position: absolute;
    bottom: 10px;
    left: 40%;
    z-index: 1;
  }
  .tns-item {
    // max-width: 100%;
    object-fit: cover;
    object-position: center center;
  }
}
</style>
