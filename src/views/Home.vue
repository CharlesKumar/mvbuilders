<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Carousel :images="images"></Carousel>
    <h1 class="c">A warm welcome from MV builders</h1>
    <div class="warn-site c">
      <p><mark>please note:</mark> The website mvbuilders.in is under Construction.</p>
      <p>You may see irrelevant information and layout during this period.</p>
    </div>
    <div class="row">
      <div class="col-md2">
        <Card ctitle="Pleasant Atmosphere">
          <div slot="cbody">
            <img src="@/assets/mvpranavm.jpg" alt="" class="mw-100">
            <h2 class="d-center tac">MV Pranavm</h2>
            <p class="taj">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum numquam iusto enim magni sint necessitatibus placeat asperiores ipsa sit dolorem, fugiat aperiam eaque recusandae quibusdam quod debitis nesciunt nostrum veniam.</p>
          </div>
          <div slot="cfooter">

          </div>
        </Card>
      </div>
      <div class="col-md2">
        <Card ctitle="Green Environment">
          <div slot="cbody">
             <img src="@/assets/aparajitha.jpg" alt="" class="mw-100">
             <h2 class="d-center tac">Aparajitha</h2>
             <p class="taj">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum numquam iusto enim magni sint necessitatibus placeat asperiores ipsa sit dolorem, fugiat aperiam eaque recusandae quibusdam quod debitis nesciunt nostrum veniam.</p>
          </div>
          <div slot="cfooter">

          </div>
        </Card>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";
import Card from "@/components/Card.vue";

export default {
  name: "home",
  components: {
    Carousel,
    Card
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
          heading: "MV Builders",
          caption: "Friendly Companion for Construction Business"
        }
      ]
    };
  }
};
</script>
