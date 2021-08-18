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
		<link rel="shortcut icon" href="<?php echo e(asset('/template/unipro/img/fav.png')); ?>">
		

		<!-- Title -->
		<title>Uni Pro Admin Template - Admin Dashboard</title>


		<!-- *************
			************ Common Css Files *************
		************ -->
		<!-- Bootstrap css -->
		<link rel="stylesheet" href="<?php echo e(asset('/template/unipro/css/bootstrap.min.css')); ?>">
		
		<!-- Icomoon Font Icons css -->
		<link rel="stylesheet" href="<?php echo e(asset('/template/unipro/fonts/style.css')); ?>">

		<!-- Main css -->
		<link rel="stylesheet" href="<?php echo e(asset('/template/unipro/css/main.css')); ?>">
		
		<link rel="stylesheet" href="<?php echo e(mix('css/uniproApp.css')); ?>">
		

		
        



		<!-- *************
			************ Vendor Css Files *************
		************ -->

		<!-- Mega Menu -->
		<link rel="stylesheet" href="<?php echo e(asset('/template/unipro/vendor/megamenu/css/megamenu.css')); ?>">

		<!-- Search Filter JS -->
		<link rel="stylesheet" href="<?php echo e(asset('/template/unipro/vendor/search-filter/search-filter.css')); ?>">
		<link rel="stylesheet" href="<?php echo e(asset('/template/unipro/vendor/search-filter/custom-search-filter.css')); ?>">
		
	</head>
	
	<body> 
	

		<!-- Loading wrapper start -->
		
            <App id="app"class="h-100"></App>
          
        
		<!-- Page wrapper end -->

		<!-- *************
			************ Required JavaScript Files *************
		************* -->
		<!-- Required jQuery first, then Bootstrap Bundle JS -->
		<script>
			<?php if(auth()->guard()->check()): ?>
			  window.Permissions = <?php echo json_encode(Auth::user()->allPermissions, true); ?>;
			<?php else: ?>
			  window.Permissions = [];
			<?php endif; ?>
		</script>
		<script>
			<?php if(auth()->guard()->check()): ?>
			  window.Permissions = <?php echo json_encode(Auth::user()->allRoles, true); ?>;
			<?php else: ?>
			  window.Permissions = [];
			<?php endif; ?>
		</script>
		  
		<script src="<?php echo e(asset('/template/unipro/js/jquery.min.js')); ?>"></script>
		<script src="<?php echo e(asset('/template/unipro/js/bootstrap.bundle.min.js')); ?>"></script>
		<script src="<?php echo e(asset('/template/unipro/js/modernizr.js')); ?>"></script>
		<script src="<?php echo e(asset('/template/unipro/js/moment.js')); ?>"></script>

		<!-- *************
			************ Vendor Js Files *************
		************* -->
		
		<!-- Megamenu JS -->
		<script src="<?php echo e(asset('/template/unipro/vendor/megamenu/js/megamenu.js')); ?>"></script>
		<script src="<?php echo e(asset('/template/unipro/vendor/megamenu/js/custom.js')); ?>"></script>

		<!-- Slimscroll JS -->
		<script src="<?php echo e(asset('/template/unipro/vendor/slimscroll/slimscroll.min.js')); ?>"></script>
		<script src="<?php echo e(asset('/template/unipro/vendor/slimscroll/custom-scrollbar.js')); ?>"></script>

		<!-- Search Filter JS -->
		<script src="<?php echo e(asset('/template/unipro/vendor/search-filter/search-filter.js')); ?>"></script>
		<script src="<?php echo e(asset('/template/unipro/vendor/search-filter/custom-search-filter.js')); ?>"></script>

		<!-- Main Js Required -->
		
		<script src="<?php echo e(asset('/template/unipro/js/main.js')); ?>"></script>
        <script src="<?php echo e(mix('js/app.js')); ?>"></script>


	</body>
</html><?php /**PATH D:\xampp\htdocs\crm-new2\resources\views/vue/unipro.blade.php ENDPATH**/ ?>