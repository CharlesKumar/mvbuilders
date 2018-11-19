<template lang="html">
  <form class="flex flex-col d-center" action="contactmail.php" id="contact-form" style="max-width: 620px;">
    <fieldset class="mb3">
      <label for="name">Name:</label>
      <input id="name" name="username" type="text">
    </fieldset>
    <fieldset class="mb3">
      <label for="email">Email:</label>
      <input id="email" name="email" type="text">
    </fieldset>
    <textarea class="mb3" name="message" rows="8" cols="80"></textarea>
    <input class="btn theme-bw-inverse p3" type="submit" name="submit" value="Send Message">
  </form>
</template>

<script>
export default {
  name: "ContactForm"
};
</script>

<style lang="scss">
</style>
