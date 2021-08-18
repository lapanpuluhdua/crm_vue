<template>
    

			<div class="container-fluid" >

			<!-- Row start -->
			<div class="row g-0 h-100">
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
								<div class="login-body form ">
									<!-- <a href="crm.html" class="login-logo"> -->
										<img :src="asset('/template/unipro/img/schoolscan.jpg')" alt="iChat" class="navbar-logo m-auto mb-3" width="50%">
									<!-- </a> -->
									<h4>Welcome back<br></h4>
                  <h5>Please login to your account.</h5> <br>
									<div class="field-wrapper" id="email-field">
                      <input id="email" name="email" type="email" v-model="formData.email" class="form-control" placeholder="Insert Email...">
										<div class="field-placeholder">Email ID</div>
									</div>
									<div class="field-wrapper mb-3" id="password-field">
										<input id="password" name="password" type="password" v-model="formData.password" class="form-control" placeholder="Insert Password...">
										<div class="field-placeholder">Password</div>
									</div>
									<div class="actions">
                  <router-link :to="{ name: 'forgotpassword' }">
										Forgot password?
                  </router-link>
                    <button type="submit" class="btn btn-primary " value="">Login</button>
									</div>
								</div>
								<div class="login-footer ">
                    <div class="social col-sm-12">
                      <a href="javascript:void(0);" class="btn btn-outline-primary btn-lg btn-block social-fb">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="126.445 2.281 589 589"><circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a"/><path d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z" fill="#fff"/></svg> 
                          <span class="brand-name">Facebook</span>
                      </a>
                      <a href="http://127.0.0.1:8000/auth/google" class="btn btn-outline-primary btn-lg btn-block social-github">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 262" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
                          <span class="brand-name">Google</span>
                      </a>
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
      name: 'login', 
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
              
              this.$store.commit('auth/setToken', this.$route.query.token);
              this.$store.dispatch('auth/me');
              //window.location.href = '/v';
              
        }
        //console.log(this.$route.query.token);
      },
      methods: {
        ...mapActions({
          signIn: 'auth/signIn'
        }),
        async submit(){
          const res = await this.signIn(this.formData)
          if(res.status == 200){
            this.$store.commit('auth/setToken', res.data.token)
            this.$store.dispatch('auth/me')

            // window.location.href="/v";
            // this.$router.replace({name: 'dashboard'})
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
</script>