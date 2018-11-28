<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Carousel :images="images"></Carousel>
    <h1 class="c">A warm welcome from <span class="times ttu">MV Builders</span></h1>
    <div class="warn-site c">
      <p><mark>please note:</mark> The website mvbuilders.in is under Construction.</p>
      <p>You may see irrelevant information and layout during this period.</p>
    </div>
    <div class="c tac">
      <h2>Our Current Project <br> <small class="times">MV Vistara Homes</small></h2>
    </div>
    <div class="row c">
      <div class="col-md2">
        <img src="@/assets/MV2.jpg" alt="" class="mw-100">
      </div>
      <div class="col-md2">
        <h3>MV Vistara</h3>
        <p>Happy to launch our new project in Boologa Vaikundam, Srirangam, have the entire people in the Universe have the ambition to live at their lifetime especially during their retired livinghoods. As our project situated very near to thayar sannadhi and the first project in srirangam having the mandatory registration with RERA numbered as 16/2018(verify) we hope MV Vistara will fulfill the ambitions of srirangam loving people spread over the entire Universe.</p>
        <h4>Location Advantages</h4>
        <ul class="list-checked">
          <li>700 Meter from Srirangam Thayar Sannadhi.</li>
          <li>Lush Green Environment</li>
          <li>2km from Bus Stand/Railway Station.</li>
          <li>3km from Government Butterfly Park.</li>
        </ul>
      </div>
    </div>
    <!-- <div class="row">
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
    </div> -->
    <h2 class="c">Client Reviews</h2>
    <div class="row c">
      <div class="col-md2">
        <Review :reviews="reviews[0]"></Review>
      </div>
      <div class="col-md2">
        <Review :reviews="reviews[1]"></Review>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";
import Review from "@/components/Review.vue";

export default {
  name: "home",
  components: {
    Carousel,
    Review
  },
  data() {
    return {
      images: [
        {
          src: require("@/assets/MV2.jpg"),
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
      ],
      reviews: [
        {
          review:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore non nostrum ullam eaque iure, ipsum fugit iusto! Saepe vel placeat, aliquid iure, maiores necessitatibus accusamus sequi iusto neque suscipit numquam.",
          reviewer: "Mr. Client",
          designation: "well known designation"
        },
        {
          review:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore non nostrum ullam eaque iure, ipsum fugit iusto! Saepe vel placeat, aliquid iure, maiores necessitatibus accusamus sequi iusto neque suscipit numquam.",
          reviewer: "Mrs. Client",
          designation: "well known designation"
        }
      ]
    };
  }
};
</script>
