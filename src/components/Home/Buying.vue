<template>
  <div>
    <div class="container-fluid">
      <p>WHAT WE BUY OR SELL?</p>
      <p class="second">WE BUY AND SELL</p>
      <h1>ANY TYPE OF SCRAP</h1>
      <hr />
    </div>

    <Cards />
    <Cards />
    <Cards />
  </div>
</template>

<script>
import Cards from "./Cards";
export default {
  components: {
    Cards
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  text-align: center;
  margin-top: 100px;
  .second {
    font-size: 30px;
    background-image: linear-gradient(to right, #7ed56f, #28b485);
    display: inline-block;
    color: transparent;
    -webkit-background-clip: text;
    letter-spacing: 2px;
    font-weight: 300;
  }
  h1 {
    background-image: linear-gradient(to right, #7ed56f, #28b485);

    color: transparent;
    -webkit-background-clip: text;
    margin-bottom: 0;
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  hr {
    width: 10%;
    border: 0.1px solid gray;
  }
}
</style>
