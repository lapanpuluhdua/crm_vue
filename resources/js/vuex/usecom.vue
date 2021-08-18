<template>
	<div>
		<div class="content">
			<div class="container-fluid">
				<h1>I will show how all other components react to changes</h1>
				<h2>The master component counter is : {{counter}}</h2>
				<div>
					<comA></comA>
				</div>
				<div>
					<comB></comB>
				</div>
				<div>
					<comC></comC>
				</div>
				<button type="button" class="btn btn-dark" @click="changeCounter()">Change the state of the counter</button>
			</div>
		</div>
	</div>
</template>

<script>
	import comA from './comA.vue'
	import comB from './comB.vue'
	import comC from './comC.vue'
	import {mapGetters} from 'vuex'
	export default {
		data(){
			return {
				localVar: 'some value'
			}
		},
		methods:{
			changeCounter(){
				this.$store.dispatch('changeCounterAction', 1)
				// this.$store.commit('changeTheCounter', 1)
			},
			runSomethingWhenCounterChange(){
				// console.log('i am running based on each changes happening')
			}
		},
		computed:{
			...mapGetters({
				'counter' : 'getCounter'
			})
		},
		created(){
			console.log(this.$store);
		},
		components:{
			comA,
			comB,
			comC,
		},
		watch:{
			counter(value){
				this.runSomethingWhenCounterChange()
			}
		}
	}
</script>