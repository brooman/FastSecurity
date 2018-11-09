<template>
  <nav 
    class="navbar" 
    role="navigation" 
    aria-label="main navigation"
  >
    <div class="navbar-start">
      <!--<img src="../assets/images/saab.png">-->
      <img src="../assets/images/logo.svg">
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-light">
            SV
          </a>
          <a class="button is-light">
            EN
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
  img {
   width: 100px;
   max-height: 100px;
  }
  .navbar {
    display: flex;
    position: fixed !important;
    justify-content: space-between;
    width: 100%;
    background-color: transparent !important;
  }
  .navbar-start {
    max-width: 50%;
    padding-left: 20px;
  }
  .navbar-end {
    max-width: 50%;
    padding-right: 20px;
  }
</style>
