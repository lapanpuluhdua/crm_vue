<template>
	<div class="container-fluid pd-x-0">
    <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-style1 mg-b-10">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Home</li>
          </ol>
        </nav>
        <!-- <nav class="breadcrumb-two" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
                <li class="breadcrumb-item active"><a href="javascript:void(0);">Components</a></li>
                <li class="breadcrumb-item" aria-current="page"><a href="javascript:void(0);">UI Kit</a></li>
            </ol>
        </nav> -->
      </div>
      
    </div>
    <div class="row">
    <div class="col-lg-12">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h2 class="display-4 mb-5  mt-4">Customer Relationship Management</h2>
                <p class="lead mt-3 mb-4">Welcome Admin!</p>
            </div>
        </div>
    </div>
</div>

    <!-- <div class="row row-xs"> -->
        <!-- content here -->
        <!-- <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Roles</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, i) in users" :key="i" v-if="users.length">
                  <td>{{key=i+1}}</td>
                  <td>{{user.name}}</td>
                  <td>{{user.email}}</td>
                  <td>{{user.role_names}}</td>
                  <td>{{user.created_at | formatDate}}</td>
                  <td>
                    <div class="dropdown custom-dropdown">
                      <button class="btn btn-primary dropdown-toggle btn-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Options
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button @click="edit(user, i)" class="dropdown-item" data-toggle="modal"><i class="fa fa-edit"></i>&nbsp;&nbsp;Update</button>
                        <button @click="showDeletingModal(user, i)" class="dropdown-item" data-toggle="modal"><i class="fa fa-trash"></i>&nbsp;&nbsp;Remove</button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
    </div>row -->

    <div class="row row-xs">
        <!-- content here -->
        
    </div> <!-- row -->
    
    <div class=row> <!-- row -->
      <div id="chartArea" class="col-xl-6 layout-spacing">
        <div class="statbox widget box box-shadow">
            <div class="widget-header">                                
                <div class="row">
                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                        <h4>Total Leads by month</h4> 
                    </div>
                </div>
            </div>
            <div class="widget-content widget-content-area">
                <div id="s-line-area" class=""></div>

                <div class="code-section-container">
                  <div id="app">
                    <Chart />
                  </div>
                </div>
            </div>
        </div>
      </div>
      <!-- Statistics -->
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
        <!-- <div class="widget widget-one">
          
          <div class="widget-heading">
            <h6 class="">Statistics</h6>
          </div>
            
              <div class="w-chart">
                
                  <div class="w-chart-section total-visits-content">
                    <div class="w-detail">
                      <p class="w-title">Total Visits</p>
                      <p class="w-stats">423,964</p>
                    </div>
                    <div class="w-chart-render-one">
                        <div id="total-users"></div>
                    </div>
                  </div>
                      
                      
                  <div class="w-chart-section paid-visits-content">
                      <div class="w-detail">
                          <p class="w-title">Paid Visits</p>
                          <p class="w-stats">7,929</p>
                      </div>
                      <div class="w-chart-render-one">
                          <div id="paid-visits"></div>
                      </div>
                  </div>
              </div>
              
            

        </div> -->
        <div class="widget-content widget-content-area icon-tab">
          
          <ul class="nav nav-tabs  mb-3 mt-3" id="iconTab" role="tablist">
              <li class="nav-item">
                  <a class="nav-link active" id="icon-home-tab" data-toggle="tab" href="#icon-home" role="tab" aria-controls="icon-home" aria-selected="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Engagement Performance</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Products Breakdown <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                  <div class="dropdown-menu">
                      <a class="dropdown-item" id="icon-profile-tab1" data-toggle="tab" href="#icon-profile" role="tab" aria-controls="icon-profile" aria-selected="false">Action</a>
                  </div>
              </li>
              <li class="nav-item">
                  <a class="nav-link" id="icon-contact-tab" data-toggle="tab" href="#icon-contact" role="tab" aria-controls="icon-contact" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Contact</a>
              </li>
              <li class="nav-item">
              </li>
          </ul>
          <!-- Tab 1 -->
          <div class="tab-content" id="iconTabContent-1">
            <div class="tab-pane fade show active" id="icon-home" role="tabpanel" aria-labelledby="icon-home-tab">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-card-four">
                    <div class="widget-content">
                        <div class="w-header">
                            <div class="w-info">
                                <h6 class="value">Total Leads</h6>
                            </div>
                            <div class="task-action">
                                <div class="dropdown">
                                    <a class="dropdown-toggle" href="#" role="button" id="pendingTask" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="pendingTask" style="will-change: transform;">
                                        <a class="dropdown-item" href="javascript:void(0);">This Week</a>
                                        <a class="dropdown-item" href="javascript:void(0);">Last Week</a>
                                        <a class="dropdown-item" href="javascript:void(0);">Last Month</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="w-content">

                            <div class="w-info">
                                <p class="value">50 <span>+5 this month</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg></p>
                                <!-- <p class="">Expenses</p> -->
                            </div>
                            
                        </div>

                        <div class="w-progress-stats">                                            
                            <div class="progress">
                                <div class="progress-bar bg-gradient-secondary" role="progressbar" style="width: 57%" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <div class="">
                              <p>Target</p>
                                <div class="w-icon">
                                    <p>57%</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>   
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-card-four">
                    <div class="widget-content">
                        <div class="w-header">
                            <div class="w-info">
                                <h6 class="value">Deals made</h6>
                            </div>
                            <div class="task-action">
                                <div class="dropdown">
                                    <a class="dropdown-toggle" href="#" role="button" id="pendingTask" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="pendingTask" style="will-change: transform;">
                                        <a class="dropdown-item" href="javascript:void(0);">This Week</a>
                                        <a class="dropdown-item" href="javascript:void(0);">Last Week</a>
                                        <a class="dropdown-item" href="javascript:void(0);">Last Month</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="w-content">

                            <div class="w-info">
                                <p class="value">15 <span>+3 this month</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg></p>
                                <!-- <p class="">Expenses</p> -->
                            </div>
                            
                        </div>

                        <div class="w-progress-stats">                                            
                            <div class="progress">
                                <div class="progress-bar bg-gradient-danger" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <div class="">
                              <p>Target</p>
                                <div class="w-icon">
                                    <p>80%</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>  
                
            </div>
            <div class="tab-pane fade" id="icon-profile" role="tabpanel">
               <div id="app2">
                    <Chart2 />
                  </div>
            </div>
            
            <div class="tab-pane fade" id="icon-contact" role="tabpanel" aria-labelledby="icon-contact-tab">
               <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                    <div class="widget widget-table-three">
                
                                <div class="widget-heading">
                                    <h5 class="">Top Selling Product</h5>
                                </div>
                            
                                <div class="widget-content">
                                    <div class="table-responsive">
                                        <table class="table table-scroll">
                                            <thead>
                                                <tr>
                                                    <th><div class="th-content">Product</div></th>
                                                    <th><div class="th-content th-heading">Price</div></th>
                                                    <th><div class="th-content th-heading">Discount</div></th>
                                                    <th><div class="th-content">Sold</div></th>
                                                    <th><div class="th-content">Source</div></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><div class="td-content product-name"><img :src="asset('template/cork/assets/img/90x90.jpg')" alt="product"><div class="align-self-center"><p class="prd-name">Pulse Play</p><p class="prd-category text-primary">Digital</p></div></div></td>
                                                    <td><div class="td-content"><span class="pricing">$168.09</span></div></td>
                                                    <td><div class="td-content"><span class="discount-pricing">$60.09</span></div></td>
                                                    <td><div class="td-content">170</div></td>
                                                    <td><div class="td-content"><a href="javascript:void(0);" class="text-danger"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-right"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg> Direct</a></div></td>
                                                </tr>
                                                <tr>
                                                    <td><div class="td-content product-name"><img :src="asset('template/cork/assets/img/90x90.jpg')" alt="product"><div class="align-self-center"><p class="prd-name">Shoes</p><p class="prd-category text-warning">Faishon</p></div></div></td>
                                                    <td><div class="td-content"><span class="pricing">$108.09</span></div></td>
                                                    <td><div class="td-content"><span class="discount-pricing">$47.09</span></div></td>
                                                    <td><div class="td-content">130</div></td>
                                                    <td><div class="td-content"><a href="javascript:void(0);" class="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-right"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg> Google</a></div></td>
                                                </tr>
                                                <tr>
                                                    <td><div class="td-content product-name"><img :src="asset('template/cork/assets/img/90x90.jpg')" alt="product"><div class="align-self-center"><p class="prd-name">Watch</p><p class="prd-category text-danger">Accessories</p></div></div></td>
                                                    <td><div class="td-content"><span class="pricing">$88.00</span></div></td>
                                                    <td><div class="td-content"><span class="discount-pricing">$20.00</span></div></td>
                                                    <td><div class="td-content">66</div></td>
                                                    <td><div class="td-content"><a href="javascript:void(0);" class="text-warning"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-right"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg> Ads</a></div></td>
                                                </tr>
                                                <tr>
                                                    <td><div class="td-content product-name"><img :src="asset('template/cork/assets/img/90x90.jpg')" alt="product"><div class="align-self-center"><p class="prd-name">Laptop</p><p class="prd-category text-primary">Digital</p></div></div></td>
                                                    <td><div class="td-content"><span class="pricing">$110.00</span></div></td>
                                                    <td><div class="td-content"><span class="discount-pricing">$33.00</span></div></td>
                                                    <td><div class="td-content">35</div></td>
                                                    <td><div class="td-content"><a href="javascript:void(0);" class="text-info"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-right"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg> Email</a></div></td>
                                                </tr>
                                                <tr>
                                                    <td><div class="td-content product-name"><img :src="asset('template/cork/assets/img/90x90.jpg')" alt="product"><div class="align-self-center"><p class="prd-name">Camera</p><p class="prd-category text-primary">Digital</p></div></div></td>
                                                    <td><div class="td-content"><span class="pricing">$126.04</span></div></td>
                                                    <td><div class="td-content"><span class="discount-pricing">$26.04</span></div></td>
                                                    <td><div class="td-content">30</div></td>
                                                    <td><div class="td-content"><a href="javascript:void(0);" class="text-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-right"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg> Referral</a></div></td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                    </div>
                </div>
                
            </div>
            
            
          </div>
          

        </div>
        
      </div>
      <!-- Statistics end -->
    </div> <!-- row end -->
    
    <div class="row"> <!-- row -->
       <div class="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 layout-spacing">
          <div class="widget-four">
              <div class="widget-heading">
                  <h5 class="">Visitors by Browser</h5>
              </div>
              <div class="widget-content">
                  <div class="vistorsBrowser">
                      <div class="browser-list">
                          <div class="w-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chrome"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line></svg>
                          </div>
                          <div class="w-browser-details">
                              <div class="w-browser-info">
                                  <h6>Website</h6>
                                  <p class="browser-count">65%</p>
                              </div>
                              <div class="w-browser-stats">
                                  <div class="progress">
                                      <div class="progress-bar bg-gradient-primary" role="progressbar" style="width: 65%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="browser-list">
                          <div class="w-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-compass"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                          </div>
                          <div class="w-browser-details">
                              
                              <div class="w-browser-info">
                                  <h6>Word by mouth</h6>
                                  <p class="browser-count">25%</p>
                              </div>

                              <div class="w-browser-stats">
                                  <div class="progress">
                                      <div class="progress-bar bg-gradient-danger" role="progressbar" style="width: 35%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                              </div>

                          </div>

                      </div>

                      <div class="browser-list">
                          <div class="w-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                          </div>
                          <div class="w-browser-details">
                              
                              <div class="w-browser-info">
                                  <h6>Instagram</h6>
                                  <p class="browser-count">15%</p>
                              </div>

                              <div class="w-browser-stats">
                                  <div class="progress">
                                      <div class="progress-bar bg-gradient-warning" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                              </div>

                          </div>

                      </div>
                      <div class="browser-list">
                          <div class="w-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chrome"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line></svg>
                          </div>
                          <div class="w-browser-details">
                              
                              <div class="w-browser-info">
                                  <h6>Facebook</h6>
                                  <p class="browser-count">50%</p>
                              </div>

                              <div class="w-browser-stats">
                                  <div class="progress">
                                      <div class="progress-bar bg-gradient-warning" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                              </div>

                          </div>

                      </div>
                      <div class="browser-list">
                          <div class="w-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                          </div>
                          <div class="w-browser-details">
                              
                              <div class="w-browser-info">
                                  <h6>Others</h6>
                                  <p class="browser-count">15%</p>
                              </div>

                              <div class="w-browser-stats">
                                  <div class="progress">
                                      <div class="progress-bar bg-gradient-warning" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                              </div>

                          </div>

                      </div>
                      
                  </div>

              </div>
          </div>
      </div>
      <!-- 2nd row widgets -->
      <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 layout-spacing">
          <div class="widget widget-activity-five">

            <div class="widget-heading">
                <h5 class="">Activity Log</h5>

                <div class="task-action">
                    <div class="dropdown">
                        <a class="dropdown-toggle" href="#" role="button" id="pendingTask" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                        </a>

                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="pendingTask" style="will-change: transform;">
                            <a class="dropdown-item" href="javascript:void(0);">View All</a>
                            <a class="dropdown-item" href="javascript:void(0);">Mark as Read</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="widget-content">

              <div class="w-shadow-top"></div>

                <div class="mt-container mx-auto">
                    <div class="timeline-line">
                        
                        <div class="item-timeline timeline-new">
                            <div class="t-dot">
                                <div class="t-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></div>
                            </div>
                            <div class="t-content">
                                <div class="t-uppercontent">
                                    <h5>New project created : <a href="javscript:void(0);"><span>[Cork Admin Template]</span></a></h5>
                                </div>
                                <p>27 Feb, 2020</p>
                            </div>
                        </div>

                        <div class="item-timeline timeline-new">
                            <div class="t-dot">
                                <div class="t-success"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
                            </div>
                            <div class="t-content">
                                <div class="t-uppercontent">
                                    <h5>Mail sent to <a href="javascript:void(0);">HR</a> and <a href="javascript:void(0);">Admin</a></h5>
                                </div>
                                <p>28 Feb, 2020</p>
                            </div>
                        </div>

                        <div class="item-timeline timeline-new">
                            <div class="t-dot">
                                <div class="t-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                            </div>
                            <div class="t-content">
                                <div class="t-uppercontent">
                                    <h5>Server Logs Updated</h5>
                                </div>
                                <p>27 Feb, 2020</p>
                            </div>
                        </div>

                        <div class="item-timeline timeline-new">
                            <div class="t-dot">
                                <div class="t-danger"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                            </div>
                            <div class="t-content">
                                <div class="t-uppercontent">
                                    <h5>Task Completed : <a href="javscript:void(0);"><span>[Backup Files EOD]</span></a></h5>
                                </div>
                                <p>01 Mar, 2020</p>
                            </div>
                        </div>

                        <div class="item-timeline timeline-new">
                            <div class="t-dot">
                                <div class="t-warning"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg></div>
                            </div>
                            <div class="t-content">
                                <div class="t-uppercontent">
                                    <h5>Documents Submitted from <a href="javascript:void(0);">Sara</a></h5>
                                    <span class=""></span>
                                </div>
                                <p>10 Mar, 2020</p>
                            </div>
                        </div>

                        <div class="item-timeline timeline-new">
                            <div class="t-dot">
                                <div class="t-dark"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line></svg></div>
                            </div>
                            <div class="t-content">
                                <div class="t-uppercontent">
                                    <h5>Server rebooted successfully</h5>
                                    <span class=""></span>
                                </div>
                                <p>06 Apr, 2020</p>
                            </div>
                        </div>                                      
                    </div>                                    
                </div>

                <div class="w-shadow-bottom"></div>
              </div>
            </div>
      </div>
      <!-- 2nd row widgets end -->
      
      

    </div>
  </div><!-- container -->
</template>


<script>
	export default {
		name: 'dashboard',
    data(){
      return {
        data: {
          id: '',
          name: '',
          email: '',
          password: '',
          role_names: ''
        },
        users: [],
        roles: [],
        addModal: false,
        isAdding: false,
        index: -1,
      }
    },

    methods: {
      
    },

    async created(){
      //alert('elo');
      const res = await this.callApi('get', 'dashboard');
      console.log('res', res);
      if(res.status == 200){
        this.users = res.data
        const res2 = await this.callApi('get', 'dashboard');
        if(res2.status == 200){
          this.roles = res2.data
        }else{
          this.swr()
        }
      }else{
        this.swr()
      }
    },
	}
</script>
<script>
import Chart from '../components/Chartcomponent.vue';
import Chart2 from '../components/Chartcomponent2.vue'

export default {
  name: '/app',
  components: {
    Chart,
    Chart2
  },
}
</script>

// 
// import Chart2 from '../components/Chartcomponent2.vue'

// export default {
//   name: '/app2',
//   components: {
//     Chart2
//   },
// }
// </script>