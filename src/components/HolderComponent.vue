<template>
  <main>
    <div class="container">
			<header>
    		<slot name="header">
					<h1>{{ title }}</h1>
				</slot>
  		</header>
			<slot name="image">
			</slot>
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
	data: function() {
		return {
		}
	},
	props: [
		'title',
		'image',
		'text'
	]
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