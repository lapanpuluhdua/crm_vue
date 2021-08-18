@extends('layouts.app')

@section('content')

  <div class="container-fluid pd-x-0">
    <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-style1 mg-b-10">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Home</li>
          </ol>
        </nav>
        <h4 class="mg-b-0 tx-spacing--1">Welcome, Admin CRM!</h4>
      </div>
    </div>

    <div class="row row-xs">
        <!-- content here -->
    </div><!-- row -->


  </div><!-- container -->


  <script src="{{ asset('assets/js/dashforge.js') }}"></script>
  <script src="{{ asset('assets/js/dashforge.aside.js') }}"></script>

@endsection