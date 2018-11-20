<template lang="html">
  <div id="contact-page">
    <div class="h-300 pinot-noir__gradient">
      <div class="c c-white flex flex-col flex-aic flex-jcc h-100p">
        <h2>MV Builders</h2>
        <h5>Our improvement directly relates to our Experience</h5>
      </div>
    </div>
    <div class="c">
      <h2 class="c tac">MV Builders <br> <small class="mono">yours friendly Companion</small></h2>
      <p class="para d-center"><span>We are widely known for lucid way of choosing grounds for construction in green expansive environment. Our immense experience in apartment building with affordable price range attracts the buyers easily. We also provide clear title and legal opinion from eminent lawyers. Our floor plans according to vasthu and sense of architecture with day light optimization, ventillation optimization, etc., are quite impressive. We are well known for using quality tools in construction, quality workers and quality jobs to provide complete housing solution.</span></p>
    </div>
    <div class="row c">
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
    <div class="pinot-noir__gradient">
      <div class="c c-white hero-padding"><h2>Founder</h2>
        <!-- <img src="https://source.unsplash.com/480x320?men" alt=""> -->
        <div class="row">
          <div class="col-sm2">
            <img src="@/assets/man.jpg" alt="Founder">
            <h5 class="mt2">K Muralidharan</h5>
            <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus amet consectetur, doloremque maxime molestias id, veniam nihil consequuntur nulla, tempore velit eveniet tenetur voluptates porro autem quis, iusto placeat.</p>
          </div>
          <div class="col-sm2 c lg-hide">
            <h2 class="c">Decades of experience</h2>
            <h3 class="c">Pioneer in the housing field</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-attached">
      <img src="https://source.unsplash.com/1920x500?construction" alt="" class="mw-100">
    </div>
    <div class="c">
      <h3>Feel free to contact us</h3>
      <p>see contact page for further information.</p>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "about",
  components: {
    Card
  }
};
</script>

<style lang="scss">
</style>
