<template>
  <footer id="dk-footer" class="dk-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-4">
          <div class="dk-footer-box-info">
            <a href="index.html" class="footer-logo">
              <img
                src="../assets/logo-skrap.png"
                alt="footer_logo"
                class="img-fluid"
              />
            </a>
            <p class="footer-info-text">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
            <div class="footer-social-link">
              <h3>Follow us</h3>
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <!-- End Social link -->
          </div>
          <!-- End Footer info -->
          <div class="footer-awarad">
            <img src="images/icon/best.png" alt="" />
            <p>Best Design Company 2019</p>
          </div>
        </div>
        <!-- End Col -->
        <div class="col-md-12 col-lg-8">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div class="contact-us" id="location">
                <div class="contact-icon">
                  <i class="fa fa-map-o" aria-hidden="true"></i>
                </div>
                <!-- End contact Icon -->
                <div class="contact-info">
                  <h3>Mumbai India</h3>
                  <p>5353 Road Avenue</p>
                </div>
                <!-- End Contact Info -->
              </div>
              <!-- End Contact Us -->
            </div>
            <!-- End Col -->
            <div class="col-md-6 col-sm-12">
              <div class="contact-us contact-us-last">
                <div class="contact-icon">
                  <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
                </div>
                <!-- End contact Icon -->
                <div class="contact-info">
                  <h3>123456789</h3>
                  <p>Give us a call</p>
                </div>
                <!-- End Contact Info -->
              </div>
              <!-- End Contact Us -->
            </div>
            <!-- End Col -->
          </div>
          <!-- End Contact Row -->
          <div class="row">
            <div class="col-md-12 col-lg-6">
              <div class="footer-widget footer-left-widget">
                <div class="section-heading">
                  <h3>Useful Links</h3>
                  <span class="animate-border border-black"></span>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">How it works</a>
                  </li>
                  <li>
                    <a href="#">Send Enquiry</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">catalogue</a>
                  </li>
                  <li>
                    <a href="#">Faq</a>
                  </li>
                </ul>
              </div>
              <!-- End Footer Widget -->
            </div>
            <!-- End col -->
            <div class="col-md-12 col-lg-6">
              <div class="footer-widget">
                <div class="section-heading">
                  <h3>Send Email</h3>
                  <span class="animate-border border-black"></span>
                </div>
                <p>
                  <!-- Don’t miss to subscribe to our new feeds, kindly fill the form below. -->
                  Reference site about Lorem Ipsum, giving information on its
                  origins, as well.
                </p>
                <form action="#">
                  <div class="form-row">
                    <div class="col dk-footer-form">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email Address"
                      />
                      <button type="submit" class="btn-logo">
                        <i class="fa fa-send"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <!-- End form -->
              </div>
              <!-- End footer widget -->
            </div>
            <!-- End Col -->
          </div>
          <!-- End Row -->
        </div>
        <!-- End Col -->
      </div>
      <!-- End Widget Row -->
    </div>
    <!-- End Contact Container -->

    <div class="copyright">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <span>Copyright © 2021, All Right Reserved</span>
          </div>
          <!-- End Col -->
          <div class="col-md-6 col-sm-12">
            <div class="copyright-menu">
              <ul class="footer-link">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- End col -->
        </div>
        <!-- End Row -->
      </div>
      <!-- End Copyright Container -->
    </div>
    <!-- End Copyright -->
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media (max-width: 992px) {
  #dk-footer {
    margin-top: 20%;
  }
}
footer {
  margin-top: 8%;
}
.footer-widget p {
  margin-bottom: 27px;
}
p {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 28px;
}

.animate-border {
  position: relative;
  display: block;
  width: 115px;
  height: 3px;
  background: linear-gradient(
    to right bottom,
    rgba(126, 213, 111, 0.8),
    rgba(40, 180, 133, 0.8)
  );
}

.animate-border:after {
  position: absolute;
  content: "";
  width: 35px;
  height: 3px;
  left: 0;
  bottom: 0;
  border-left: 10px solid #fff;
  border-right: 10px solid #fff;
  -webkit-animation: animborder 2s linear infinite;
  animation: animborder 2s linear infinite;
}

@-webkit-keyframes animborder {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  100% {
    -webkit-transform: translateX(113px);
    transform: translateX(113px);
  }
}

@keyframes animborder {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  100% {
    -webkit-transform: translateX(113px);
    transform: translateX(113px);
  }
}

.animate-border.border-white:after {
  border-color: #fff;
}

.animate-border.border-yellow:after {
  border-color: #f5b02e;
}

.animate-border.border-orange:after {
  border-right-color: #007bff;
  border-left-color: #007bff;
}

.animate-border.border-ash:after {
  border-right-color: #eef0ef;
  border-left-color: #eef0ef;
}

.animate-border.border-offwhite:after {
  border-right-color: #f7f9f8;
  border-left-color: #f7f9f8;
}

/* Animated heading border */
@keyframes primary-short {
  0% {
    width: 15%;
  }
  50% {
    width: 90%;
  }
  100% {
    width: 10%;
  }
}

@keyframes primary-long {
  0% {
    width: 80%;
  }
  50% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
}

.dk-footer {
  padding: 75px 0 0;
  background-color: #151414;
  position: relative;
  z-index: 2;
}
.dk-footer .contact-us {
  margin-top: 0;
  margin-bottom: 30px;
  padding-left: 80px;
}
.dk-footer .contact-us .contact-info {
  margin-left: 50px;
}
.dk-footer .contact-us.contact-us-last {
  margin-left: -80px;
}
@media (max-width: 768px) {
  .dk-footer .contact-us.contact-us-last {
    margin-left: 0 !important;
  }
  #location {
    margin-top: 68px;
  }
}
.dk-footer .contact-icon i {
  font-size: 24px;
  top: -15px;
  position: relative;
  color: #ffe000;
}

.dk-footer-box-info {
  position: absolute;
  top: -122px;
  background: #202020;
  padding: 40px;
  z-index: 2;
}
.dk-footer-box-info .footer-social-link h3 {
  color: #fff;
  font-size: 24px;
  margin-bottom: 25px;
}
.dk-footer-box-info .footer-social-link ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.dk-footer-box-info .footer-social-link li {
  display: inline-block;
}
.dk-footer-box-info .footer-social-link a i {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  background: #000;
  margin-right: 5px;
  color: #fff;
}
.dk-footer-box-info .footer-social-link a i.fa-facebook {
  background-color: #3b5998;
}
.dk-footer-box-info .footer-social-link a i.fa-twitter {
  background-color: #55acee;
}
.dk-footer-box-info .footer-social-link a i.fa-google-plus {
  background-color: #dd4b39;
}
.dk-footer-box-info .footer-social-link a i.fa-linkedin {
  background-color: #0976b4;
}
.dk-footer-box-info .footer-social-link a i.fa-instagram {
  background-color: #b7242a;
}

.footer-awarad {
  margin-top: 285px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 100%;
  -moz-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.footer-awarad p {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  margin-left: 20px;
  padding-top: 15px;
}

.footer-info-text {
  margin: 26px 0 32px;
  color: white;
}

.footer-left-widget {
  padding-left: 80px;
}

.footer-widget .section-heading {
  margin-bottom: 35px;
}

.footer-widget h3 {
  font-size: 24px;
  color: #fff;
  position: relative;
  margin-bottom: 15px;
  max-width: -webkit-fit-content;
  max-width: -moz-fit-content;
  max-width: fit-content;
}

.footer-widget ul {
  width: 50%;
  float: left;
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-widget li {
  margin-bottom: 18px;
}

.footer-widget p {
  margin-bottom: 27px;
}

.footer-widget a {
  color: #878787;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.footer-widget a:hover {
  color: #ffe000;
}

.footer-widget:after {
  content: "";
  display: block;
  clear: both;
}

.dk-footer-form {
  position: relative;
}
.dk-footer-form input[type="email"] {
  padding: 14px 28px;
  border-radius: 50px;
  background: #2e2e2e;
  border: 1px solid #2e2e2e;
}
.dk-footer-form input::-webkit-input-placeholder,
.dk-footer-form input::-moz-placeholder,
.dk-footer-form input:-ms-input-placeholder,
.dk-footer-form input::-ms-input-placeholder,
.dk-footer-form input::-webkit-input-placeholder {
  color: #878787;
  font-size: 14px;
}
.dk-footer-form input::-webkit-input-placeholder,
.dk-footer-form input::-moz-placeholder,
.dk-footer-form input:-ms-input-placeholder,
.dk-footer-form input::-ms-input-placeholder,
.dk-footer-form input::placeholder {
  color: #878787;
  font-size: 14px;
}
.dk-footer-form button[type="submit"] {
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px 24px 12px 17px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background: #ffe000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffe000,
    #799f0c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffe000,
    #799f0c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
}
.dk-footer-form button:hover {
  cursor: pointer;
}

/* ==========================

    Contact

=============================*/
.contact-us {
  position: relative;
  z-index: 2;
  margin-top: 65px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.contact-icon {
  position: absolute;
}
.contact-icon i {
  font-size: 36px;
  top: -5px;
  position: relative;
  color: #007bff;
}

.contact-info {
  margin-left: 75px;
  color: #fff;
}
.contact-info h3 {
  font-size: 20px;
  color: #fff;
  margin-bottom: 0;
}

.copyright {
  padding: 28px 0;
  margin-top: 55px;
  background-color: #202020;
}
.copyright span,
.copyright a {
  color: #878787;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
}
.copyright a:hover {
  color: #ffe000;
}

// .copyright-menu ul {
//   text-align: right;
//   margin: 0;
// }

// .copyright-menu li {
//   display: inline-block;
//   padding-left: 20px;
// }
.footer-link {
  display: flex;
  justify-content: space-evenly;
}
@media (max-width: 992px) {
  .footer-link {
    margin-top: 5%;
  }
  .footer-widget {
    padding-left: 80px;
  }
}
.btn-logo {
  padding: 5px 15px 5px 15px !important;
  right: 4px !important;
}
</style>
