<template>
	<header class="navbar navbar-header navbar-header-fixed">
      <a href="#" id="mainMenuOpen" class="burger-menu"><i data-feather="menu"></i></a>
      <div class="navbar-brand">
        <a href="javascript:void(0)" class="df-logo"><b>SCHOOLSCAN</b><span><small><i>CRM</i></small></span></a>
      </div><!-- navbar-brand -->
      <div id="navbarMenu" class="navbar-menu-wrapper">
        <div class="navbar-menu-header">
          <a href="javascript:void(0)" class="df-logo"><b>SCHOOLSCAN</b><span><small><i>CRM</i></small></span></a>
          <a id="mainMenuClose" href="javascript:void(0)"><i data-feather="x"></i></a>
        </div><!-- navbar-menu-header -->
    
      </div><!-- navbar-menu-wrapper -->
    </header><!-- navbar -->
</template>

<script>
	import { SearchIcon } from 'vue-feather-icons'

	export default {
		name: 'headers',
		components: { SearchIcon }
	}
</script>