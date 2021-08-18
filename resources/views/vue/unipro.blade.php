<!doctype html>
<html lang="en">
	<head>
		<!-- Required meta tags -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <?php
            $currentPage = ucfirst(request()->segment(count(request()->segments())));
        ?> 
        <title>CRM | <?= $currentPage ?> </title>
		<!-- Meta -->
		<meta name="description" content="Responsive Bootstrap4 Dashboard Template">
		<meta name="author" content="ParkerThemes">
		<link rel="shortcut icon" href="{{ asset('/template/unipro/img/fav.png') }}">
		

		<!-- Title -->
		<title>Uni Pro Admin Template - Admin Dashboard</title>


		<!-- *************
			************ Common Css Files *************
		************ -->
		<!-- Bootstrap css -->
		<link rel="stylesheet" href="{{ asset('/template/unipro/css/bootstrap.min.css') }}">
		
		<!-- Icomoon Font Icons css -->
		<link rel="stylesheet" href="{{ asset('/template/unipro/fonts/style.css') }}">

		<!-- Main css -->
		<link rel="stylesheet" href="{{ asset('/template/unipro/css/main.css') }}">
		{{-- <link rel="stylesheet" href="{{ mix('css/app.css') }}"> --}}
		<link rel="stylesheet" href="{{ mix('css/uniproApp.css') }}">
		

		
        {{-- <link rel="stylesheet" href="{{ mix('css/app.css') }}"> --}}



		<!-- *************
			************ Vendor Css Files *************
		************ -->

		<!-- Mega Menu -->
		<link rel="stylesheet" href="{{ asset('/template/unipro/vendor/megamenu/css/megamenu.css') }}">

		<!-- Search Filter JS -->
		<link rel="stylesheet" href="{{ asset('/template/unipro/vendor/search-filter/search-filter.css') }}">
		<link rel="stylesheet" href="{{ asset('/template/unipro/vendor/search-filter/custom-search-filter.css') }}">
		
	</head>
	{{-- @if (!in_array($currentPage, ["Login", "Forgotpassword"])) --}}
	<body> 
	{{-- @else
	<body class="authentication">
	@endif  --}}

		<!-- Loading wrapper start -->
		{{-- <div class="h-100"> --}}
            <App id="app"class="h-100"></App>
          {{-- </div> --}}
        
		<!-- Page wrapper end -->

		<!-- *************
			************ Required JavaScript Files *************
		************* -->
		<!-- Required jQuery first, then Bootstrap Bundle JS -->
		<script>
			@auth
			  window.Permissions = {!! json_encode(Auth::user()->allPermissions, true) !!};
			@else
			  window.Permissions = [];
			@endauth
		</script>
		<script>
			@auth
			  window.Permissions = {!! json_encode(Auth::user()->allRoles, true) !!};
			@else
			  window.Permissions = [];
			@endauth
		</script>
		  
		<script src="{{ asset('/template/unipro/js/jquery.min.js') }}"></script>
		<script src="{{ asset('/template/unipro/js/bootstrap.bundle.min.js') }}"></script>
		<script src="{{ asset('/template/unipro/js/modernizr.js') }}"></script>
		<script src="{{ asset('/template/unipro/js/moment.js') }}"></script>

		<!-- *************
			************ Vendor Js Files *************
		************* -->
		
		<!-- Megamenu JS -->
		<script src="{{ asset('/template/unipro/vendor/megamenu/js/megamenu.js') }}"></script>
		<script src="{{ asset('/template/unipro/vendor/megamenu/js/custom.js') }}"></script>

		<!-- Slimscroll JS -->
		<script src="{{ asset('/template/unipro/vendor/slimscroll/slimscroll.min.js') }}"></script>
		<script src="{{ asset('/template/unipro/vendor/slimscroll/custom-scrollbar.js') }}"></script>

		<!-- Search Filter JS -->
		<script src="{{ asset('/template/unipro/vendor/search-filter/search-filter.js') }}"></script>
		<script src="{{ asset('/template/unipro/vendor/search-filter/custom-search-filter.js') }}"></script>

		<!-- Main Js Required -->
		
		<script src="{{ asset('/template/unipro/js/main.js') }}"></script>
        <script src="{{ mix('js/app.js') }}"></script>


	</body>
</html>