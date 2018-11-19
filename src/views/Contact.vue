<template lang="html">
  <div id="contact-page">
    <div class="h-300 twitch__gradient"></div>
    <h1 class="c">Feel Free to Contact Us</h1>
    <p class="c"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A suscipit soluta, quis ducimus eum magni nostrum repellendus nobis, deserunt, aperiam accusantium inventore vero aliquam mollitia assumenda rem cumque, quo ea.</span><span>Voluptas commodi repellat totam, suscipit ad voluptatibus tempora vero, asperiores atque cum. Quaerat similique est laudantium, praesentium aperiam. Consequuntur quos consequatur, quam nihil minima architecto enim cum iste tempora ea?</span></p>
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
    <div class="c">
      <h2>Quick Email:</h2>
      <ContactForm></ContactForm>
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";

export default {
  components: {
    ContactForm
  }
};
</script>

<style lang="scss">
</style>
