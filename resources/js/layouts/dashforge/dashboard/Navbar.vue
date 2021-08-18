<template>
  <div class="aside-body">
    <div class="aside-loggedin">
      <div class="d-flex align-items-center justify-content-start">
        <a href="#" class="avatar"><img :src="asset('template/dashforge/lib/image/admin.png')" class="rounded-circle" alt=""></a>
        <div class="aside-alert-link">
          <a href="" class="new" data-toggle="tooltip" title="You have 2 unread messages"><MessageSquareIcon></MessageSquareIcon></a>
          <a href="" class="new" data-toggle="tooltip" title="You have 4 new notifications"><BellIcon></BellIcon></a>
          <a href="#" data-toggle="tooltip" title="Sign out" @click="signOut"><LogOutIcon></LogOutIcon></a>
        </div>
      </div>
      <div class="aside-loggedin-user">
        <a href="#loggedinMenu" class="d-flex align-items-center justify-content-between mg-b-2" data-toggle="collapse">
          <h6 class="tx-semibold mg-b-0">Admin CRM</h6>
          <ChevronDownIcon></ChevronDownIcon>
        </a>
        <p class="tx-color-03 tx-12 mg-b-0">Administrator</p>
      </div>
      <div class="collapse" id="loggedinMenu">
        <ul class="nav nav-aside mg-b-0">
          <li class="nav-item"><a href="#" class="nav-link"><EditIcon></EditIcon> <span>Edit Profile</span></a></li>
          <li class="nav-item"><a href="#" class="nav-link"><UserIcon></UserIcon> <span>View Profile</span></a></li>
          <li class="nav-item"><a href="#" class="nav-link"><SettingsIcon></SettingsIcon> <span>Account Settings</span></a></li>
          <li class="nav-item"><a href="#" class="nav-link"><HelpCircleIcon></HelpCircleIcon> <span>Help Center</span></a></li>
          <li class="nav-item"><a href="#" class="nav-link" @click="signOut"><LogOutIcon></LogOutIcon> <span>Sign Out</span></a></li>
        </ul>
      </div>
    </div><!-- aside-loggedin -->
    <ul class="nav nav-aside">
    	<li class="nav-label">Dashboard</li>
    	<li class="nav-item">
    		<router-link :to="{ name: 'dashboard' }" class="nav-link"><HomeIcon></HomeIcon><span>Home</span></router-link>
    	</li>
      <li class="nav-item">
          <router-link :to="{ name: 'user' }" class="nav-link"><UserIcon></UserIcon><span>User</span></router-link>
      </li>
    	<li class="nav-item">
    		<router-link :to="{ name: 'enquiry' }" class="nav-link"><GridIcon></GridIcon><span>Enquiry</span></router-link>
    	</li>

    	<li class="nav-label mg-t-5">Settings</li>
      <li class="nav-item">
          <router-link :to="{ name: 'role' }" class="nav-link"><UserCheckIcon></UserCheckIcon><span>Role</span></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
	import { EditIcon, UserIcon, SettingsIcon, HomeIcon, HelpCircleIcon, LogOutIcon, MessageSquareIcon, BellIcon, ChevronDownIcon, GridIcon, UserCheckIcon } from 'vue-feather-icons';
	import { mapGetters, mapActions } from 'vuex';
	import PerfectScrollbar from '../../../lib/perfect-scrollbar/perfect-scrollbar.min.js';

	export default {
		name: 'navbar',
		components: { EditIcon, UserIcon, SettingsIcon, HomeIcon, HelpCircleIcon, LogOutIcon, MessageSquareIcon, BellIcon, ChevronDownIcon, GridIcon, UserCheckIcon },
	    computed: {
	      ...mapGetters({
	        authenticated: 'auth/authenticated',
	        user: 'auth/user',
	      })
	    },
		mounted() {
			this.dashforge()
			this.dashforgeAside()
		},
		methods: {
			...mapActions({
				signOutAction: 'auth/signOut'
			}),

			async signOut () {
				const res = await this.signOutAction()
				if(res.status == 200){
						// localStorage.setItem('auth', false)
				  this.$store.commit('auth/setToken', null)
				  this.$store.dispatch('auth/me')

					// window.location.href="/v/login";
				}else{
				  this.swr()
				}

				// window.location.href="/v/login";

				// this.$router.replace({ name: 'login' })
			},
			// logout(){
			// 	this.$store.commit('setToken', null)
			// 	localStorage.removeItem('token')
			// },
			dashforge() {
				$(function(){
				  'use strict'

				  ////////// NAVBAR //////////

				  // Initialize PerfectScrollbar of navbar menu for mobile only
				  if(window.matchMedia('(max-width: 991px)').matches) {
				    const psNavbar = new PerfectScrollbar('#navbarMenu', {
				      suppressScrollX: true
				    });
				  }

				  // Showing sub-menu of active menu on navbar when mobile
				  function showNavbarActiveSub() {
				    if(window.matchMedia('(max-width: 991px)').matches) {
				      $('#navbarMenu .active').addClass('show');
				    } else {
				      $('#navbarMenu .active').removeClass('show');
				    }
				  }

				  showNavbarActiveSub()
				  $(window).resize(function(){
				    showNavbarActiveSub()
				  })

				  // Initialize backdrop for overlay purpose
				  $('body').append('<div class="backdrop"></div>');


				  // Showing sub menu of navbar menu while hiding other siblings
				  $('.navbar-menu .with-sub .nav-link').on('click', function(e){
				    e.preventDefault();
				    $(this).parent().toggleClass('show');
				    $(this).parent().siblings().removeClass('show');

				    if(window.matchMedia('(max-width: 991px)').matches) {
				      psNavbar.update();
				    }
				  })

				  // Closing dropdown menu of navbar menu
				  $(document).on('click touchstart', function(e){
				    e.stopPropagation();

				    // closing nav sub menu of header when clicking outside of it
				    if(window.matchMedia('(min-width: 992px)').matches) {
				      var navTarg = $(e.target).closest('.navbar-menu .nav-item').length;
				      if(!navTarg) {
				        $('.navbar-header .show').removeClass('show');
				      }
				    }
				  })

				  $('#mainMenuClose').on('click', function(e){
				    e.preventDefault();
				    $('body').removeClass('navbar-nav-show');
				  });

				  $('#sidebarMenuOpen').on('click', function(e){
				    e.preventDefault();
				    $('body').addClass('sidebar-show');
				  })

				  // Navbar Search
				  $('#navbarSearch').on('click', function(e){
				    e.preventDefault();
				    $('.navbar-search').addClass('visible');
				    $('.backdrop').addClass('show');
				  })

				  $('#navbarSearchClose').on('click', function(e){
				    e.preventDefault();
				    $('.navbar-search').removeClass('visible');
				    $('.backdrop').removeClass('show');
				  })



				  ////////// SIDEBAR //////////

				  // Initialize PerfectScrollbar for sidebar menu
				  if($('#sidebarMenu').length) {
				    const psSidebar = new PerfectScrollbar('#sidebarMenu', {
				      suppressScrollX: true
				    });


				    // Showing sub menu in sidebar
				    $('.sidebar-nav .with-sub').on('click', function(e){
				      e.preventDefault();
				      $(this).parent().toggleClass('show');

				      psSidebar.update();
				    })
				  }


				  $('#mainMenuOpen').on('click touchstart', function(e){
				    e.preventDefault();
				    $('body').addClass('navbar-nav-show');
				  })

				  $('#sidebarMenuClose').on('click', function(e){
				    e.preventDefault();
				    $('body').removeClass('sidebar-show');
				  })

				  // hide sidebar when clicking outside of it
				  $(document).on('click touchstart', function(e){
				    e.stopPropagation();

				    // closing of sidebar menu when clicking outside of it
				    if(!$(e.target).closest('.burger-menu').length) {
				      var sb = $(e.target).closest('.sidebar').length;
				      var nb = $(e.target).closest('.navbar-menu-wrapper').length;
				      if(!sb && !nb) {
				        if($('body').hasClass('navbar-nav-show')) {
				          $('body').removeClass('navbar-nav-show');
				        } else {
				          $('body').removeClass('sidebar-show');
				        }
				      }
				    }
				  });

				})
			},
			dashforgeAside() {
				$(function(){

				  'use strict'

				  $('[data-toggle="tooltip"]').tooltip()

				  const asideBody = new PerfectScrollbar('.aside-body', {
				    suppressScrollX: true
				  });

				  if($('.aside-backdrop').length === 0) {
				    $('body').append('<div class="aside-backdrop"></div>');
				  }

				  var mql = window.matchMedia('(min-width:992px) and (max-width: 1199px)');

				  function doMinimize(e) {
				    if (e.matches) {
				      $('.aside').addClass('minimize');
				    } else {
				      $('.aside').removeClass('minimize');
				    }

				    // asideBody.update()
				  }

				  mql.addListener(doMinimize);
				  doMinimize(mql);

				  $('.aside-menu-link').on('click', function(e){
				    e.preventDefault()

				    if(window.matchMedia('(min-width: 992px)').matches) {
				      $(this).closest('.aside').toggleClass('minimize');
				    } else {

				      $('body').toggleClass('show-aside');
				    }

				    // asideBody.update()
				  })

				  $('.nav-aside .with-sub').on('click', '.nav-link', function(e){
				    e.preventDefault();

				    $(this).parent().siblings().removeClass('show');
				    $(this).parent().toggleClass('show');

				    // asideBody.update()
				  })

				  $('body').on('mouseenter', '.minimize .aside-body', function(e){
				    console.log('e');
				    $(this).parent().addClass('maximize');
				  })

				  $('body').on('mouseleave', '.minimize .aside-body', function(e){
				    $(this).parent().removeClass('maximize');

				    // asideBody.update()
				  })

				  $('body').on('click', '.aside-backdrop', function(e){
				    $('body').removeClass('show-aside');
				  })
				})
			}
		}
	}
</script>