<template lang="html">
  <div id="contact-page">
    <div class="h-300 twitch__gradient">
      <div class="c c-white flex flex-col flex-aic flex-jcc h-100p">
        <h2 class="times ttu">MV Builders</h2>
        <h5>Good Contacts builds up the valuable harmony</h5>
      </div>
    </div>
    <div class="c">
      <h1 class="">Feel Free to Contact Us</h1>
      <div class="row">
        <div class="col-lg2">
          <p class="para hero-margin">Eventhough we are totally engaged in our own projects we are available for suggestions, improvements, vasthu corrections and any other type of housing related queries. With our wide experience we hope we can guide you in a appropriate manner.</p>
        </div>
        <div class="col-lg2">
          <div class="flex flex-aib c">
            <h3 class="p3">Email</h3>
            <p><a href="mailto:murlidhar28@gmail.com">murlidhar28@gmail.com</a></p>
          </div>
          <div class="flex flex-aib c">
            <h3 class="p3">Phone</h3>
            <p><a href="tel:+919842430871">9842430871</a></p>
          </div>
          <div class="flex c">
            <h4 class="p3">MS Vistara Location</h4>
            <img src="@/assets/vistaralocation.jpg" alt="" class="mw-100 icon-small">
          </div>
        </div>
      </div>
    </div>
    <div class="contact-bg">
      <div class="overlay"><div class="c">
        <div class="warn-site c-white para">Quick email service is currently not available</div>
        <h2 class="c-white">Quick Email:</h2>
        <ContactForm></ContactForm>
      </div></div>
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "contact",
  components: {
    ContactForm
  }
};
</script>

<style lang="scss">
.contact-bg {
  background: url("../assets/ebg.jpg");
  .overlay {
    background-color: rgba(0, 0, 0, 0.7);
  }
}
</style>
