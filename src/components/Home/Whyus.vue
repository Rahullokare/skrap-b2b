<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6 col-sm-12 col-md-12">
        <div class="main-img">
          <img
            class="img-fluid"
            src="https://images.unsplash.com/photo-1573621588731-8d6d46bb65bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt=""
          />
        </div>
      </div>
      <div class="col-lg-6 col-sm-12 col-md-12">
        <div class="headline">
          <h3>
            <span>WHY US?</span>
            <br />
            BECAUSE WE ARE LEADERS IN SCRAP TRADING.
          </h3>
          <hr />
          <div class="check-list">
            <ul>
              <li>
                <span>&#10003;</span> Fair Trade In Scrap For Over 70 Years
              </li>
              <li>
                <span>&#10003;</span> Fair Trade In Scrap For Over 70 Years
              </li>
              <li>
                <span>&#10003;</span> Fair Trade In Scrap For Over 70 Years
              </li>
              <li>
                <span>&#10003;</span> Fair Trade In Scrap For Over 70 Years
              </li>
              <li>
                <span>&#10003;</span> Fair Trade In Scrap For Over 70 Years
              </li>
              <li>
                <span>&#10003;</span> Fair Trade In Scrap For Over 70 Years
              </li>
              <li>
                <span>&#10003;</span> Fair Trade In Scrap For Over 70 Years
              </li>
            </ul>
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
.container-fluid {
  background-color: #f2f6f8;
  margin-top: 8%;

  .headline {
    margin-left: 5rem;

    h3 {
      margin-bottom: 0;
      font-weight: 900;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-top: 80px;

      span {
        color: #ed1c24;
        font-weight: 300;
      }
    }
    hr {
      width: 25%;
      margin-left: 0;
      border: 1px solid gray;
    }
  }
}
.check-list {
  margin-left: -2rem;
  margin-top: 80px;
  ul {
    list-style: none;
    li {
      display: flex;
      align-items: center;
      span {
        font-size: 29px;
        color: #ed1c24;
        margin-right: 1rem;
      }
    }
  }
}
</style>
