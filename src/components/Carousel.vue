<template lang="html">
  <div class="carousel no-print" v-cloak>
    <!-- <img v-for="image in images" :src="image.src"  :alt="image.alt" :key="image.src" class="mw-100"> -->

    <div class="slidewrap por" v-for="image in images" :key="image.src">
      <div class="overlay">
        <h1 class="highlight--underline times ttu slider__heading">
          {{ image.heading }}
        </h1>
        <p class="highlight--underline slider__caption">{{ image.caption }}</p>
      </div>
      <img :src="image.src" :alt="image.alt" />
    </div>
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
      autoHeight: false,
      nav: false,
      speed: 0,
      autoplayTimeout: 7000,
      // fixedWidth: 1200,
      // autoWidth: false,
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

.slider__caption {
  font-size: 24px;
  text-align: center;
}

@media all and (max-width: 480px) {
  .slider__caption,
  .slider__heading {
    // opacity: 0.1;
    font-size: 80%;
  }
}

.tns-outer {
  position: relative;
  .tns-inner {
    overflow: hidden;
  }
  .tns-nav {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translatex(-50%);
    z-index: 1;
  }
  .tns-item {
    img {
      // max-width: 100%;
      width: calc(100%);
      object-fit: cover;
      object-position: center center;
    }
  }
}
</style>
