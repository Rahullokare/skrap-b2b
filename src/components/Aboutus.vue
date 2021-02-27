<template>
  <div>
    <div class="container-fluid contact">
      <div>
        <p class="main-text">About Us</p>
        <p class="main-text">Call: 12345-69871</p>
      </div>
    </div>
    <div class="container-fluid">
      <p class="start">WELCOME TO</p>
      <h1>Skrapnest</h1>
      <br />
      <span>SCRAP BUYING & SCRAP SELLING IS OUR SPECIALITY</span>
      <hr />
      <p class="content container">
        S.R Enterprises is an established family run business in the heart of
        Hyderabad City dealing in all types of scrap metals. We have strong
        commercial traders in India enabling us to pay the best price possible.
        This means that we pay higher than our competitors 99% of the time. We
        pay top prices for all metals including Aluminium Scarp, Battery Scrap,
        Brass Scrap, Computer Scrap, Conveyor Belt, Copper Scrap, Demolishing
        Work, DG Set, Electrical Scrap, Eva Rubber, Ferrous And Nonferrous, GI
        Scrap, Glass Scrap, Iron Pipes Scrap, Steel Pipes Scrap, Iron Scrap,
        Lead Scrap, Motor Parts Scrap, Nickel Scrap, Office Furnitures, Old Air
        Condition, Old Machinery, Old Vehicles, Pet Bottle, Plastic Scrap, PVB
        Rubber, Solar Scrap, Stainless Steel, TMT Steel Scrap, Wooden Scrap and
        many more.
        <br />
        <br />
        We buy all grades of scrap from a variety of sources; from local
        plumbers to demolition sites and other metal merchants. We can offer
        collection services by either skips or roll-on-off bins. We pay top
        prices in Hyderabad India for all scrap metal. In addition, we can offer
        instant payment. S.R Enterprises are your fully licensed,
        environmentally friendly, scrap metal merchants working across Hyderabad
        India. We pay top prices for your scrap metal, as well as providing you
        with a friendly and professional service to ensure you get the best deal
        every time
      </p>
    </div>
    <Contactus />
  </div>
</template>

<script>
import Contactus from "./Contactus";
export default {
  components: {
    Contactus,
  },
};
</script>

<style lang="scss" scoped>
.contact {
  height: 500px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url("../assets/alu-scrap_1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px !important;
}
.main-text {
  font-size: 70px;
  font-weight: bold;
  color: white;
}
@media (max-width: 768px) {
  .main-text {
    font-size: 30px;
  }
}
.container-fluid {
  text-align: center;

  .start {
    margin-top: 100px;
  }

  h1 {
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;
    background-image: linear-gradient(to right, #7ed56f, #28b485);
    display: inline-block;
    color: transparent;
    -webkit-background-clip: text;
    letter-spacing: 2px;
    margin-bottom: 0;
  }
  span {
    background-image: linear-gradient(to right, #7ed56f, #28b485);
    display: inline-block;
    color: transparent;
    -webkit-background-clip: text;
    letter-spacing: 2px;
    font-weight: 300;
    font-size: 30px;
  }
  hr {
    width: 10%;
    border: 0.1px solid gray;
  }
  .content {
    text-align: center;
    margin-top: 80px;
  }
}
</style>
