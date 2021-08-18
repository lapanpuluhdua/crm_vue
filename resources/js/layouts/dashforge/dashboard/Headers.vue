<template>
	<div class="content-header"><!-- content-header -->
		<div class="content-search">
			<SearchIcon></SearchIcon>
			<input type="search" class="form-control" placeholder="Search...">
		</div>
		<nav class="nav">
		<!-- <a href="#" class="nav-link"><i data-feather="help-circle"></i></a> -->
		<a href="#" class="avatar"><img :src="asset('template/dashforge/lib/image/admin.png')" class="rounded-circle" alt="" width="50px"></a> &nbsp;&nbsp;
		<!-- <div class="aside-loggedin-user"> -->
		<a href="#" class="d-flex align-items-center justify-content-between mg-b-2">
		  <h6 class="tx-semibold mg-b-0">Hi, Admin CRM</h6>
		  <!-- <i data-feather="chevron-down"></i> -->
		</a>
		<!-- <p class="tx-color-03 tx-12 mg-b-0">Administrator</p> -->
		<!-- </div> -->
		</nav>
	</div><!-- content-header -->
</template>

<script>
	import { SearchIcon } from 'vue-feather-icons'

	export default {
		name: 'headers',
		components: { SearchIcon }
	}
</script>