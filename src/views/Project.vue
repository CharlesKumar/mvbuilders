<template lang="html">
  <div id="project-page">
    <div class="h-300 purple-bliss__gradient">
      <div class="c c-white flex flex-col flex-aic flex-jcc h-100p">
        <h2 class="times ttu">MV Builders</h2>
        <h5>Good Projects are the wealth of a Company</h5>
      </div>
    </div>
    <!-- <h1 class="c">List of Our Projects</h1> -->
    <!-- <h1 class="c">Our creations to make happy world</h1> -->
    <h1 class="c">Our creations for happy world</h1>
    <p class="c"><span>All our projects are designed and constructed with internal amenities and external infrastructure properly blended to. In addition we give the members of MV family, the pleasure in living the lush green environment, well laid infrastructure amenities, 24*7 copious continuous essential services perfect blend of green and dwelling. peaceful and satisfied ambience and calm living.</span></p>
    <div class="c">
      <h2 class="">Current Project:</h2>
      <div class="row c">
        <div class="col-md2">
          <img src="@/assets/MV2.jpg" alt="" class="mw-100">
        </div>
        <div class="col-md2">
            <h3>MV Vistara <small class="mono">defines itself</small></h3>
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
      <h2 class="hero-margin">Completed Projects</h2>
      <div class="row hero-margin">
        <div class="col-md2 flex-asc">
          <h3 class="accordion-title mb3 mt3 tal">Chaitanya Kutir 2017</h3>

        </div>
        <div class="col-md2">
            <div class="card">
              <img src="@/assets/chaitanyakutir.jpeg" alt="Chaitanya Kutir" class="mw-100">
              <h4 class="pl3 mb3 mt3">Chaitanya Kutir</h4>
            </div>
        </div>
      </div>
      <div class="row hero-margin">
        <div class="col-md2">
          <div class="card">
            <img src="@/assets/mvpranavm.jpg" alt="Chaitanya Kutir" class="mw-100">
            <h4 class="pl3 mb3 mt3">MV Pranavm</h4>
          </div>

        </div>
        <div class="col-md2 flex-asc">
            <h3 class="accordion-title mb3 mt3 tal">MV Pranavm - 2016</h3>
        </div>
      </div>
      <div class="row hero-margin">
        <div class="col-md2 flex-asc">
          <h3 class="accordion-title mb3 mt3 tal">MV Dwaraka - 2015</h3>

        </div>
        <div class="col-md2">
            <div class="card">
              <img src="@/assets/mvdwaraka.jpg" alt="MV Dwaraka" class="mw-100">
              <h4 class="mb3 mt3">MV Dwaraka</h4>
            </div>
        </div>
      </div>
      <h3 class="">Aparajitha and MV Brindhavan - 2015</h3>
      <div class="row hero-margin">
        <div class="col-md2 card">
          <img src="@/assets/aparajitha.jpg" alt="Aparajitha" class="mw-100">
            <h4 class="mb3 mt3">Aparajitha</h4>
        </div>
        <div class="col-md2 card">
          <img src="@/assets/mvbrindhavan.jpg" alt="MV Brindhavan" class="mw-100">
            <h4 class="mb3 mt3">MV Brindhavan</h4>
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
      </div> --> <!-- accordion layout -->
    </div>
  </div>
</template>

<script>
export default {
  name: "project",
  mounted() {
    let accordionTriggers = document.querySelectorAll(
      ".accordion .accordion-set h3"
    );

    for (let i = 0; i < accordionTriggers.length; i++) {
      accordionTriggers[i].addEventListener("click", function() {
        this.nextSibling.classList.toggle("h-show");
      });
    }
  }
};
</script>

<style lang="scss">
</style>
