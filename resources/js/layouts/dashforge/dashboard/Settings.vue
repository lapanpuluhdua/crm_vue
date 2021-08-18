<template>
	<div class="df-settings">
	  <a id="dfSettingsShow" href="" class="df-settings-link"><SettingsIcon></SettingsIcon></a>
  	<div class="df-settings-body">
	    <div class="pd-y-20">
	      <h3 class="tx-bold tx-spacing--2 tx-brand-02 mg-b-0">School<span class="tx-normal tx-primary">Scan</span></h3>
	      <span class="tx-sans tx-9 tx-uppercase tx-semibold tx-spacing-1 tx-color-03">Skin Customizer</span>
	    </div>

	    <div class="pd-y-20 bd-t">
	      <label class="tx-sans tx-10 tx-uppercase tx-bold tx-spacing-1 tx-color-02 mg-b-15">Skin Mode</label>
	      <div class="row row-xs">
	        <div class="col-4">
	          <a href="" class="df-mode df-mode-default active" data-title="classic"></a>
	          <span class="df-skin-name">Classic</span>
	        </div>
	        <div class="col-4">
	          <a href="" class="df-mode df-mode-light" data-title="light">
	            <span class="bg-ui-01"></span>
	            <span class="bg-ui-02"></span>
	          </a>
	          <span class="df-skin-name">Light</span>
	        </div>
	        <div class="col-4">
	          <a href="" class="df-mode df-mode-cold" data-title="cool">
	            <span class="bg-primary op-1"></span>
	            <span class="bg-primary op-2"></span>
	          </a>
	          <span class="df-skin-name">Cool</span>
	        </div>
	        <div class="col-4 mg-t-15">
	          <a href="" class="df-mode df-mode-dark" data-title="dark">
	            <span class="bg-gray-700"></span>
	            <span class="bg-gray-900"></span>
	          </a>
	          <span class="df-skin-name tx-nowrap">Dark</span>
	        </div>
	      </div><!-- row -->
	    </div>

	    <div class="pd-y-20 bd-t">
	      <label class="tx-sans tx-10 tx-uppercase tx-bold tx-spacing-1 tx-color-02 mg-b-15">Navigation Skin</label>
	      <div class="row row-xs">
	        <div class="col-4">
	          <a href="" class="df-skin df-skin-default active" data-title="default"></a>
	          <span class="df-skin-name">Default</span>
	        </div>
	        <div class="col-4">
	          <a href="" class="df-skin df-skin-deepblue" data-title="deepblue">
	            <span></span>
	            <span></span>
	          </a>
	          <span class="df-skin-name">Deep Blue</span>
	        </div>
	        <div class="col-4">
	          <a href="" class="df-skin df-skin-charcoal" data-title="charcoal">
	            <span></span>
	            <span></span>
	          </a>
	          <span class="df-skin-name">Charcoal</span>
	        </div>
	        <div class="col-4 mg-t-15">
	          <a href="" class="df-skin df-skin-gradient1" data-title="gradient1">
	            <span></span>
	            <span></span>
	          </a>
	          <span class="df-skin-name">Gradient 1</span>
	        </div>
	      </div><!-- row -->
	    </div>

	  	<div class="pd-y-20 bd-t">
	      <label class="tx-sans tx-10 tx-uppercase tx-bold tx-spacing-1 tx-color-02 mg-b-15">Navigation Layout</label>
	      <div class="row row-xs">
	        <div class="col">
	          <a href="../classic/dashboard-one.html" class="btn btn-xs btn-outline-secondary btn-uppercase btn-block">Horizontal</a>
	        </div>
	        <div class="col">
	          <a href="../classic-plus/dashboard-one.html" class="btn btn-xs btn-outline-secondary btn-uppercase btn-block">Vertical</a>
	        </div>
	      </div>
	    </div>

	    <div class="pd-y-20 bd-t">
	      <label class="tx-sans tx-10 tx-uppercase tx-bold tx-spacing-1 tx-color-02 mg-b-15">Font Family Base</label>
	      <div class="row row-xs">
	        <div class="col-7">
	          <a href="" id="setFontBase" class="btn btn-xs btn-outline-secondary active">IBM Plex Sans</a>
	        </div><!-- col -->
	        <div class="col-5">
	          <a href="" id="setFontRoboto" class="btn btn-xs btn-outline-secondary">Roboto</a>
	        </div><!-- col -->
	      </div><!-- row -->
	    </div>
  	</div><!-- df-settings-body -->
	</div><!-- df-settings -->
</template>

<script>
	import { SettingsIcon } from 'vue-feather-icons';

	export default {
		name: 'navbar',
		components: { SettingsIcon },
		mounted(){
			this.dashforgeSettings()
		},
		methods: {
			dashforgeSettings(){
				var hasMode = Cookies.get('df-mode');
		    if(hasMode) {
		      $('head').append('<link id="dfMode" rel="stylesheet" href="../../assets/css/skin.'+hasMode+'.css">')
		      $('body').find('.df-mode').each(function(){
		        var name = $(this).attr('data-title');
		        if(name === hasMode) {
		          $(this).addClass('active');
		        } else {
		          $(this).removeClass('active');
		        }
		      })
		    }

		    var hasSkin = Cookies.get('df-skin');
		    if(hasSkin) {
		      $('head').append('<link id="dfSkin" rel="stylesheet" href="../../assets/css/skin.'+hasSkin+'.css">')
		      $('body').find('.df-skin').each(function(){
		        var name = $(this).attr('data-title');
		        if(name === hasSkin) {
		          $(this).addClass('active');
		        } else {
		          $(this).removeClass('active');
		        }
		      })
		    }

		    // Template Customizer
		    $('body').on('click', '#dfSettingsShow', function(e){
		      e.preventDefault()

		      $('.df-settings').toggleClass('show');
		    })

		    $('body').on('click', '.df-mode', function(e){
		      e.preventDefault();

		      $(this).parent().siblings().find('.df-mode').removeClass('active');
		      $(this).addClass('active');

		      var mode = $(this).attr('data-title');

		      if(mode === 'dark') {
		        darkMode();
		      } else {
		        lightMode();
		      }

		      if(mode === 'classic') {
		        $('#dfMode').remove();

		        Cookies.remove('df-mode');
		      } else {

		        if($('#dfMode').length === 0) {
		          if($('#dfSkin').length === 0) {
		            $('head').append('<link id="dfMode" rel="stylesheet" href="../../assets/css/skin.'+mode+'.css">');
		          } else {
		            $('<link id="dfMode" rel="stylesheet" href="../../assets/css/skin.'+mode+'.css">').insertBefore($('#dfSkin'));
		          }
		        } else {
		          $('#dfMode').attr('href', '../../assets/css/skin.'+mode+'.css');
		        }

		        Cookies.set('df-mode', mode);
		      }
		    })

		    $('body').on('click', '.df-skin', function(e){
		      e.preventDefault();

		      $(this).parent().siblings().find('.df-skin').removeClass('active');
		      $(this).addClass('active');

		      var skin = $(this).attr('data-title');

		      if(skin === 'default') {
		        $('#dfSkin').remove();

		        Cookies.remove('df-skin');
		      } else {

		        if($('#dfSkin').length === 0) {
		          $('head').append('<link id="dfSkin" rel="stylesheet" href="../../assets/css/skin.'+skin+'.css">')
		        } else {
		          $('#dfSkin').attr('href', '../../assets/css/skin.'+skin+'.css');
		        }

		        Cookies.set('df-skin', skin);
		      }

		    })

		    $('body').on('click', '#setFontRoboto', function(e){
		      e.preventDefault()
		      $('body').addClass('df-roboto')
		      $(this).addClass('active');
		      $('#setFontBase').removeClass('active');
		    })

		    $('body').on('click', '#setFontBase', function(e){
		      e.preventDefault()
		      $('body').removeClass('df-roboto');
		      $(this).addClass('active');
		      $('#setFontRoboto').removeClass('active');
		    })
			}
		}
	}
</script>