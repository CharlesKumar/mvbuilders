<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Carousel :images="images"></Carousel>
    <h1>A warm welcome from MV builders</h1>

  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";

export default {
  name: "home",
  components: {
    Carousel
  },
  data() {
    return {
      images: [
        {
          src: require("@/assets/MV1.jpg"),
          alt: "mv brindhavan apartments",
          heading: "MV Vistara",
          caption: "caption for the photo"
        },
        {
          src: require("@/assets/MV2.jpg"),
          alt: "mv dwaraka apartments",
          heading: "MV Vistara",
          caption: "caption for the photo"
        }
      ]
    };
  }
};
</script>
