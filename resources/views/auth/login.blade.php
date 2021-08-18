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

    <title> CRM | Login </title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- vendor css -->
    <link href="{{ asset('lib/@fortawesome/fontawesome-free/css/all.min.css') }}" rel="stylesheet">
    <link href="{{ asset('lib/ionicons/css/ionicons.min.css') }}" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

    <!-- DashForge CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/dashforge.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/dashforge.auth.css') }}">
  </head>
  <body>

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

    <div class="content content-fixed content-auth">
      <div class="container">
        <div class="media align-items-stretch justify-content-center ht-100p pos-relative">
          <div class="media-body align-items-center d-none d-lg-flex">
            <div class="mx-wd-600">
               <img src="{{ asset('assets/login-img2.png') }}" class="img-fluid" alt="">
            </div>
          </div><!-- media-body -->
          <div class="sign-wrapper mg-lg-l-50 mg-xl-l-60">
            <div class="wd-100p">
              <h3 class="tx-color-01 mg-b-5">Sign In</h3>
              <p class="tx-color-03 tx-16 mg-b-40">Welcome back! Please signin to continue.</p>

                <div id="alertMessage" style="display: none" class="alert alert-danger dalign-items-center" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle mg-r-10">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12" y2="16"></line>
                    </svg>
                    <span id="message"></span>
                </div>

               <form id="loginForm" method="POST">

                @csrf
                  <div class="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" id="email" class="form-control" placeholder="Enter your email">
                   <!--  @error('email')
                    <span class="invalid-feedback" role="alert">
                      <strong>{{ $message }}</strong>
                    </span>
                    @enderror -->
                  </div>
                  <div class="form-group">
                    <div class="d-flex justify-content-between mg-b-5">
                      <label class="mg-b-0-f">Password</label>
                      <a href="javascript:void(0)" class="tx-13">Forgot password?</a>
                    </div>
                    <input type="password" name="password" id="password" class="form-control" placeholder="Enter your password">
                   <!--  @error('password')
                    <span class="invalid-feedback" role="alert">
                      <strong>{{ $message }}</strong>
                    </span>
                    @enderror -->
                  </div>
                  
                  <button type="submit" name="loginBtn" class="btn btn-brand-02 btn-block">Sign In</button>

               </form>

              <div class="divider-text">or</div>

              <div class="row">

                <div class="col-md-6">
                  <a class="btn btn-outline-twitter btn-block" href="{{ url('auth/google') }}">
                     <i class="fa fa-google"> Google </i>
                  </a>
                </div>
                <div class="col-md-6">
                   <a class="btn btn-outline-facebook btn-block" href="{{ url('auth/facebook') }}">
                     <i class="fa fa-facebook"></i> Facebook 
                   </a>
                </div>

              </div>

              <div class="tx-13 mg-t-20 tx-center">Don't have an account? Please refer to your administrator <a href="enquiry"> Any enquiry click here</a></div>

            </div>
          </div><!-- sign-wrapper -->
        </div><!-- media -->
      </div><!-- container -->
    </div><!-- content -->

    <footer class="footer">
      <div>
        <span>&copy; <?= date('Y') ?> Schoolscan CRM. </span>
        <span>Created by <a href="http://schoolscan.xyz/"> CTIE SDN BHD </a></span>
      </div>
      <div>
        <nav class="nav">
          <a href="javascript:void(0)" class="nav-link">Licenses</a>
          <!-- <a href="javascript:void(0)" class="nav-link">Change Log</a> -->
          <a href="javascript:void(0)" class="nav-link">Get Help</a>
        </nav>
      </div>
    </footer>

    <script src="{{ asset('lib/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('lib/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('lib/feather-icons/feather.min.js') }}"></script>
    <script src="{{ asset('lib/perfect-scrollbar/perfect-scrollbar.min.js') }}"></script>

    <script src="{{ asset('assets/js/dashforge.js') }}"></script>

    <!-- append theme customizer -->
    <script src="{{ asset('lib/js-cookie/js.cookie.js') }}"></script>

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

     <script>

        $(document).ready(function() {

            // $.ajaxSetup({
            //     headers: {
            //         'Authorization': 'bearer '+localStorage.getItem("token")
            //     }
            // });

            // $.ajaxSetup({
            //     headers: {
            //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            //     }
            // });

            if (localStorage.getItem("token") !== null) {
              window.location.href = 'api/blankpage';
            }
            
        });

        
        $('#loginForm').on('submit', function(event) {
            event.preventDefault();

            var username = $("#email").val();
            var password = $("#password").val();

            var dataString = new FormData(this);

            // set hidden message back to empty
            $('#alertMessage').css("display", "none");

            $.ajax({
                type: "POST",
                url: "{{ url('/api/login') }}",
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                data: dataString,
                dataType: "JSON",
                contentType: false,
                cache: false,
                processData: false,
                beforeSend: function() {
                    $('#loginBtn').html("Sign In....");
                    $('#loginBtn').attr('disabled', true);
                },
                success: function(response) {

                    $('#loginBtn').html("Sign In");
                    $('#loginBtn').attr('disabled', false);
                    if (response.status_code == 200) {

                        $('#message').html("");
                        $('#alertMessage').css("display", "none");

                        // set token
                        localStorage.setItem('token', response.token);
                        window.location.href = 'api/blankpage';

                    } else if (response.status_code == 400) {
                        $('#message').html(response.message);
                        $('#alertMessage').css("display", "block");
                    }else if (response.status_code == 500) {
                        $('#message').html(response.message);
                        $('#alertMessage').css("display", "block");
                    }

                },
                error: function(response) {
                    if (response.status_code == 400) {
                        $('#message').html(response.message);
                        $('#alertMessage').css("display", "block");
                    }

                    $('#loginBtn').html("Sign In");
                    $('#loginBtn').attr('disabled', false);
                }
            });
        });

        function resetErrorMsg() {
            $('#username').text('');
            $('#password').text('');
        }

    </script>

  </body>
</html>
