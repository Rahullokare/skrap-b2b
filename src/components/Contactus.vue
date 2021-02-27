<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 contact-image">
        <h1>
          Let's Get <br />
          in Touch!
        </h1>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 form-container">
        <!-- form -->
        <form @submit.prevent="pressed">
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="inputEmail4">Name</label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                v-model="user.name"
                required
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                v-model="user.email"
                required
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="contact">Contact</label>
              <input
                type="text"
                class="form-control"
                id="contact"
                v-model="user.contact"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              v-model="user.message"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn send">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Aboutus",
  props: {
    contentheading: String,
    mainContent: String,
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        contact: "",
        message: "",
      },
    };
  },
  methods: {
    pressed() {
      firebase
        .firestore()
        .collection("Users")
        .doc(this.user.email)
        .set(this.user)
        .then(() => {
          console.log("Data Save successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-image {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.8),
      rgba(40, 180, 133, 0.8)
    ),
    url("https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80");
  h1 {
    text-align: center;
    padding-top: 40px;
    font-size: 65px;
  }
}
.form-container {
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
  padding: 40px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.send {
  background-color: #000;
  color: white;
}
@media (max-width: 992px) {
  .contact-image {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    border-bottom-left-radius: 0px;
  }
  .form-container {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
}
.container {
  margin-top: 100px;
}
</style>
