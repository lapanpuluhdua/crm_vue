<template>

	<div class="">

				

				<!-- Content wrapper scroll start -->
		<!-- <div class="content-wrapper-scroll"> -->

			<!-- Content wrapper start -->
			<!-- <div class="content-wrapper"> -->

				<!-- Row start -->
				<div class="row gutters">
					<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
						<div class="stats-tile">
							<div class="sale-icon">
								<i class="icon-shopping-bag1"></i>
							</div>
							<div class="sale-details">
								<h2>25</h2>
								<p>Products</p>
							</div>
							<div class="sale-graph">
								<div id="sparklineLine1"></div>
							</div>
						</div>
					</div>
					<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
						<div class="stats-tile">
							<div class="sale-icon">
								<i class="icon-shopping-bag1"></i>
							</div>
							<div class="sale-details">
								<h2>32</h2>
								<p>Orders</p>
							</div>
							<div class="sale-graph">
								<div id="sparklineLine2"></div>
							</div>
						</div>
					</div>
					<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
						<div class="stats-tile">
							<div class="sale-icon">
								<i class="icon-check-circle"></i>
							</div>
							<div class="sale-details">
								<h2>19</h2>
								<p>Customers</p>
							</div>
							<div class="sale-graph">
								<div id="sparklineLine3"></div>
							</div>
						</div>
					</div>
				</div>
				<!-- Row end -->

				

				<!-- Row start -->
				<div class="row gutters">
					<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">

						<div class="card">
							<div id="app">
								<Chart />
							</div>
						</div>

					</div>
					<!-- Recent Orders table -->
					<div class="col-xl-8 col-lg-8 col-md-6 col-sm-6 col-12">

						<div class="card">
							<div class="card-header">
								<div class="card-title">Recent Orders</div>
								<div class="graph-day-selection" role="group">
									<button type="button" class="btn active">Export to Excel</button>
								</div>
							</div>
							<div class="card-body">
								<div class="table-responsive">
									<table class="table products-table">
										<thead>
											<tr>
												<th>Order No.</th>
												<th>Ordered Date</th>
												<th>Product</th>
												<th>Delivery Status</th>												
												<th>Amount</th>
												<th>Discount</th>
												<th>Location</th>
												<th>Est Delivery Date</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>#55589</td>
												<td>20/11/2020</td>
												<td>
													<img class="user" :src="asset('/template/unipro/img/products/bag.jpeg')" alt="Product Image">
												</td>
												<td>
													<span class="badge">Moving</span>
												</td>
												<td>$385.00</td>
												<td>30%</td>
												<td>Los Angeles, California</td>
												<td>22/11/2020</td>
											</tr>
											<tr>
												<td>#23198</td>
												<td>23/11/2020</td>												
												<td>
													<img class="user" :src="asset('/template/unipro/img/products/toy.jpeg')" alt="Product Image">
												</td>
												<td>
													<span class="badge">Shipped</span>
												</td>
												<td>$539.00</td>
												<td>25%</td>
												<td>Arverne, New York</td>
												<td>27/11/2020</td>
											</tr>
											<tr>
												<td>#87324</td>
												<td>26/11/2020</td>												
												<td>
													<img class="user" :src="asset('/template/unipro/img/products/pencils.jpeg')" alt="Product Image">
												</td>
												<td>
													<span class="badge">Pending</span>
												</td>
												<td>$671.00</td>
												<td>35%</td>
												<td>Mesquite, Texas</td>
												<td>29/11/2020</td>
											</tr>
											<tr>
												<td>#65673</td>
												<td>25/11/2020</td>
												<td>
													<img class="user" :src="asset('/template/unipro/img/products/camera.jpeg')" alt="Product Image">
												</td>
												<td>
													<span class="badge">Cancelled</span>
												</td>
												<td>$490.00</td>
												<td>21%</td>
												<td>Hallandale, Florida</td>
												<td>26/11/2020</td>
											</tr>
											<tr>
												<td>#87324</td>
												<td>26/11/2020</td>												
												<td>
													<img class="user" :src="asset('/template/unipro/img/products/pencils.jpeg')" alt="Product Image">
												</td>
												<td>
													<span class="badge">Pending</span>
												</td>
												<td>$671.00</td>
												<td>35%</td>
												<td>Mesquite, Texas</td>
												<td>29/11/2020</td>
											</tr>
											<tr>
												<td>#23198</td>
												<td>23/11/2020</td>												
												<td>
													<img class="user" :src="asset('/template/unipro/img/products/toy.jpeg')" alt="Product Image">
												</td>
												<td>
													<span class="badge">Shipped</span>
												</td>
												<td>$539.00</td>
												<td>25%</td>
												<td>Arverne, New York</td>
												<td>27/11/2020</td>
											</tr>
											<tr>
												<td>#23198</td>
												<td>23/11/2020</td>												
												<td>
													<img class="user" :src="asset('/template/unipro/img/products/toy.jpeg')" alt="Product Image">
												</td>
												<td>
													<span class="badge">Shipped</span>
												</td>
												<td>$539.00</td>
												<td>25%</td>
												<td>Arverne, New York</td>
												<td>27/11/2020</td>
											</tr>
											<tr>
												<td>#23198</td>
												<td>23/11/2020</td>												
												<td>
													<img class="user" :src="asset('/template/unipro/img/products/toy.jpeg')" alt="Product Image">
												</td>
												<td>
													<span class="badge">Shipped</span>
												</td>
												<td>$539.00</td>
												<td>25%</td>
												<td>Arverne, New York</td>
												<td>27/11/2020</td>
											</tr>
											
										</tbody>
									</table>
								</div>
							</div>
						</div>

					</div>
					<!-- Recent Orders table end -->
				</div>
				<!-- Row end -->

				

				<!-- Row start -->
				<div class="row gutters">
					<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
						<div class="goal-container">
							<div class="goal-info">
								<h5>Today's Goal</h5>
								<h6>70/100</h6>
							</div>
							<div class="goal-graph">
								<div id="todaysTarget"></div>
								<div class="circle-one"></div>
								<div class="circle-two"></div>
							</div>
						</div>
					</div>							
					<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
						<div class="graph-card">
							<h6>New Customers</h6>
							<h4>2500</h4>
							<div class="graph-placeholder">
								<div id="customersGraph"></div>
							</div>
						</div>
					</div>
					<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
						<div class="payments-card">
							<h6>Balance</h6>
							<h4>$5699.89</h4>
							<div class="custom-btn-group mt-2">
								<button class="btn btn-outline-primary"><i class="icon-credit-card"></i>Deposit</button>
								<button class="btn btn-primary"><i class="icon-credit-card"></i>Withdraw</button>
							</div>
						</div>
					</div>
				</div>
				<!-- Row end -->

			<!-- </div> -->
			<!-- Content wrapper end -->

			<!-- App footer start -->
			<!-- <div class="app-footer">© SchoolScan CRM 2021</div> -->
			<!-- App footer end -->

		<!-- </div> -->
		<!-- Content wrapper scroll end -->

	</div>
        
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