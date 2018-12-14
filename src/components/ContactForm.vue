<template lang="html">
  <form class="flex flex-col hero-margin" action="contactform.php" id="contact-form" style="max-width: 620px;">
    <fieldset class="mb3 mt3 theme-bw-inverse">
      <label for="name">Name:</label>
      <input id="name" name="username" class="transparent-bg border-0 pl2" type="text" placeholder="your name">
    </fieldset>
    <fieldset class="mb3 mt3 theme-bw-inverse">
      <label for="email">Email:</label>
      <input id="email" name="email" class="transparent-bg border-0 pl2" type="text" placeholder="youremail@mail.com">
    </fieldset>
    <textarea class="mb3 mt3 p2 transparent-bg" name="message" rows="8" cols="80"></textarea>
    <input class="btn theme-bw-inverse p3" type="submit" name="submit" value="Send Message">
  </form>
</template>

<script>
export default {
  name: "ContactForm"
};
</script>

<style lang="scss">
input[type="text"] {
  width: 60%;
}

input[type="submit"] {
  font-size: 32px;
}

.border-0 {
  border: 0;
}

.transparent-bg,
#contact-form fieldset {
  background-color: transparent;
  color: white;
}
</style>
