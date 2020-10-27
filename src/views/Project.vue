<template lang="html">
  <div id="project-page">
    <div class="h-300 purple-bliss__gradient">
      <div class="c c-white flex flex-col flex-aic flex-jcc h-100p">
        <h2 class="times ttu">MV Builders</h2>
        <h5 class="tac">Good Projects are the wealth of a Company</h5>
      </div>
    </div>
    <!-- <h1 class="c">List of Our Projects</h1> -->
    <!-- <h1 class="c">Our creations to make happy world</h1> -->
    <h1 class="c">Our creations for happy world</h1>
    <p class="c">
      <span
        >All our projects are designed and constructed with a perfect blend of
        internal amenities and external infrastructure. In addition, we provide
        the members of the MV family, the pleasure of living in a
        <span class="fz-120p c-green nowrap-text">Lush Green Environment</span>
        with well laid infrastructure amenities and 24x7 copious continuous
        essential services. An absolute combination of green and dwelling with
        peaceful, satisfied ambience assures a calm living.</span
      >
    </p>
    <div class="c page-break">
      <h2 class="">
        Current Project: <span>(completed and ready to occupy)</span>
      </h2>
      <div class="row c">
        <div class="col-md2">
          <img
            src="@/assets/mvbm.jpg"
            data-bp="/mvb.jpg"
            alt="image of mv vistara"
            class="mw-100 img-bp"
          />
          <a class="vam mt2" href="/mvbuilders.pdf"
            ><img
              width="50"
              height="60"
              src="@/assets/pdf_file.png"
              alt="pdf file icon"
            /><span class="vab fz-140p">Download MV Vistara Brochure</span></a
          >
        </div>
        <div class="col-md2">
          <h3>MV Vistara <small class="mono">Defines Itself</small></h3>
          <p>
            Happy to launch our new project in Boologa Vaikundam, Srirangam,
            where everyone in the Universe have an ambition to live during their
            lifetime, especially during their retired livelihood. Our project is
            situated very near to Thayar Sannidhi which is helpful for easy
            navigation, also an 8 passenger lift with ARD (Automatic Rescue
            Device) facility to cater the needs of all walks of life. We are
            happy to state that the first project in Srirangam to possess the
            mandatory registration with RERA numbered as
            TN/16/BUILDING/0330/2018. We assure MV Vistara will fulfill the
            ambitions of Srirangam-loving people spread all over the world.
          </p>
          <h4 class="print-margin-top">Location Advantages</h4>
          <ul class="list-checked">
            <li><span>Around 1km from Srirangam Thayar Sannadhi.</span></li>
            <li><span>Lush Green Environment</span></li>
            <li><span>2km from Bus Stand/Railway Station.</span></li>
            <li><span>3km from Government Butterfly Park.</span></li>
          </ul>
        </div>
      </div>
      <div>
        <p class="para c d-center">
          <span class="fz-160p c-red nowrap-text">Hurry up!</span> Already 15
          people registered and only 5 homes left for sale. Visit the home and
          make it yours.
          <router-link @click.native="$scrollToTop" to="/contact"
            >Click Here for Contact details
          </router-link>
          or <a class="" href="tel:+919842430871">call +91 9842430871</a>
        </p>
      </div>
      <div class="row c">
        <h3 class="tac">Route Map</h3>
        <img
          src="@/assets/map.jpg"
          alt="image of navigation route map for mv vistara"
          class="mw-100 md-hide"
        />
        <iframe
          title="google map of MV Vistara"
          class="gmapvistara"
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3918.2907756125733!2d78.68257536474216!3d10.86547434226112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3baaf677a73db341%3A0x9722303799dcab1b!2sRanganayaki+Thaayaar+Sannadhi%2C+33%2C+N+Uthrai+St%2C+Sriramapuram%2C+Srirangam%2C+Tiruchirappalli%2C+Tamil+Nadu+620006!3m2!1d10.8639689!2d78.6890763!4m5!1s0x3baaf7c1b7e4dc59%3A0xaa1c44bdf6e1e003!2sMV+Vistara%2C+Srirangam%2C+Tamil+Nadu+620006!3m2!1d10.8681444!2d78.68073059999999!5e0!3m2!1sen!2sin!4v1545022870236"
          height="450"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
      </div>

      <div class="row c page-break">
        <div class="col-md2">
          <h3 class="tac">Floor Plan</h3>
          <img
            src="@/assets/intm.jpg"
            data-bp="/int.jpg"
            alt="image of floor plan design"
            class="mw-100 img-bp"
          />
        </div>
        <div class="col-md2">
          <h3 class="tac">Modular Kitchen</h3>
          <img
            src="@/assets/kitchenm.jpg"
            data-bp="/kitchen.jpg"
            alt="photo of constructed modular kitchen"
            class="mw-100 img-bp"
          />
        </div>
      </div>

      <div class="row c page-break">
        <div class="col-md2">
          <h3 class="tac">Hall Design (Ceiling)</h3>
          <img
            src="@/assets/hall.jpg"
            alt="photo of hall design with ceiling"
            class="mw-100"
          />
        </div>
        <div class="col-md2">
          <h3 class="tac">Bedroom Design (Wardrobe)</h3>
          <img
            src="@/assets/bedroom.jpg"
            alt="photo of bedroom design with wardrobe"
            class="mw-100"
          />
        </div>
      </div>

      <div class="row c page-break">
        <div class="col-md2">
          <h3 class="tac">Car Parking Plan</h3>
          <img
            src="@/assets/car_parkingm.jpg"
            data-bp="/car_parking.jpg"
            alt="image of car parking design plan"
            class="mw-100 img-bp"
          />
        </div>
        <div class="col-md2">
          <h3 class="tac">Car Parking</h3>
          <img
            src="@/assets/carparkwide2m.jpg"
            data-bp="/carparkwide2.jpg"
            alt="photo of car parking"
            class="mw-100 img-bp"
          />
        </div>
      </div>
      <h2 class="hero-margin">Completed Projects</h2>
      <div class="row hero-margin">
        <div class="col-md2 flex-asc">
          <h3 class="accordion-title mb3 mt3 tal">Chaitanya Kutir 2017</h3>
          <p class="pb3">
            On seeing all our earlier projects, Shri. Venkatramanan from sharjah
            having a very good land available very near to the Srirangam Temple
            rampart wall.
          </p>
          <p class="pb3">
            with our enormous dedication and ultimate support from our architect
            and structural consultant and of course financial support from Shri.
            Venkatramanan.
          </p>
          <p class="pb3">
            The project is
            <span class="fz-120p c-green">completed within nine months</span>
            and yielded very positive results as the owner himself holds all the
            five units constructed and running a successful service apartment
            venture.
          </p>
          <p class="pb3">
            We proudly say upon all the above projects "Chaitany Kutir" gives
            immense support technically to us and financially to the owner.
          </p>
        </div>
        <div class="col-md2">
          <div class="card p3 mw-80 grey-bordered">
            <img
              src="@/assets/chaitanyakutir.jpeg"
              alt="Chaitanya Kutir"
              class="mw-100"
            />
            <h4 class="pl3 mb3 mt3">Chaitanya Kutir</h4>
          </div>
        </div>
      </div>
      <div class="row hero-margin page-break">
        <div class="col-md2 order__behind">
          <div class="card p3 mw-80 grey-bordered">
            <img src="@/assets/mvdwaraka.jpg" alt="MV Dwaraka" class="mw-100" />
            <h4 class="mb3 mt3">MV Dwaraka</h4>
          </div>
        </div>
        <div class="col-md2 flex-asc">
          <h3 class="accordion-title mb3 mt3 tal">MV Dwaraka - 2016</h3>
          <p class="pb3">
            On getting the astonishing results from pranavm and brindhavan, we
            decided to have condominiums that too in a duplex house pattern (ie-
            hall, kitchen, bedroom and toiletries at one level and additional
            two bedrooms with balconies and toiletries at next level)
          </p>
          <p class="pb3">
            This proposal also clicked as having a very positive response as
            well as gives a delightful spatious ambience for the members of MV
            family.
          </p>
        </div>
      </div>
      <h3 class="">Aparajitha and MV Brindhavan - 2015</h3>
      <div class="row hero-margin">
        <div class="col-md2 card grey-bordered">
          <img src="@/assets/aparajitha.jpg" alt="Aparajitha" class="mw-100" />
          <h4 class="mb3 mt3">Aparajitha</h4>
          <p>
            While doing brindhavan Project, an NRI wanted to have the project in
            a similar nature. We bought the plot and developed four large
            condominiums and at present all the houses are utilized as service
            apartments. We proudly say that aparajitha is the successful venture
            as it yields very good results for both builder and the customer.
          </p>
        </div>
        <div class="col-md2 card grey-bordered">
          <img
            src="@/assets/mvbrindhavan.jpg"
            alt="MV Brindhavan"
            class="mw-100"
          />
          <h4 class="mb3 mt3">MV Brindhavan</h4>
          <p>
            On completion of MV Pranavm, the next project brindhavan designed in
            such a way that the same amenities in a spatious floor space. That
            idea gives us pleasant results and comparitvely
            <span class="fz-120p c-green"
              >we sold all the units before completion</span
            >.
          </p>
        </div>
      </div>
      <div class="row hero-margin page-break">
        <div class="col-md2 card grey-bordered order__behind">
          <img
            src="@/assets/mvpranavm.jpg"
            alt="Chaitanya Kutir"
            class="mw-100"
          />
          <h4 class="pl3 mb3 mt3">MV Pranavm</h4>
        </div>
        <div class="col-md2 flex-asc">
          <h3 class="accordion-title mb3 mt3 tal">MV Pranavm - 2013</h3>
          <p class="pb3">
            pranavm defines the
            <span class="fz-140p c-green">commencement of a creation</span>
            wherein we found apt our first project named as pranavm.
          </p>
          <p class="pb3">
            It consists of only four compact units with a huge UDS area (almost
            equivalent to floor area)
          </p>
          <p class="pb3">
            All units have car parkings, modular kitchen and built-in wardrobes
            and cupboards.
          </p>
          <p class="pb3">
            Being the first of its kind, all four units sold within a span of a
            month upon completion.
          </p>
        </div>
      </div>
      <!-- <div class="accordion hero-margin">
        <div class="accordion-set tac ">
          <h3 class="accordion-title mb3 mt3 tal">Chaitanya Kutir 2017</h3>
          <div class="accordion-data h-show d-center card hero-margin">
            <img src="@/assets/chaitanyakutir.jpeg" alt="Chaitanya Kutir" class="mw-100">
            <h4 class="mb3 mt3">Chaitanya Kutir</h4>
          </div>
        </div>
        <div class="accordion-set tac ">
          <h3 class="accordion-title mb3 mt3 tal">MV Pranavm - 2016</h3>
          <div class="accordion-data d-center card hero-margin">
            <img src="@/assets/mvpranavm.jpg" alt="MV Pranavm" class="mw-100">
              <h4 class="mb3 mt3">MV Pranavm</h4>
          </div>
        </div>
        <div class="accordion-set tac ">
          <h3 class="accordion-title mb3 mt3 tal">MV Dwaraka - 2015</h3>
          <div class="accordion-data d-center card hero-margin">
            <img src="@/assets/mvdwaraka.jpg" alt="MV Dwaraka" class="mw-100">
              <h4 class="mb3 mt3">MV Dwaraka</h4>
          </div>
        </div>
        <div class="accordion-set tac ">
          <h3 class="accordion-title mb3 mt3 tal">Aparajitha and MV Brindhavan - 2015</h3>
          <div class="accordion-data d-center ">

            <div class="row">
              <div class="col-md2 card">
                <img src="@/assets/aparajitha.jpg" alt="Aparajitha" class="mw-100">
                  <h4 class="mb3 mt3">Aparajitha</h4>
              </div>
              <div class="col-md2 card hero-margin">
                <img src="@/assets/mvbrindhavan.jpg" alt="MV Brindhavan" class="mw-100">
                  <h4 class="mb3 mt3">MV Brindhavan</h4>
              </div>
            </div>

          </div>
        </div>
      </div> -->
      <!-- accordion layout -->
    </div>
  </div>
</template>

<script>
var BigPicture = require("bigpicture");

export default {
  name: "project",
  mounted() {
    // let accordionTriggers = document.querySelectorAll(
    //   ".accordion .accordion-set h3"
    // );
    //
    // for (let i = 0; i < accordionTriggers.length; i++) {
    //   accordionTriggers[i].addEventListener("click", function() {
    //     this.nextSibling.classList.toggle("h-show");
    //   });
    // }
    document.getElementById("project-page").onclick = function(e) {
      if (
        e.target.tagName === "IMG" &&
        !e.target.classList.contains("img-bp")
      ) {
        BigPicture({
          el: e.target
        });
      } else if (
        e.target.tagName === "IMG" &&
        e.target.classList.contains("img-bp")
      ) {
        BigPicture({
          el: e.target,
          gallery: document.querySelectorAll(".img-bp"),
          loop: true
        });
      }
    };
  }
};
</script>

<style lang="scss">
.mw-80 {
  max-width: 80%;
}

.fz-110p {
  font-size: 110%;
}

.order__behind {
  order: initial;
}

@media all and (max-width: 768px) {
  .order__behind {
    order: 1;
  }
}
</style>
