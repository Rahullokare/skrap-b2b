<template>
  <!-- carousel -->
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          class="d-block w-100"
          src="https://images.unsplash.com/photo-1535402970399-f27bd420e4fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
          alt="First slide"
        />
        <div class="carousel-caption d-none d-md-block">
          <h1>Lorem ipsum dolor</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            amet magnam laudantium minima vero architecto?
          </p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
          alt="Second slide"
        />
        <div class="carousel-caption d-none d-md-block">
          <h1>Lorem ipsum dolor</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            amet magnam laudantium minima vero architecto?
          </p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="https://images.unsplash.com/photo-1612965110667-4175024b0dcc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
          alt="Third slide"
        />
        <div class="carousel-caption d-none d-md-block">
          <h1>Lorem ipsum dolor</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            amet magnam laudantium minima vero architecto?
          </p>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.carousel-item img {
  width: auto;
  height: 500px;
  max-height: 500px;
}
.carousel-item {
  background-color: rgba(0, 0, 0, 0.5);
}
.carousel-caption {
  bottom: 150px !important;
}
</style>
