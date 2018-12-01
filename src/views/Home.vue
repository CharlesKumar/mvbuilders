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
    <div class="c review-slider">
      <div class="w-100p review-c">
        <Review :reviews="reviews[0]"></Review>
      </div>
      <div class="w-100p review-c">
        <Review :reviews="reviews[1]"></Review>
      </div>
      <!-- <div class="">
        <Review :reviews="reviews[1]"></Review>
      </div>
      <div class="">
        <Review :reviews="reviews[1]"></Review>
      </div> -->
      <!-- <div class="col-md2">
        <Review :reviews="reviews[0]"></Review>
      </div>
      <div class="col-md2">
        <Review :reviews="reviews[1]"></Review>
      </div> -->
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";
import Review from "@/components/Review.vue";
import { tns } from "@/../node_modules/tiny-slider/src/tiny-slider";
import "@/../node_modules/tiny-slider/dist/tiny-slider.css";

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
            "This new project ventured by M.V. Builders will certainly bring feel of confidence and Security to those who will take advantage of buying. Mr. Murali is quite dedicated in giving quality product to the society and ensures best is given irrespective of the challenges which comes along the project. I wish all success to Mr. Murali and team.",
          reviewer: "Venkatramanan. M",
          designation: "chaitanya kutir owner",
          src: require("@/assets/rv1.jpg")
        },
        {
          review:
            "I am a Super Senior Citizen and my son bought me a flat in 2014 in MV. Brindhavan Apartments in Parsn Srirengapura at Melur Road, Srirangam. This apartment was sold to me by an effecient builder Shri Muralidharan, owner of MV Builders. Perfect match for money invested. The quality of construction is so good and lot of modifications were carried out to our choice by the builder. A very honest and clean builder who kept the time commitment as his utmost priority in handing over the finished property. Also he consistently helps and attends our call even now to take care of every maintenance in the building. Technically a very sound person and he has used his technical expertise in taking care of high standards in the construction and finishing of every apartment. Financial transactions, keeping up commitments, timely handing over, facilitating registration process and after sales service, the builder is the best in the current scenario. In a nutshell I lead a hassle free, comfortable and peaceful life in my apartment. 100% Best Buy. Best wishes to him in all his new ventures.",
          reviewer: "V. Kamala",
          designation: "Senior Citizen",
          src: require("@/assets/rv2.jpg")
        }
      ]
    };
  },
  mounted() {
    tns({
      container: ".review-slider",
      items: 1,
      mode: "carousel",
      lazyload: true,
      mouseDrag: true,
      // edgePadding: 10,
      gutter: 0,
      controls: false,
      autoplayButtonOutput: false,
      // autoHeight: true,
      // nav: false,
      // fixedWidth: 1200,
      autoWidth: true,
      slideBy: "page",
      // slideBy: 1,
      autoplay: true,
      responsive: {
        300: {
          disable: true
        },
        960: {
          disable: false
        }
      }
    });
  }
};
</script>

<style lang="scss">
.home .tns-inner {
  background-color: rgb(250, 235, 215);
}
</style>
