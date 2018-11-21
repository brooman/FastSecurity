<template>
  <div class="hero">
    <div class="container">
      <p class="lead has-text-centered is-size-5 is-size-3-tablet is-size-1-desktop">Many people still think Saab makes cars, and that is correct. We are on the go for the future. Saab is very much alive and well, as one of the world’s most innovative companies. And now we are proud to present our car for the future: FastSecurity, FS.</p>
      <a
        class="contact-link" 
        href="#"
      >Contact ></a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .hero {
        font-family: AG-Bold;
        height: 100vh;
        justify-content: center;
    }

    .container {
        width: 70vw;
        height: 80vh;
        margin-top: 10vh;
        margin-right: auto;
        margin-left: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .is-cyan {
      background-color: aqua;
      border-color: transparent;
      color: #000;
    }

    .contact-link {
      text-decoration: underline;
      color: #555;
    }
</style>
