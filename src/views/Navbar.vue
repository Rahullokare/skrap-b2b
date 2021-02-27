<template>
  <div class="container">
    <nav class="navbar navbar-dark fixed-top navbar-expand-lg">
      <a class="navbar-brand text-primary" href="#"
        ><img src="../assets/logo-skrap.png" alt="logo"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/">
              <a class="nav-link" href="#"
                >Home <span class="sr-only">(current)</span></a
              >
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">
              <a class="nav-link" href="#">About us</a>
            </router-link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              We Buy
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              We Sell
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> How it Works? </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> Send Enquiry </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> Catalogue </a>
          </li>
          <li class="nav-item">
            <router-link to="/contact">
              <a class="nav-link" href="#"> Contact Us </a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar-collapse {
  background-color: #000 !important;
}
a {
  text-decoration: none !important;
}
.navbar {
  // height: 101px;

  z-index: 9000;
  // background-color: rgba(0, 0, 0, 0.5);
  background-color: #000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  ul li {
    color: white;
    .nav-link {
      color: #fff;
      font-size: 14px;
      font-weight: 500;
    }
  }
  .navbar-brand {
    // margin-right: 50px;
    height: 100px;

    img {
      max-width: 47%;
      height: auto;
    }
  }
}
.dropdown-menu {
  background-color: #000;
}
.dropdown-item {
  color: #fff;
  border-bottom: 1px dotted #212121;
}
.dropdown-item:hover {
  background-color: #000;
  color: #fff;
  border-bottom: 1px solid #ffe000;
}
@media (min-width: 992px) and (max-width: 1800px) {
  .dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0; // remove the gap so it doesn't close
  }
}
@media (max-width: 992px) {
  .navbar-collapse {
    background-color: #000 !important;
  }
}
</style>
