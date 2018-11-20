<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="display-1">
          Customize your way.
        </h1>
        <h2 class="display-2">
          Here are our features for the future.
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero {
  height: 100vh;
  background: url('../img/road.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
  filter: saturate(70%);
}
.display-1{
  color: #fff;
  font-size: 5rem;
  text-shadow: 1rem 1rem 5rem #000; 
}
.display-2{
  color: #fff;
  font-size: 3rem;
  text-shadow: 1rem 1rem 5rem #000;
}
.hero-body {
  display: flex;
  align-items: center;
  text-align: center;
}

</style>
