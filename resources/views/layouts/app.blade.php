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

  <title>CRM | {{ $title }}</title>

  <!-- vendor css -->
  <link rel="stylesheet" href="{{ asset('lib/@fortawesome/fontawesome-free/css/all.min.css') }}">
  <link rel="stylesheet" href="{{ asset('lib/ionicons/css/ionicons.min.css') }}">
  <link rel="stylesheet" href="{{ asset('lib/jqvmap/jqvmap.min.css') }}">
  <link rel="stylesheet" href="{{ asset('lib/typicons.font/typicons.css') }}">
  <link rel="stylesheet" href="{{ asset('lib/typicons.font/typicons.css') }}">
  <link rel="stylesheet" href="{{ asset('lib/prismjs/themes/prism-vs.css') }}">
  <link rel="stylesheet" href="{{ asset('lib/morris.js/morris.css') }}">

  <!-- DashForge CSS -->
  <link rel="stylesheet" href="{{ asset('assets/css/dashforge.css') }}">
  <link rel="stylesheet" href="{{ asset('assets/css/dashforge.dashboard.css') }}">

  <!-- vendor css -->
   <link rel="stylesheet" href="{{ asset('assets/css/dashforge.demo.css') }}">
  
   <link href="{{ asset('lib/quill/quill.core.css') }}" rel="stylesheet">
   <link href="{{ asset('lib/quill/quill.snow.css') }}" rel="stylesheet">
   <link href="{{ asset('lib/quill/quill.bubble.css') }}" rel="stylesheet">

  <!-- Jquery -->
  <script src="{{ asset('lib/jquery/jquery.min.js') }}"></script>
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.css" integrity="sha512-3pIirOrwegjM6erE5gPSwkUzO+3cTjpnV9lexlNZqvupR64iZBnOOTiiLPb9M36zpMScbmUNIcHUqKD47M719g==" crossorigin="anonymous" /> -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js" integrity="sha512-VEd+nq25CkR676O+pLBnDW09R7VQX9Mdiij052gVCp5yVH3jGtH70Ho/UUv4mJDsEdTvqRCFZg0NKGiojGnUCw==" crossorigin="anonymous"></script> -->

</head>

<body>

  <aside class="aside aside-fixed">
    <div class="aside-header">
      <a href="#" class="aside-logo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="{{ asset('lib/image/schoolscanlogov1new.png') }}" class="" alt="" width="100px" height="55px"></a>
      <a href="#" class="aside-menu-link">
        <i data-feather="menu"></i>
        <i data-feather="x"></i>
      </a>
    </div>
    <div class="aside-body">
      <div class="aside-loggedin">
        <div class="d-flex align-items-center justify-content-start">
          <a href="#" class="avatar"><img src="{{ asset('lib/image/admin.png') }}" class="rounded-circle" alt=""></a>
          <div class="aside-alert-link">
            <a href="" class="new" data-toggle="tooltip" title="You have 2 unread messages"><i data-feather="message-square"></i></a>
            <a href="" class="new" data-toggle="tooltip" title="You have 4 new notifications"><i data-feather="bell"></i></a>
            <a href="logout" data-toggle="tooltip" title="Sign out"><i data-feather="log-out"></i></a>
          </div>
        </div>
        <div class="aside-loggedin-user">
          <a href="#loggedinMenu" class="d-flex align-items-center justify-content-between mg-b-2" data-toggle="collapse">
            <h6 class="tx-semibold mg-b-0">Admin CRM</h6>
            <i data-feather="chevron-down"></i>
          </a>
          <p class="tx-color-03 tx-12 mg-b-0">Administrator</p>
        </div>
        <div class="collapse" id="loggedinMenu">
          <ul class="nav nav-aside mg-b-0">
            <li class="nav-item"><a href="#" class="nav-link"><i data-feather="edit"></i> <span>Edit Profile</span></a></li>
            <li class="nav-item"><a href="#" class="nav-link"><i data-feather="user"></i> <span>View Profile</span></a></li>
            <li class="nav-item"><a href="#" class="nav-link"><i data-feather="settings"></i> <span>Account Settings</span></a></li>
            <li class="nav-item"><a href="#" class="nav-link"><i data-feather="help-circle"></i> <span>Help Center</span></a></li>
            <li class="nav-item"><a href="#" class="nav-link"><i data-feather="log-out"></i> <span>Sign Out</span></a></li>
          </ul>
        </div>
      </div><!-- aside-loggedin -->
      <!-- <?php
        $current = request()->segment(count(request()->segments()));
      ?> -->
      <ul class="nav nav-aside">
        <li class="nav-label">Dashboard</li>
        <li class="nav-item "><a href="{{ url('blankpage') }}" class="nav-link"><i data-feather="home"></i> <span> Blank Page </span></a></li>
       <!--  <li class="nav-item"><a href="#" class="nav-link"><i data-feather="layout"></i> <span>Directory</span></a></li>
        <li class="nav-item"><a href="calendar" class="nav-link"><i data-feather="calendar"></i> <span>Calendar</span></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><i data-feather="book"></i> <span>Course</span></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><i data-feather="grid"></i> <span>Classes</span></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><i data-feather="clipboard"></i> <span>Attendance</span></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><i data-feather="file-text"></i> <span>Reporting</span></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><i data-feather="help-circle"></i> <span>Survey</span></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><i data-feather="file"></i> <span>Report Card</span></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><i data-feather="alert-triangle"></i> <span>Incidents</span></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><i data-feather="dollar-sign"></i> <span>Fees</span></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><i data-feather="folder"></i> <span>File Cabinet</span></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><i data-feather="activity"></i> <span>Activities</span></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><i data-feather="film"></i> <span>Scheduling</span></a></li>
        <li class="nav-item"><a href="student" class="nav-link"><i data-feather="users"></i> <span>Student</span></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><i data-feather="download"></i> <span>Imports</span></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><i data-feather="settings"></i> <span>Settings</span></a></li>
        <li class="nav-item"><a href="enquirylist" class="nav-link"><i data-feather="grid"></i> <span>Enquiry List</span></a></li> -->
      </ul>
    </div>
  </aside>

  <div class="content ht-100v pd-0">
    <div class="content-header">
      <div class="content-search">
        <i data-feather="search"></i>
        <input type="search" class="form-control" placeholder="Search...">
      </div>
      <nav class="nav">
        <!-- <a href="#" class="nav-link"><i data-feather="help-circle"></i></a> -->
        <a href="#" class="avatar"><img src="{{ asset('lib/image/admin.png') }}" class="rounded-circle" alt="" width="50px"></a> &nbsp;&nbsp;
        <!-- <div class="aside-loggedin-user"> -->
        <a href="#" class="d-flex align-items-center justify-content-between mg-b-2">
          <h6 class="tx-semibold mg-b-0">Hi, Admin CRM</h6>
          <!-- <i data-feather="chevron-down"></i> -->
        </a>
        <!-- <p class="tx-color-03 tx-12 mg-b-0">Administrator</p> -->
        <!-- </div> -->
      </nav>
    </div><!-- content-header -->

    <div class="content-body">
        @yield('content')
    </div>

  </div>

</body>

<script src="{{ asset('lib/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('lib/feather-icons/feather.min.js') }}"></script>

<!-- append theme customizer -->
<script src="{{ asset('lib/js-cookie/js.cookie.js') }}"></script>
<script src="{{ asset('assets/js/dashforge.settings.js') }}"></script>
<script src="{{ asset('assets/js/dashforge.js') }}"></script>

<!-- <script src="{{ asset('lib/jquery/jquery.min.js') }}"></script> -->
<script src="{{ asset('lib/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('lib/feather-icons/feather.min.js') }}"></script>
<script src="{{ asset('lib/perfect-scrollbar/perfect-scrollbar.min.js') }}"></script>
<script src="{{ asset('lib/prismjs/prism.js') }}"></script>
<script src="{{ asset('lib/quill/quill.min.js') }}"></script>

<script src="{{ asset('lib/jquery.flot/jquery.flot.js') }}"></script>
<script src="{{ asset('lib/jquery.flot/jquery.flot.stack.js') }}"></script>
<script src="{{ asset('lib/jquery.flot/jquery.flot.resize.js') }}"></script>
<script src="{{ asset('lib/flot.curvedlines/curvedLines.js') }}"></script>
<script src="{{ asset('lib/peity/jquery.peity.min.js') }}"></script>
<script src="{{ asset('lib/chart.js/Chart.bundle.min.js') }}"></script>

<script src="{{ asset('assets/js/dashforge.js') }}"></script>
<script src="{{ asset('assets/js/dashforge.sampledata.js') }}"></script>
<script src="{{ asset('assets/js/dashboard-four.js') }}"></script>

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