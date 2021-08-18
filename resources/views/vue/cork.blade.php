<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
  <?php
    $currentPage = ucfirst(request()->segment(count(request()->segments())));
  ?> 
  <title>CRM | <?= $currentPage ?> </title>
  <link rel="icon" type="image/x-icon" href="{{ asset('template/cork/assets/img/favicon.ico') }}"/>
  <!-- BEGIN GLOBAL MANDATORY STYLES -->
  <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet">
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">
  <link rel="stylesheet" href="{{ mix('css/template.css') }}">
  <link href="{{ asset('template/cork/assets/css/plugins.css') }}" rel="stylesheet" type="text/css" />

  

  @if ($currentPage == "Login")
    <link href="{{ asset('template/cork/assets/css/authentication/form-2.css') }}" rel="stylesheet" type="text/css" />
  @endif
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <!-- END GLOBAL MANDATORY STYLES --> 
  
  
  <style>
    .apexcharts-canvas {
        margin: 0 auto;
    }
</style>
  <script>
    window._asset = '{{ asset('') }}';
  </script>
</head>
<body class="sidebar-noneoverflow">
  <div id="app">
    <App></App>
  </div>

  <!-- BEGIN GLOBAL MANDATORY SCRIPTS -->
  <script>window.Laravel = {csrfToken: '{{ csrf_token() }}'}</script>
  <script src="{{ mix('js/app.js') }}"></script>
  <script src="{{ asset('template/cork/plugins/perfect-scrollbar/perfect-scrollbar.min.js') }}"></script>
  <script src="{{ asset('template/cork/assets/js/app.js') }}"></script>
  <script src="{{ asset('template/cork/assets/js/custom.js') }}"></script>
  <!-- END GLOBAL MANDATORY SCRIPTS -->

  <!-- BEGIN PAGE LEVEL SCRIPTS -->
  <script src="{{ asset('template/cork/plugins/table/datatable/datatables.js') }}"></script>
  <link href="{{ asset('template/cork/plugins/apex/apexcharts.css') }}" rel="stylesheet" type="text/css">

  <!-- <script src="{{ asset('template/cork/assets/js/scrollspyNav.js') }}"></script> -->
  <script src="{{ asset('template/cork/plugins/counter/jquery.countTo.js') }}"></script>
  <!-- END PAGE LEVEL SCRIPTS -->
      
  <!--  BEGIN CUSTOM SCRIPTS FILE  -->
  <script src="{{ asset('template/cork/assets/js/components/custom-counter.js') }}"></script>
  <!--  END CUSTOM SCRIPTS FILE  -->

</body>
</html>