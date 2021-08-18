<template>
	<div>
		<Headers></Headers>
	    <div class="content content-fixed content-auth">
			<router-view></router-view>
		</div>
        <Footers></Footers>
	</div>
</template>

<script>
	export default {
		name: 'app',
		components: {
			Headers: () => import('./Login_header.vue'),
            Footers: () => import('./Login_footer.vue')
		},
	}
</script>