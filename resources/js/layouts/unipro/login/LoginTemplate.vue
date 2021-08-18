<template>
<div class="authentication">
	<div class="login-container">
		<router-view>
		</router-view>
</div>
</div>
	
	
</template>

<script>
	export default {
		name: 'LoginTemplate',
		// components: {
		// 	Headers: () => import('./Login_header.vue'),
  //           Footers: () => import('./Login_footer.vue')
		// },
	}
</script>