<template>
    

			<div class="container-fluid" >

			<!-- Row start -->
			<!-- <div class="row no-gutters h-100"> -->
      <div class="row g-0 h-100">

				<!-- <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"> -->
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
					<div class="login-about">
						<div class="slogan">
							<span>SchoolScan</span>
							<span>CRM</span>
							<span>Simple.</span>
						</div>
						<div class="about-desc">
              SchoolScan's latest CRM system provides a powerful yet User friendly tools to maintain customer relationships and the management of collected information about prospects.
						</div>
						<a href="#" class="know-more">Know More <img :src="asset('/template/unipro/img/right-arrow.svg')" alt="Uni Pro Admin"></a>

					</div>
				</div>
				<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
					<div class="login-wrapper">
						<form class="text-left" action="#" method="POST" @submit.prevent="submit">
							<div class="login-screen">
								<div class="login-body form">
                  <img :src="asset('/template/unipro/img/schoolscan.jpg')" alt="iChat" class="navbar-logo m-auto mb-3" width="50%">

									<h6>In order to access your Uni Pro account, please enter the email id you provided during the registration process.</h6>
									<div class="field-wrapper" id="email-field">
                      <input id="email" name="email" type="email" v-model="formData.email" class="form-control" placeholder="Insert Email...">
										<div class="field-placeholder">Email ID</div>
									</div>
									<div class="actions">
                    <button type="submit" class="btn btn-primary" value="">Submit</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<!-- Row end -->
		
			</div>
</template>

<script>

     // var token = $('meta[name="csrf-token"]').attr('content');
    import {mapActions} from 'vuex'
    
    export default {
      name: 'recoverpswd', 
      data() {
        return {
            formData : {
                email :'', 
                password:'',
                // _token: token
            }
        }
      },
      mounted(){
        if(this.$route.query.token != null){
              //alert(this.$route.query.token);
              //localStorage.setItem('token', this.$route.query.token);
              //this.$router.push({ path: '/v' });
              
              //this.$store.commit('auth/setToken', this.$route.query.token);
              //this.$store.dispatch('auth/me');
              //window.location.href = '/v';
              
        }
        //console.log(this.$route.query.token);
      },
      methods: {
        
        async submit(){
          
          const res = await this.callApi('post', 'retrievepwd',this.formData)
          console.log('res',res)
          if(res.status == 200){
            alert("Please check your email")
          }else{
            this.e(res.data.message)
          }
          
        },
        // login() {

        //     axios.get('/sanctum/csrf-cookie').then(response => {

        //         axios.post("/api/login", this.formData).then( response =>{

        //             if (response.data.status_code == 200) {

        //                 $('#message').html("");
        //                 $('#alertMessage').css("display", "none");

        //                 // set token
        //                 this.$store.commit('setToken', response.data.token)
        //                 localStorage.setItem('token', response.data.token);
        //                 // window.location.href="/v";
        //                 this.$router.push({name: 'dashboard'});

        //             } else if (response.data.status_code == 400) {

        //                 $('#message').html(response.data.message);
        //                 $('#alertMessage').css("display", "block");

        //             }else if (response.data.status_code == 500) {

        //                 $('#message').html(response.data.message);
        //                 $('#alertMessage').css("display", "block");

        //             }

        //         });
        //     });

        // },

        logGmail() {
            window.location.href="../auth/google";
        },

        logFacebook() {
            window.location.href="../auth/facebook";
        },
      }
}
// }
</script>