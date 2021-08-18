<template>
  <div class="aside-header">
		<router-link :to="{ name: 'dashboard' }" class="aside-logo">
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img :src="asset('template/dashforge/lib/image/schoolscanlogov1new.png')" class="" alt="" width="100px" height="55px">
		</router-link>
		<a href="#" class="aside-menu-link">
			<MenuIcon></MenuIcon>
			<XIcon></XIcon>
		</a>
	</div>
</template>

<script>
	import { MenuIcon, XIcon } from 'vue-feather-icons'

	export default {
		name: 'logo',
		components: { MenuIcon, XIcon }
	}
</script>