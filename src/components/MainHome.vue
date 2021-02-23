<template>
  <div>
    <Header />
    <Cursore />
    <Buying />
    <Whyus />
    <Contactus />
  </div>
</template>

<script>
import Contactus from "./Contactus.vue";
import Buying from "./Home/Buying.vue";
import Cursore from "./Home/Cursore";
import Header from "./Home/Header";
import Whyus from "./Home/Whyus.vue";
export default {
  components: {
    Header,
    Cursore,
    Buying,
    Whyus,
    Contactus
  }
};
</script>

<style lang="scss" scoped></style>
