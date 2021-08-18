<template>
	<div>
		<h1 ref="myref">Hook tutorial</h1>
		<p>My name is: {{ name }}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: 'Ahmed Sophyudden'
			}
		},

		beforeCreate(){
			console.log('beforeCreate', this.name);
			//possible use here to check login or not
		},

		created() {
			//call mostly intial data from it...
			console.log('data and other function is available but not html', this.name);
		},

		beforeMount(){

		},

		mounted(){
			console.log('mounted', this.$refs.myref)
		}
	}
</script>