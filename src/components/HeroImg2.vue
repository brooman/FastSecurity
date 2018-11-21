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
  background: url('../assets/images/road.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
  filter: saturate(70%);
}
.display-1{
  color: #fff;
  font-size: 5rem;
  line-height: 5rem;
  text-shadow: 1rem 1rem 5rem #000; 
  margin-bottom: 5rem;
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

@media ( max-width: 600px) {
  
  .display-1{
  font-size: 4rem;
  line-height: 4rem;
}

  .display-2 {
  font-size: 2rem;
  line-height: 2.2rem;
  }      
}

</style>
