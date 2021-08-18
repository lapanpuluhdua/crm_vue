<template>
    
<!-- Loading wrapper start -->
<!-- <div id="loading-wrapper">
    <div class="spinner-border"></div>
    Loading...
</div> -->
<!-- Loading wrapper end -->
		<!-- Page wrapper start -->
		<div class="page-wrapper">
			
			<!-- Sidebar wrapper start -->
			<nav class="sidebar-wrapper">

				<!-- Sidebar content start -->
				<div class="sidebar-tabs">

					<!-- Tabs nav start -->
					<div class="nav" role="tablist" aria-orientation="vertical">
						<a href="#" class="logo">
							<img :src="asset('/template/unipro/img/schoolscan1.jpg')" alt="Uni Pro Admin">
                            
						</a>
						<a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#tab-home" role="tab" aria-controls="tab-home" aria-selected="true">
							<i class="icon-home2"></i>
							<span class="nav-link-text">Dashboards</span>
						</a>
						<a class="nav-link" id="product-tab" data-bs-toggle="tab" href="#tab-product" role="tab" aria-controls="tab-product" aria-selected="false">
							<i class="icon-layers2"></i>
							<span class="nav-link-text">Product</span>
						</a>
						<!-- <a class="nav-link" id="pages-tab" data-bs-toggle="tab" href="#tab-pages" role="tab" aria-controls="tab-pages" aria-selected="false">
							<i class="icon-book-open"></i>
							<span class="nav-link-text">Pages</span>
						</a> -->
						<a class="nav-link" id="forms-tab" data-bs-toggle="tab" href="#tab-forms" role="tab" aria-controls="tab-forms" aria-selected="false">
							<i class="icon-edit1"></i>
							<span class="nav-link-text">Leads</span>
						</a>
						<!-- <a class="nav-link" id="components-tab" data-bs-toggle="tab" href="#tab-components" role="tab" aria-controls="tab-components" aria-selected="false">
							<i class="icon-box"></i>
							<span class="nav-link-text">Components</span>
						</a>
						<a class="nav-link" id="graphs-tab" data-bs-toggle="tab" href="#tab-graphs" role="tab" aria-controls="tab-graphs" aria-selected="false">
							<i class="icon-pie-chart1"></i>
							<span class="nav-link-text">Graphs</span>
						</a>
						<a class="nav-link" id="authentication-tab" data-bs-toggle="tab" href="#tab-authentication" role="tab" aria-controls="tab-authentication" aria-selected="false">
							<i class="icon-unlock"></i>
							<span class="nav-link-text">Authentication</span>
						</a>
						<a class="nav-link settings" id="settings-tab" data-bs-toggle="tab" href="#tab-settings" role="tab" aria-controls="tab-authentication" aria-selected="false">
							<i class="icon-settings1"></i>
							<span class="nav-link-text">Settings</span>
						</a> -->
					</div>
					<!-- Tabs nav end -->

					<!-- Tabs content start -->
					<div class="tab-content">
								
						<!-- Chat tab -->
						<div class="tab-pane fade show active" id="tab-home" role="tabpanel" aria-labelledby="home-tab">

							<!-- Tab content header start -->
							<div class="tab-pane-header">
								CRM Users
							</div>
							<!-- Tab content header end -->

							<!-- Sidebar menu starts -->
							<div class="sidebarMenuScroll">
								<div class="sidebar-menu">
									<ul>
										<li>
											<router-link :to="{ name: 'dashboard' }">
												<div>
													<span class="">Dashboard</span>
												</div>
											</router-link>
										</li>
										<li>
											<router-link :to="{ name: 'user' }">
												<div>
													<span class="">User</span>
												</div>
											</router-link>
										</li>
										<li>
											<router-link :to="{ name: 'role' }">
												<div>
													<span class="">Role</span>
												</div>
											</router-link>
										</li>
										<li>
											<router-link :to="{ name: 'permission' }">
												<div>
													<span class="">Permissions</span>
												</div>
											</router-link>
										</li>
										<li>
											<router-link :to="{ name: 'permission' }">
												<div>
													<span class="">Permissions for Roles</span>
												</div>
											</router-link>
										</li>
										<li>
											<router-link :to="{ name: 'enquiry' }">
												<div>
													<span class="">Enquiry</span>
												</div>
											</router-link>
											<router-link :to="{ name: 'subscription' }">
												<div>
													<span class="">Subscription</span>
												</div>
											</router-link>
										</li>
									</ul>
								</div>
							</div>
							<!-- Sidebar menu ends -->

							<!-- Sidebar actions starts -->
							<div class="sidebar-actions">
								<a href="#" class="red">
									<div class="bg-avatar">12</div>
									<h5>New Orders</h5>
								</a>
								<a href="#" class="blue">
									<div class="bg-avatar">24</div>
									<h5>Bills Pending</h5>
								</a>
							</div>
							<!-- Sidebar actions ends -->

						</div>

						<!-- Pages tab -->
						<div class="tab-pane fade" id="tab-product" role="tabpanel" aria-labelledby="product-tab">
							
							<!-- Tab content header start -->
							<div class="tab-pane-header">
								Product
							</div>
							<!-- Tab content header end -->

							<!-- Sidebar menu starts -->
							<div class="sidebarMenuScroll">
								<div class="sidebar-menu">
									<ul>
										<li>
											<router-link :to="{ name: 'products' }">
												<div>
													<span class="">Product List</span>
												</div>
											</router-link>
										</li>
									</ul>
								</div>
							</div>
							<!-- Sidebar menu ends -->

							<!-- Sidebar actions starts -->
							<div class="sidebar-actions">
								<div class="support-tile">
									<i class="icon-headphones"></i> 24/7 Support
								</div>
							</div>
							<!-- Sidebar actions ends -->
							
						</div>

						

						<!-- Forms tab -->
						<div class="tab-pane fade" id="tab-forms" role="tabpanel" aria-labelledby="forms-tab">

							<!-- Tab content header start -->
							<div class="tab-pane-header">
								Leads
							</div>
							<!-- Tab content header end -->

							<!-- Sidebar menu starts -->
							<div class="sidebarMenuScroll">
								<div class="sidebar-menu">
									<ul>
										<!-- <li class="list-heading">Leads</li> -->
										<li>
											<router-link :to="{ name: 'enquiryprocess' }">
												<div>
													<span class="">Processed Enquiries</span>
												</div>
											</router-link>
										</li>
										<li>
											<router-link :to="{ name: 'enquiryAssign' }">
												<div>
													<span class="">Assignment</span>
												</div>
											</router-link>
										</li>
										<li>
											<router-link :to="{ name: 'comlog' }">
												<div>
													<span class="">Communication Logs</span>
												</div>
											</router-link>
										</li>
										<li>
											<router-link :to="{ name: 'allenquiry' }">
												<div>
													<span class="">All Enquiries</span>
												</div>
											</router-link>
										</li>
									</ul>		
								</div>
							</div>
							<!-- Sidebar menu ends -->

							<!-- Sidebar actions starts -->
							<div class="sidebar-actions">
								<div class="support-tile red">
									<i class="icon-mail"></i> Inbox Full
								</div>
							</div>
							<!-- Sidebar actions ends -->

						</div>
						
						<!-- Components tab -->
						<div class="tab-pane fade" id="tab-components" role="tabpanel" aria-labelledby="components-tab">
							
							<!-- Tab content header start -->
							<div class="tab-pane-header">
								Components
							</div>
							<!-- Tab content header end -->

							<!-- Sidebar menu starts -->
							<div class="sidebarMenuScroll">
								<div class="sidebar-menu">
									<ul>
                                        <li>
                                            <a href="#">Accordions</a>
                                        </li>
                                        <li>
                                            <a href="#">Alerts</a>
                                        </li>
                                        <li>
                                            <a href="#">Buttons</a>
                                        </li>
                                        <li>
                                            <a href="#">Badges</a>
                                        </li>
                                        <li>
                                            <a href="#">Cards</a>
                                        </li>
                                        <li>
                                            <a href="#">Carousel</a>
                                        </li>
                                        <li>
                                            <a href="#">List group</a>
                                        </li>
                                        <li>
                                            <a href="#">Modal</a>
                                        </li>
                                        <li>
                                            <a href="#">Paginations</a>
                                        </li>
                                        <li>
                                            <a href="#">Popovers</a>
                                        </li>
                                        <li>
                                            <a href="#">Progress</a>
                                        </li>
                                        <li>
                                            <a href="#">Spinners</a>
                                        </li>
                                        <li>
                                            <a href="#">Tabs</a>
                                        </li>
                                        <li>
                                            <a href="#">Toasts</a>
                                        </li>
                                        <li>
                                            <a href="#">Tooltips</a>
                                        </li>
									</ul>
								</div>
							</div>
							<!-- Sidebar menu ends -->

                            <!-- Sidebar actions starts -->
							<div class="sidebar-actions">
								<div class="support-tile yellow">
									<i class="icon-arrow-down-circle"></i><a href="#">Download Reports</a>						</div>
							</div>
							<!-- Sidebar actions ends -->

						</div>

						<!-- Graphs tab -->
						<div class="tab-pane fade" id="tab-graphs" role="tabpanel" aria-labelledby="graphs-tab">
							
							<!-- Tab content header start -->
							<div class="tab-pane-header">
								Graphs &amp; Tables
							</div>
							<!-- Tab content header end -->
							
							<!-- Sidebar menu starts -->
							<div class="sidebarMenuScroll">
								<div class="sidebar-menu">
                                    <ul>
										<li class="list-heading">Graphs</li>
                                        <li>
                                            <a href="#">Apex Graphs</a>
                                        </li>
                                        <li>
                                            <a href="#">Morris Graphs</a>
                                        </li>
                                        <li>
                                            <a href="#">Vector Maps</a>
                                        </li>
                                    </ul>
                                    
                                    <ul>
										<li class="list-heading">Tables</li>
                                        <li>
                                            <a href="#">Bootstrap Tables</a>
                                        </li>
                                        <li>
                                            <a href="#">Custom Tables</a>
                                        </li>
                                        <li>
                                            <a href="#">Data Tables</a>
                                        </li>
									</ul>
								</div>
							</div>
							<!-- Sidebar menu ends -->

							<!-- Sidebar actions starts -->
							<div class="sidebar-actions">
								<div class="support-tile pink">
									<i class="icon-align-right1"></i> RTL Support
								</div>
							</div>
							<!-- Sidebar actions ends -->

						</div>

						<!-- Authentication tab -->
						<div class="tab-pane fade" id="tab-authentication" role="tabpanel" aria-labelledby="authentication-tab">
							
							<!-- Tab content header start -->
							<div class="tab-pane-header">
								Authentication
							</div>
							<!-- Tab content header end -->

							<!-- Sidebar menu starts -->
							<div class="sidebarMenuScroll">
								<div class="sidebar-menu">
									<ul>
										<li>
											<a href="#">Login</a>
										</li>
										<li>
											<a href="#">Signup</a>
										</li>
										<li>
											<a href="#">Forgot Password</a>
										</li>
										<li>
											<a href="#">Reset Password</a>
										</li>
										<li>
											<a href="#">Lock Screen</a>
										</li>
										<li>
											<a href="#">Subscribe</a>
										</li>										
										<li>
											<a href="#">Maintenance</a>
										</li>
										<li>
											<a href="#">404</a>
										</li>
										<li>
											<a href="#">Error</a>
										</li>
									</ul>
								</div>
							</div>
							<!-- Sidebar menu ends -->

							<!-- Sidebar actions starts -->
							<div class="sidebar-actions">
								<div class="support-tile blue">
									<a href="#" class="btn btn-light m-auto">Upgrade Account</a>
								</div>
							</div>
							<!-- Sidebar actions ends -->

						</div>
						
						<!-- Settings tab -->
						<div class="tab-pane fade" id="tab-settings" role="tabpanel" aria-labelledby="settings-tab">
							
							<!-- Tab content header start -->
							<div class="tab-pane-header">
								Settings
							</div>
							<!-- Tab content header end -->

							<!-- Settings start -->
							<div class="sidebarMenuScroll">
								<div class="sidebar-settings">
									<div class="accordion" id="settingsAccordion">
										<div class="accordion-item">
											<h2 class="accordion-header" id="genInfo">
												<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#genCollapse" aria-expanded="true" aria-controls="genCollapse">
													General Info
												</button>
											</h2>
											<div id="genCollapse" class="accordion-collapse collapse show" aria-labelledby="genInfo" data-bs-parent="#settingsAccordion">
												<div class="accordion-body">
													<div class="field-wrapper">
														<input type="text" value="Jeivxezer Lopexz" />
														<div class="field-placeholder">Full Name</div>
													</div>

													<div class="field-wrapper">
														<input type="email" value="jeivxezer-lopexz@email.com" />
														<div class="field-placeholder">Email</div>
													</div>

													<div class="field-wrapper">
														<input type="text" value="0 0000 00000" />
														<div class="field-placeholder">Contact</div>
													</div>
													<div class="field-wrapper m-0">
														<button class="btn btn-primary stripes-btn">Save</button>
													</div>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h2 class="accordion-header" id="chngPwd">
												<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chngPwdCollapse" aria-expanded="false" aria-controls="chngPwdCollapse">
													Change Password
												</button>
											</h2>
											<div id="chngPwdCollapse" class="accordion-collapse collapse" aria-labelledby="chngPwd" data-bs-parent="#settingsAccordion">
												<div class="accordion-body">
													<div class="field-wrapper">
														<input type="text" value="">
														<div class="field-placeholder">Current Password</div>
													</div>
													<div class="field-wrapper">
														<input type="password" value="">
														<div class="field-placeholder">New Password</div>
													</div>
													<div class="field-wrapper">
														<input type="password" value="">
														<div class="field-placeholder">Confirm Password</div>
													</div>
													<div class="field-wrapper m-0">
														<button class="btn btn-primary stripes-btn">Save</button>
													</div>

												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h2 class="accordion-header" id="sidebarNotifications">
												<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#notiCollapse" aria-expanded="false" aria-controls="notiCollapse">
													Notifications
												</button>
											</h2>
											<div id="notiCollapse" class="accordion-collapse collapse" aria-labelledby="sidebarNotifications" data-bs-parent="#settingsAccordion">
												<div class="accordion-body">
													<div class="list-group m-0">
														<div class="noti-container">
															<div class="noti-block">
																<div>Alerts</div>
																<div class="form-switch">
																	<input class="form-check-input" type="checkbox" id="showAlertss" checked>
																	<label class="form-check-label" for="showAlertss"></label>
																</div>
															</div>
															<div class="noti-block">
																<div>Enable Sound</div>
																<div class="form-switch">
																	<input class="form-check-input" type="checkbox" id="soundEnable">
																	<label class="form-check-label" for="soundEnable"></label>
																</div>
															</div>
															<div class="noti-block">
																<div>Allow Chat</div>
																<div class="form-switch">
																	<input class="form-check-input" type="checkbox" id="allowChat">
																	<label class="form-check-label" for="allowChat"></label>
																</div>
															</div>
															<div class="noti-block">
																<div>Desktop Messages</div>
																<div class="form-switch">
																	<input class="form-check-input" type="checkbox" id="desktopMessages">
																	<label class="form-check-label" for="desktopMessages"></label>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- Settings end -->

							<!-- Sidebar actions starts -->
							<div class="sidebar-actions">
								<div class="support-tile blue">
									<a href="#" class="btn btn-light m-auto">Advance Settings</a>
								</div>
							</div>
							<!-- Sidebar actions ends -->
						</div>

					</div>
					<!-- Tabs content end -->
					
				</div>
				<!-- Sidebar content end -->
				
			</nav>
			<!-- Sidebar wrapper end -->

			<!-- *************
				************ Main container start *************
			************* -->
			<div class="main-container">

				<!-- Page header starts -->
				<div class="page-header">
					
					<!-- Row start -->
					<div class="row gutters">
						<div class="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-9">

							<!-- Search container start -->
							<div class="search-container">

								<!-- Toggle sidebar start -->
								<div class="toggle-sidebar" id="toggle-sidebar">
									<i class="icon-menu"></i>
								</div>
								<!-- Toggle sidebar end -->

								<!-- Mega Menu Start -->
								<div class="cd-dropdown-wrapper">
									<a class="cd-dropdown-trigger" href="#0"><i class="icon-menu menu-icon"></i><span class="menu-text">Megamenu</span></a>
									<nav class="cd-dropdown">

										<ul class="cd-dropdown-content">

											<li class="has-children">
												<a href="#">Main Pages</a>
												<ul class="cd-secondary-dropdown is-hidden">
													<li class="has-children">
														<a href="#">Dashboards</a>
														<ul class="is-hidden">
															<li>
																<a href="#">Reports</a>
															</li>
															<li>
																<a href="#">Saas</a>
															</li>
															<li>
																<a href="#">Sales</a>
															</li>
															<li>
																<a href="#">Admin</a>
															</li>
															<li>
																<a href="#">Analytics</a>
															</li>
															<li>
																<a href="#">CRM</a>
															</li>
															<li>
																<a href="#">Consulting</a>
															</li>
														</ul>
													</li>
													<li class="has-children">
														<a href="#">Layouts</a>
														<ul class="is-hidden">
															<li>
																<a href="#">Starter Page</a>
															</li>
															<li>
																<a href="#">Full Screen</a>
															</li>
															<li>
																<a href="#">Global Search</a>
															</li>
															<li>
																<a href="#">Megamenu</a>
															</li>
															<li>
																<a href="#">Breadcrumbs</a>
															</li>
															<li>
																<a href="#">Scroll Cards</a>
															</li>
														</ul>
													</li>
												</ul>
											</li>

											<li class="has-children">
												<a href="#">Product &amp; Calendars</a>

												<ul class="cd-secondary-dropdown is-hidden">
													<li class="has-children">
														<a href="#">Product</a>
														<ul class="is-hidden">
															<li>
																<a href="#">Products Grid</a>
															</li>
															<li>
																<a href="#">Products List</a>
															</li>
															<li>
																<a href="#">Add Product</a>
															</li>
															<li>
																<a href="#">Orders</a>
															</li>
															<li>
																<a href="#">Customers</a>
															</li>
															<li>
																<a href="#">Reviews</a>
															</li>
														</ul>
													</li>

													<li class="has-children">
														<a href="#">Calendars</a>
														<ul class="is-hidden">
															<li>
																<a href="#">Daygrid View</a>
															</li>
															<li>
																<a href="#">List View</a>
															</li>
															<li>
																<a href="#">Draggable</a>
															</li>
															<li>
																<a href="#">Google View</a>
															</li>
															<li>
																<a href="#">Selectable</a>
															</li>
														</ul>
													</li>
												</ul>
											</li>

											<li class="has-children">
												<a href="#">Enquiries</a>

												<ul class="cd-secondary-dropdown is-hidden">

													<li class="has-children">
														<a href="#">Leads</a>
														<ul class="is-hidden">
															<li>
																<a href="#">Default Layout</a>
															</li>
															<li>
																<a href="#">Layout Sections</a>
															</li>
															<li>
																<a href="#">Simple Form Layout</a>
															</li>
															<li>
																<a href="#">Select 2 Tags and Mask</a>
															</li>
															<li>
																<a href="#">Horizontal Form Layout</a>
															</li>
															<li>
																<a href="#">Layout Six with Tabs</a>
															</li>
														</ul>
													</li>

													<li class="has-children">
														<a href="#">Forms</a>
														<ul class="is-hidden">
															<li>
																<a href="#">Form Inputs</a>
															</li>
															<li>
																<a href="#">Input Groups</a>
															</li>
															<li>
																<a href="#">Checkbox &amp; Radios</a>
															</li>
															<li>
																<a href="#">Form Validation</a>
															</li>
															<li>
																<a href="#">Dropzone</a>
															</li>
															<li>
																<a href="#">Select 2 Dropdowns</a>
															</li>
															<li>
																<a href="#">Date Time Picker</a>
															</li>
															<li>
																<a href="#">Input Mask</a>
															</li>
															<li>
																<a href="#">Input Range</a>
															</li>
															<li>
																<a href="#">WYSIWYG Editor</a>
															</li>
														</ul>
													</li>
												</ul>
											</li>

											<li class="has-children">
												<a href="#">Pages &amp; Components</a>

												<ul class="cd-secondary-dropdown is-hidden">

													<li class="has-children">
														<a href="#">Pages</a>
														<ul class="is-hidden">
															<li>
																<a href="#">Chat</a>
															</li>
															<li>
																<a href="#">Tasks</a>
															</li>
															<li>
																<a href="#">Create Invoice</a>
															</li>
															<li>
																<a href="#">View Invoice</a>
															</li>
															<li>
																<a href="#">Documents</a>
															</li>
															<li>
																<a href="#">Faq's</a>
															</li>
															<li>
																<a href="#">Contacts</a>
															</li>
															<li>
																<a href="#">Pricing</a>
															</li>
															<li>
																<a href="#">Gallery Tiles</a>
															</li>
															<li>
																<a href="#">Gallery</a>
															</li>
															<li>
																<a href="#">Icons</a>
															</li>
															<li>
																<a href="#">Timeline</a>
															</li>
															<li>
																<a href="#">Search Results</a>
															</li>
															<li>
																<a href="#">Account Settings</a>
															</li>
															<li>
																<a href="#">User Profile</a>
															</li>
														</ul>
													</li>

													<li class="has-children">
														<a href="#">Components</a>
														<ul class="is-hidden">
															<li>
																<a href="#">Accordions</a>
															</li>
															<li>
																<a href="#">Alerts</a>
															</li>
															<li>
																<a href="#">Buttons</a>
															</li>
															<li>
																<a href="#">Badges</a>
															</li>
															<li>
																<a href="#">Cards</a>
															</li>
															<li>
																<a href="#">Carousel</a>
															</li>
															<li>
																<a href="#">List group</a>
															</li>
															<li>
																<a href="#">Modal</a>
															</li>
															<li>
																<a href="#">Paginations</a>
															</li>
															<li>
																<a href="#">Popovers</a>
															</li>
															<li>
																<a href="#">Progress</a>
															</li>
															<li>
																<a href="#">Spinners</a>
															</li>
															<li>
																<a href="#">Tabs</a>
															</li>
															<li>
																<a href="#">Toasts</a>
															</li>
															<li>
																<a href="#">Tooltips</a>
															</li>
														</ul>
													</li>
												</ul>
											</li>

											<li class="has-children">
												<a href="#">Graphs &amp; Tables</a>

												<ul class="cd-secondary-dropdown is-hidden">

													<li class="has-children">
														<a href="#">Graphs</a>
														<ul class="is-hidden">
															<li>
																<a href="#">Apex Graphs</a>
															</li>
															<li>
																<a href="#">Morris Graphs</a>
															</li>
															<li>
																<a href="#">Vector Maps</a>
															</li>
														</ul>
													</li>

													<li class="has-children">
														<a href="#">Tables</a>
														<ul class="is-hidden">
															<li>
																<a href="#">Bootstrap Tables</a>
															</li>
															<li>
																<a href="#">Custom Tables</a>
															</li>
															<li>
																<a href="#">Data Tables</a>
															</li>
														</ul>
													</li>
												</ul>
											</li>
											
											<li>
												<a href="#">Account Settings</a>
											</li>
											<li>
												<a href="#">Logout</a>
											</li>
											<li>
												<a href="#">Error</a>
											</li>
										</ul>
										
									</nav>
								</div>
								<!-- Mega Menu End -->

								<!-- Search input group start -->
								<div class="ui fluid category search">
									<div class="ui icon input">
										<input class="prompt" type="text" placeholder="Search">
										<i class="search icon icon-search1"></i>
									</div>
									<div class="results"></div>
								</div>
								<!-- Search input group end -->

							</div>
							<!-- Search container end -->

						</div>
						<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-3">

							<!-- Header actions start -->
							<ul class="header-actions">
								<li class="dropdown">
									<a href="#" id="taskss" data-toggle="dropdown" aria-haspopup="true">
										<i class="icon-check-square"></i>
									</a>
									<div class="dropdown-menu dropdown-menu-end lrg" aria-labelledby="taskss">
										<div class="dropdown-menu-header">
											Tasks (7/10)
										</div>
										<div class="customScroll">
											<ul class="activity">
												<li class="activity-list">
													<div class="detail-info">
														<p class="date">Today</p>
														<p class="info">Messages accepted with attachments</p>
													</div>
												</li>
												<li class="activity-list danger">
													<div class="detail-info">
														<p class="date">Today</p>
														<p class="info">Send email notifications of subscriptions and deletions to list owner</p>
													</div>
												</li>
												<li class="activity-list success">
													<div class="detail-info">
														<p class="date">Yesterday</p>
														<p class="info">Required change logs activity reports</p>
													</div>
												</li>
												<li class="activity-list warning">
													<div class="detail-info">
													<p class="date">2 Days Ago</p>
														<p class="info">Strategic partnership plan</p>
													</div>
												</li>
												<li class="activity-list">
													<div class="detail-info">
														<p class="date">2 days ago</p>
														<p class="info">Send email notifications of subscriptions and deletions to list owner</p>
													</div>
												</li>
												<li class="activity-list danger">
													<div class="detail-info">
														<p class="date">3 days ago</p>
														<p class="info">Required change logs activity reports</p>
													</div>
												</li>
												<li class="activity-list success">
													<div class="detail-info">
													<p class="date">7 days ago</p>
														<p class="info">Strategic partnership plan</p>
													</div>
												</li>
												<li class="activity-list">
													<div class="detail-info">
														<p class="date">2 weeks ago</p>
														<p class="info">Required change logs activity reports</p>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</li>
								<li class="dropdown">
									<a href="#" id="notifications" data-toggle="dropdown" aria-haspopup="true">
										<i class="icon-alert-triangle"></i>
									</a>
									<div class="dropdown-menu dropdown-menu-end lrg" aria-labelledby="notifications">
										<div class="dropdown-menu-header">
											Notifications (7)
										</div>
										<div class="customScroll">
											<ul class="header-notifications">
												<li>
													<a href="#">
														<div class="user-img online">
															<img :src="asset('/template/unipro/img/user6.png')" alt="User">
														</div>
														<div class="details">
															<div class="user-title">Larkyn</div>
															<div class="noti-details">Check out every table in detail.</div>
															<div class="noti-date">April 25, 04:00 pm</div>
														</div>
													</a>
												</li>
												<li>
													<a href="#">
														<div class="user-img busy">
															<img :src="asset('/template/unipro/img/user10.png')" alt="User">
														</div>
														<div class="details">
															<div class="user-title">Braxten</div>
															<div class="noti-details">Approved new design.</div>
															<div class="noti-date">April 10, 12:00 am</div>
														</div>
													</a>
												</li>
												<li>
													<a href="#">
														<div class="user-img away">
															<img :src="asset('/template/unipro/img/user21.png')" alt="User">
														</div>
														<div class="details">
															<div class="user-title">Maria</div>
															<div class="noti-details">Membership has been ended.</div>
															<div class="noti-date">March 20, 07:30 pm</div>
														</div>
													</a>
												</li>
												<li>
													<a href="#">
														<div class="user-img busy">
															<img :src="asset('/template/unipro/img/user15.png')" alt="User">
														</div>
														<div class="details">
															<div class="user-title">Alex</div>
															<div class="noti-details">Design Review.</div>
															<div class="noti-date">April 18, 09:30 am</div>
														</div>
													</a>
												</li>
												<li>
													<a href="#">
														<div class="user-img online">
															<img :src="asset('/template/unipro/img/user5.png')" alt="User">
														</div>
														<div class="details">
															<div class="user-title">Sunny</div>
															<div class="noti-details">UI Discussion</div>
															<div class="noti-date">April 21, 05:00 pm</div>
														</div>
													</a>
												</li>												
											</ul>
										</div>
									</div>
								</li>
								<li class="dropdown">
									<a href="#" id="userSettings" class="user-settings" data-toggle="dropdown" aria-haspopup="true">
										<span class="avatar">

                                            <img v-if="urlCheck() == true" :src="image.url" style="width: 80%; background-color: rgb(104, 222, 235); border-radius: 50%;">
                                      

                                            <img v-else :src="asset('/template/unipro/img/user.svg')" style="width: 80%; background-color: rgb(104, 222, 235); border-radius: 50%;">
                                        

											<span class="status busy"></span>
										</span>
									</a>
									<div class="dropdown-menu dropdown-menu-end md" aria-labelledby="userSettings">
										<div class="header-profile-actions">
											<a href="#"><i class="icon-user1"></i>Profile</a>
											<a href="#"><i class="icon-settings1"></i>Settings</a>
											<a href="#" @click="signOut"><i class="icon-log-out1"></i>Logout</a>
										</div>
									</div>
								</li>
							</ul>
							<!-- Header actions end -->

						</div>
					</div>
					<!-- Row end -->					

				</div>
				<!-- Page header ends -->
				<div class="content-wrapper-scroll">
    				<div class="content-wrapper">
						<router-view></router-view>
					

					</div>
					<div class="app-footer">© SchoolScan CRM 2021</div>
				</div>
				

			</div>
			<!-- *************
				************ Main container end *************
			************* -->

		</div>
		<!-- Page wrapper end -->


        
</template>

<script>

	import { EditIcon, UserIcon, SettingsIcon, HomeIcon, HelpCircleIcon, LogOutIcon, MessageSquareIcon, BellIcon, ChevronDownIcon, GridIcon, UserCheckIcon, LayoutIcon, CircleIcon, ChevronRightIcon, ChevronsLeftIcon } from 'vue-feather-icons';
	import { mapGetters, mapActions } from 'vuex';
	
	export default {
		data() {
        return {
          image:
            {
              url: this.$store.state.auth.user.profile_photo_url,
            },
            moreProfile: false,
            showProgress: false,
            windowWidth: window.innerWidth
			}
		},
		name: 'DashboardTemplate',
        computed: {
          ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
          })
        },
		mounted() {
			this.urlCheck();
			this.corkInit()
		},
		methods: {
			...mapActions({
				signOutAction: 'auth/signOut'
			}),

			async signOut () {
				const res = await this.signOutAction()
				if(res.status == 200){
				  this.$store.commit('auth/setToken', null)
				  this.$store.dispatch('auth/me')
				}else{
				  this.swr()
				}
			},
			urlCheck() {
            this.res = this.image.url
            var pattern = /^https:\/\//i
            if(pattern.test(this.res)){
                return true;
            }else{
                return false;
            }
        },

			corkInit(){
				$(document).ready(function() {
            App.init();
        });
			}
		},
		components: { EditIcon, UserIcon, SettingsIcon, HomeIcon, HelpCircleIcon, LogOutIcon, MessageSquareIcon, BellIcon, ChevronDownIcon, GridIcon, UserCheckIcon, LayoutIcon, CircleIcon, ChevronRightIcon, ChevronsLeftIcon
			// Headers: () => import('./Headers.vue'),
			// Navbar: () => import('./Navbar.vue'),
			// Logo: () => import('./Logo.vue'),
			// Settings: () => import('./Settings.vue')
		},
	}
</script>