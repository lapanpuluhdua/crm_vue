<!DOCTYPE html>
<html lang="en">

<head>

  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Twitter -->
  <meta name="twitter:site" content="@themepixels">
  <meta name="twitter:creator" content="@themepixels">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="DashForge">
  <meta name="twitter:description" content="Responsive Bootstrap 4 Dashboard Template">
  <meta name="twitter:image" content="http://themepixels.me/dashforge/img/dashforge-social.png">

  <!-- Facebook -->
  <meta property="og:url" content="http://themepixels.me/dashforge">
  <meta property="og:title" content="DashForge">
  <meta property="og:description" content="Responsive Bootstrap 4 Dashboard Template">

  <meta property="og:image" content="http://themepixels.me/dashforge/img/dashforge-social.png">
  <meta property="og:image:secure_url" content="http://themepixels.me/dashforge/img/dashforge-social.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="600">

  <!-- Meta -->
  <meta name="description" content="Schoolscan CRM by CTIE Sdn Bhd">
  <meta name="author" content="ThemePixels">

  <!-- Favicon -->
  <link rel="shortcut icon" type="image/x-icon" href="{{ asset('assets/img/favicon.png') }}">

  <?php
    $currentPage = ucfirst(request()->segment(count(request()->segments())));
   ?> 

  <title>CRM | <?= $currentPage ?> </title>
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <link rel="stylesheet" href="{{ asset('lib/@fortawesome/fontawesome-free/css/all.min.css') }}">
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">
  <link rel="stylesheet" href="{{ mix('css/template.css') }}">
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

  <!-- Use For Login Page -->
  <?php if ($currentPage == "Login"): ?>
     <link rel="stylesheet" href="{{ asset('template/dashforge/assets/css/dashforge.auth.css') }}">
  <?php endif; ?>
 
  <script>
    window._asset = '{{ asset('') }}';
  </script>

</head>

<body>
  <div id="app">
    <App></App>
  </div>
</body>

<script>window.Laravel = {csrfToken: '{{ csrf_token() }}'}</script>
<script src="{{ mix('js/app.js') }}"></script>

<!-- append theme customizer -->
<script src="{{ asset('template/dashforge/lib/js-cookie/js.cookie.js') }}"></script>


<script>
  $(function(){
    'use script'

    window.darkMode = function(){
      $('.btn-white').addClass('btn-dark').removeClass('btn-white');
    }

    window.lightMode = function() {
      $('.btn-dark').addClass('btn-white').removeClass('btn-dark');
    }

    var hasMode = Cookies.get('df-mode');
    if(hasMode === 'dark') {
      darkMode();
    } else {
      lightMode();
    }
  })
</script>

</body>
</html>