<template>
	<div>
		<aside class="aside aside-fixed">
			<Logo></Logo>
			<Navbar></Navbar>
		</aside>
		<div class="content ht-100v pd-0">
			<Headers></Headers>
		    <div class="content-body">
				<router-view></router-view>
			</div>
		</div>
		<Settings></Settings>
	</div>
</template>

<script>
	export default {
		name: 'app',
		components: {
			Headers: () => import('./Headers.vue'),
			Navbar: () => import('./Navbar.vue'),
			Logo: () => import('./Logo.vue'),
			Settings: () => import('./Settings.vue')
		},
	}
</script>