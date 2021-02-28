<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-lg-4 col-sm-12 card-container">
        <div class="card" style="width: 18rem">
          <img
            class="card-img-top"
            src="../../assets/scrap-1.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h4 class="card-title font-bold">ALUMINIUM SCRAP</h4>
            <p class="card-text text-center">
              We buy your Aluminium Scarp and pay you highest price for your
              Aluminium Scarp, We also sell Aluminium Scarp at lowest price in
              the scrap market.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 col-sm-12 card-container">
        <div class="card" style="width: 18rem">
          <img
            class="card-img-top"
            src="../../assets/scrap-2.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h4 class="card-title font-bold">BATTERY SCRAP</h4>
            <p class="card-text text-center">
              We buy your Battery Scrap and pay you highest price for your
              Battery Scrap, We also sell Battery Scrap at lowest price in the
              scrap market.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 col-sm-12 card-container">
        <div class="card" style="width: 18rem">
          <img
            class="card-img-top"
            src="../../assets/scrap-3.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h4 class="card-title font-bold">BRASS SCRAP</h4>
            <p class="card-text text-center">
              We buy your Brass Scrap and pay you highest price for your Brass
              Scrap, We also sell Brass Scrap at lowest price in the scrap
              market.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 50px;
}
.card {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  border: none;
}
.card:hover {
  transform: scale(1.2);
  transition: all 0.5s;
}
@media (max-width: 992px) {
  .card-container {
    margin-top: 5% !important;
  }
  .card:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }
}
</style>
