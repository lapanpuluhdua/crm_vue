<template>
  <!-- <div class="container">
    <div class="media align-items-stretch justify-content-center ht-100p pos-relative">
      <div class="media-body align-items-center d-none d-lg-flex">
        <div class="mx-wd-600">
           <img :src="asset('assets/login-img2.png')" class="img-fluid" alt="">
        </div>
      </div>
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

           <form action="#" method="POST" @submit.prevent="submit">

              <div class="form-group">
                <label>Email address</label>
                <input type="email" name="email" id="email" v-model="formData.email" class="form-control" placeholder="Enter your email">
              </div>
              <div class="form-group">
                <div class="d-flex justify-content-between mg-b-5">
                  <label class="mg-b-0-f">Password</label>
                  <a href="javascript:void(0)" class="tx-13">Forgot password?</a>
                </div>
                <input type="password" name="password" id="password" v-model="formData.password" class="form-control" placeholder="Enter your password">
              </div>

              <button type="submit" name="loginBtn" class="btn btn-brand-02 btn-block"> Sign In </button>

           </form>

          <div class="divider-text">or</div>

          <div class="row">

            <div class="col-md-6">
              <a class="btn btn-outline-twitter btn-block" href="#" @click.prevent="logGmail">
                 <i class="fa fa-google"> Google </i>
              </a>
            </div>
            <div class="col-md-6">
               <a class="btn btn-outline-facebook btn-block" href="#" @click.prevent="logFacebook">
                 <i class="fa fa-facebook"></i> Facebook 
               </a>
            </div>

          </div>

          <div class="tx-13 mg-t-20 tx-center">Don't have an account? Please refer to your administrator <a href="/v/enquiry"> Any enquiry click here</a></div>

        </div>
      </div>
    </div>
  </div> -->
  <div class="form-container outer">
        <div class="form-form" >
            <div class="form-form-wrap">
                <div class="form-container" style="padding-bottom: 0px;">
                    <div class="form-content" >

                        <h1 class="">Sign In</h1>
                        <p class="">Log in to your account to continue.</p>
                        
                        <form class="text-left" action="#" method="POST" @submit.prevent="submit">
                            <div class="form">

                                <div id="email-field" class="field-wrapper input">
                                    <label for="email">EMAIL</label>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    <input id="email" name="email" type="email" v-model="formData.email" class="form-control" placeholder="e.g John_Doe">
                                </div>

                                <div id="password-field" class="field-wrapper input mb-2">
                                    <div class="d-flex justify-content-between">
                                        <label for="password">PASSWORD</label>
                                        <a href="auth_pass_recovery_boxed.html" class="forgot-pass-link">Forgot Password?</a>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                    <input id="password" name="password" type="password" v-model="formData.password" class="form-control" placeholder="Password">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="toggle-password" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                </div>
                                <div class="d-sm-flex justify-content-between">
                                    <div class="field-wrapper">
                                        <button type="submit" class="btn btn-primary" value="">Log In</button>
                                    </div>
                                </div>

                                <div class="division">
                                      <span>OR</span>
                                </div>

                                <div class="social">
                                    <a href="javascript:void(0);" class="btn social-fb">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="126.445 2.281 589 589"><circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a"/><path d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z" fill="#fff"/></svg> 
                                        <span class="brand-name">Facebook</span>
                                    </a>
                                   <a href="http://127.0.0.1:8000/auth/google" class="btn social-github">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="2443" height="2500" viewBox="0 0 256 262" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
                                        <span class="brand-name">Google</span>
                                    </a>
                                </div>

                                <p class="signup-link">Not registered ? <a href="auth_register_boxed.html">Create an account</a></p>

                            </div>
                        </form>

                    </div>                    
                </div>
            </div>

        </div>
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
              alert(this.$route.query.token);
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