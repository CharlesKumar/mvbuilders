<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Carousel :images="images"></Carousel>
    <h1 class="c">
      A warm welcome from <span class="times ttu">MV Builders</span>
    </h1>
    <!-- <div class="warn-site c">
      <p><mark>please note:</mark> The website mvbuilders.in is under Construction.</p>
      <p>You may see irrelevant information and layout during this period.</p>
    </div> -->
    <div class="c tac">
      <h2>
        Our Current Project <br />
        <small class="times">MV Vistara Homes</small>
      </h2>
    </div>
    <div class="row c">
      <div class="col-md2">
        <img src="@/assets/MV2.jpg" alt="image of MV Vistara" class="mw-100" />
        <a class="vam mt2" href="/mvbuilders.pdf"
          ><img
            class="icon-small"
            src="@/assets/pdf_file.png"
            alt="pdf file icon"
          /><span class="vam fz-140p">Download MV Vistara Brochure</span></a
        >
      </div>
      <div class="col-md2">
        <h3>MV Vistara</h3>
        <p>
          Happy to launch our new project in Boologa Vaikundam, Srirangam, where
          everyone in the Universe have an ambition to live during their
          lifetime, especially during their retired livelihood. Our project is
          situated very near to Thayar Sannidhi which is helpful for easy
          navigation, also an 8 passenger lift with ARD (Automatic Rescue
          Device) facility to cater the needs of all walks of life. We are happy
          to state that the first project in Srirangam to possess the mandatory
          registration with RERA numbered as TN/16/BUILDING/0330/2018. We assure
          MV Vistara will fulfill the ambitions of Srirangam-loving people
          spread all over the world.
        </p>
        <h4>Location Advantages</h4>
        <ul class="list-checked">
          <li><span>Around 1km from Srirangam Thayar Sannadhi.</span></li>
          <li><span>Lush Green Environment</span></li>
          <li><span>2km from Bus Stand/Railway Station.</span></li>
          <li><span>3km from Government Butterfly Park.</span></li>
        </ul>
      </div>
    </div>
    <div class="c">
      <iframe
        class="gmapvistara"
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3918.2907756125733!2d78.68257536474216!3d10.86547434226112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3baaf677a73db341%3A0x9722303799dcab1b!2sRanganayaki+Thaayaar+Sannadhi%2C+33%2C+N+Uthrai+St%2C+Sriramapuram%2C+Srirangam%2C+Tiruchirappalli%2C+Tamil+Nadu+620006!3m2!1d10.8639689!2d78.6890763!4m5!1s0x3baaf7c1b7e4dc59%3A0xaa1c44bdf6e1e003!2sMV+Vistara%2C+Srirangam%2C+Tamil+Nadu+620006!3m2!1d10.8681444!2d78.68073059999999!5e0!3m2!1sen!2sin!4v1545022870236"
        height="450"
        frameborder="0"
        style="border:0"
        allowfullscreen
      ></iframe>
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
    <h2 class="c page-break">Words from our customers</h2>
    <div :key="componentKey" class="c review-slider print-small">
      <!-- window.innerWidth on slides instead of w-100p -->
      <div class="w-100p review-c">
        <Review :reviews="reviews[0]"></Review>
      </div>
      <div class="w-100p review-c page-break page-break-after">
        <Review :reviews="reviews[1]"></Review>
      </div>
      <div class="w-100p review-c">
        <Review :reviews="reviews[2]"></Review>
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
    <!-- <img src="@/assets/main_cover.jpg" alt="" class=""> -->
    <div
      class="h-500 page-break"
      style="background: url('/main_cover.jpg') 30% 0% no-repeat; background-size: cover;"
    >
      <div class="row">
        <div class="col-md2"></div>
        <div class="col-md2 c lg-hide">
          <!-- <h2 class="c c-white">Temple City</h2>
          <h3 class="c c-white">Peaceful place for you</h3> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";
import Review from "@/components/Review.vue";
import { tns } from "@/../node_modules/tiny-slider/src/tiny-slider";
import "@/../node_modules/tiny-slider/dist/tiny-slider.css";
import * as help from "@/js/helpers.js";

export default {
  name: "home",
  components: {
    Carousel,
    Review
  },
  data() {
    return {
      componentKey: 0,
      images: [
        {
          src: require("@/assets/mvb.jpg"),
          alt: "mv brindhavan homes",
          heading: "MV Vistara",
          caption: "Defines Itself"
        },
        {
          src: require("@/assets/mvb.jpg"),
          alt: "mv dwaraka homes",
          heading: "MV Builders",
          caption: "Friendly Companion for Construction Business"
        }
      ],
      reviews: [
        {
          review:
            "This new project ventured by M.V. Builders will certainly bring feel of confidence and Security to those who will take advantage of buying. Mr. K. Muraliidharan is quite dedicated in giving quality product to the society and ensures best is given irrespective of the challenges which comes along the project. I wish all success to Mr. K. Muralidharan and team.",
          reviewer: "Venkatramanan. M",
          designation: "chaitanya kutir owner",
          src: require("@/assets/rv1.jpg")
        },
        {
          review:
            "I am a Super Senior Citizen and my son bought me a flat in 2014 in MV. Brindhavan Homes in Parsn Srirengapura at Melur Road, Srirangam. This apartment was sold to me by an effecient builder Shri K. Muralidharan, owner of MV Builders. Perfect match for money invested. The quality of construction is so good and lot of modifications were carried out to our choice by the builder. A very honest and clean builder who kept the time commitment as his utmost priority in handing over the finished property. Also he consistently helps and attends our call even now to take care of every maintenance in the building. Technically a very sound person and he has used his technical expertise in taking care of high standards in the construction and finishing of every apartment. Financial transactions, keeping up commitments, timely handing over, facilitating registration process and after sales service, the builder is the best in the current scenario. In a nutshell I lead a hassle free, comfortable and peaceful life in my apartment. 100% Best Buy. Best wishes to him in all his new ventures.",
          reviewer: "V. Kamala",
          designation: "Senior Citizen",
          src: require("@/assets/rv2.jpg")
        },
        {
          review:
            "It's been a pleasure and satisfying experience to do Business with Mr. K. Muralidharan (M.V.Builders). They are a strong team of people & project after project the outcomes have only got better & better. MV builders never compromise quality and detailing, exceptional design and craftsmanship. Best part is their friendly approach, transparent transactions and perfect documentations. Strategic location for most of the projects is also a plus. In total, a property from M.V.Builders is fairly priced , value for money and a best home.",
          reviewer: "Mrs. HARINI and Mr. ARVIND.",
          designation: "MV Pranavm, MV Brindhavan clients",
          src: require("@/assets/rv3.jpg")
        }
      ]
    };
  },
  mounted() {
    let reviewSlider = tns({
      container: ".review-slider",
      items: 1,
      mode: "carousel",
      // lazyload: true,
      nav: true,
      // navPosition: "top",
      // gutter: -100,
      edgePadding: 100,
      // mouseDrag: true,
      controls: true,
      arrowKeys: true,
      speed: 600,
      controlsText: ["<", ">"],
      autoplayButtonOutput: false,
      // autoplayHoverPause: true,
      // autoHeight: true,
      // fixedWidth: (function() {
      //   return window.innerWidth - window.innerWidth / 8;
      // })(),
      autoWidth: true,
      slideBy: "page",
      // slideBy: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        300: {
          disable: true
        },
        960: {
          disable: false,
          edgePadding: 0,
          autoWidth: false,
          fixedWidth: window.innerWidth
        },
        1100: {
          edgePadding: 50
        }
      }
    });

    let printMQL = window.matchMedia("print");

    printMQL.addListener(function(mql) {
      if (mql.matches) {
        reviewSlider.destroy();
      }
    });

    // try vue js component reload
    var that = this;
    // var rslides = document.querySelectorAll('.w-100p');

    var rebuildSlides = help.debounce(
      function() {
        // var rslides = document.querySelectorAll('.w-100p p');
        // for (var i = 0; i < rslides.length; i++) {
        //   rslides[i].style.width = window.innerWidth;
        // }
        // slider.destroy();
        // slider = slider.rebuild();
        // console.log("destroyed");
        // setTimeout(function() {
        //   slider = slider.rebuild();
        //   // slider.refresh();
        // }, 116);
        // console.log(slider); // vuejs component remount
        // // slider.refresh();

        if (that.$route.name === "home") {
          // console.log(that.$route.name === "home");
          // that.$router.push({ path: '/' });
          // that.$router.go();
          // that.$data.componentKey++;
          // slider = slider.rebuild();
        }
        // location.reload();
      },
      250,
      false
    );

    window.addEventListener("resize", rebuildSlides);
  }
};
</script>

<style lang="scss">
.home .tns-inner {
  background-color: rgb(250, 235, 215);
}

.tns-controls {
  position: relative;
  top: 300px;
  z-index: 20;
}

button[data-controls] {
  background-color: rgba(0, 0, 0, 0.7);
  border: 0;
  color: white;
  width: 30px;
  height: 40px;
  font-size: 24px;
}

button[data-controls="next"] {
  position: absolute;
  right: 10px;
}

button[data-controls="prev"] {
  margin-left: 10px;
}

.tns-nav button {
  width: 17px;
  height: 17px;
  background-color: #000;
  border: 2px solid white;
  border-radius: 50%;
  margin-right: 4px;
}

.gmapvistara {
  width: 100%;
}
</style>
