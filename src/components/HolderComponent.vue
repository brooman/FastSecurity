<template>
  <main>
    <div class="container">
      <header>
        <slot name="header">
          <h1> {{ title }} </h1>
        </slot>
      </header>
      <slot name="image" />
      <div class="text">
        <slot name="text">
          {{ text }}
        </slot>
      </div>
    </div>
  </main>
</template>

<script>
export default {
	name: 'HolderComponent',
	props: {
		title: {
			type: String,
			required: false,
			default: 'default'
		},
		image: {
			type: String,
			required: false,
			default: 'default'
		},
		text: {
			type: String,
			required: false,
			default: 'default'
		}
	},
	data: function() {
		return {
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 100vh;
}
header {
	align-self: flex-start;
	margin: 30px 0 0 20px;
}

.text {
	width: 58%;
	word-spacing: -2px;
}

</style>