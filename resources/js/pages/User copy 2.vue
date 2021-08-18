<template>
 
  <div>
    <div class="container-fluid pd-x-0">
      <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
        <div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-style1 mg-b-10">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">User</li>
            </ol>
          </nav>
        </div>
      </div>

      <!--~~~~~~~~~~ Table ~~~~~~~~~~-->
      <div class="">
        <div class="card">
          <div class="card-header">
            <b> LIST USER </b>
            <a href="#" @click="()=>{addModal=true;isAdding=true;clearForm()}" data-toggle="modal" class="btn btn-info btn-xs float-right">
              <i class="fa fa-plus"></i> Add New User
            </a>
          </div>
          <div class="card-body">
            <div class="table table-bordered table-striped m-0 responsive">
              <table class="table products-table">
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
                    <td>{{user.role_name}}</td>
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
            </div>
          </div>
        </div>
      </div>


      <!--~~~~~~~~~~ enquiry adding modal ~~~~~~~~~~-->
      <Modal
        v-model="addModal"
        title="User Form"
        :mask-closable="true"
        :closable="true"
        width="800px"
        >
        <div slot="header">
          <div class="media align-items-center">
            <span class="tx-color-03 d-none d-sm-block"><ClipboardIcon></ClipboardIcon></span>
            <div class="media-body mg-sm-l-20">
              <h4 class="tx-18 tx-sm-20 mg-b-2">User Form</h4>
            </div>
          </div>
        </div>
        <div class="alert alert-danger alert-dismissible mg-b-20 fade show" role="alert">
          <strong>Reminder!</strong> All fields must be filled in.
        </div>
        <div slot="" class="pd-sm-20">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <p><b> Name<span class="text-danger">*</span> </b></p>
                </div>
              </div>

              <div class="col-md-12">
                <div class="form-group">
                  <input v-model="data.name" type="text" name="name" class="form-control" placeholder="Full Name">
                  <!-- <div class="text-danger" id="studNameError" data-ajax-feedback="student name"></div> -->
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <p><b> Email </b></p>
                </div>
              </div>

              <div class="col-md-12">
                <div class="form-group">
                  <input v-model="data.email" type="text" name="email"  class="form-control" placeholder="Enter email">
                    <!-- <div class="text-danger" id="studNameError" data-ajax-feedback="student name"></div> -->
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <p><b> Password </b></p>
                </div>
              </div>

              <div class="col-md-12">
                <div class="form-group">
                  <input v-model="data.password" type="password" name="password"  class="form-control" placeholder="Enter password">
                    <!-- <div class="text-danger" id="studNameError" data-ajax-feedback="student name"></div> -->
                </div>
              </div>
            </div>


            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <p><b> Role </b></p>
                </div>
              </div>

              <div class="col-md-12">
                <div class="form-group">
                  <select class="form-control" v-model="data.role_names">
                    <option v-for="role in roles" :key="role.id" v-bind:value="{ roleid: role.id, rolename: role.name }">{{role.name}}</option>
                  </select>
                </div>
              </div>
            </div>
        </div>

        <input type="hidden" name="id" v-model="data.id">

        <div slot="footer">
          <button @click="addModal=false" class="btn btn-dark">Close</button>
          <button v-if="isAdding" @click="add" class="btn btn-info">Add User</button>
          <button v-else @click="update" class="btn btn-info">Update User</button>
          <!-- <Button type="primary" @click="addTag" :disabled="isAdding" :loading="isAdding">{{isAdding ? 'Adding..' : 'Add tag'}}</Button> -->
        </div>

      </Modal>

      <DeleteModal></DeleteModal>

    </div>

  </div>
</template>

<script>
  import DeleteModal from '../components/DeleteModal.vue'
  import { ClipboardIcon } from 'vue-feather-icons';
  import { mapGetters } from 'vuex'

  export default {
    
    name: 'user',
    components: { ClipboardIcon, DeleteModal },
    data(){
      return {
        data: {
          baseName: 'User',
          baseUrl: 'users',
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
      clearForm(){
        Object.keys(this.data).forEach(k => this.data[k] = '');
      },

      async add(){
        if(this.data.name.trim()=='') return this.e('Name is required')
        if(this.data.email.trim()=='') return this.e('Email is required')
        const res = await this.callApi('post', 'users', this.data)

        //api created success, success status will be 201
        if(res.status===201){
          this.users.unshift(res.data)
          this.s('User has been added successfully!')
          this.addModal = false
          this.clearForm()
        }else{
          if(res.status==422){
            if(res.data.errors.name){
              this.e(res.data.errors.name[0])
            }
          }else{
            this.swr()
          }
        }

      },

      async edit(data, index){
        this.addModal = true
        this.isAdding = false

        const res = await this.callApi('get', 'users/'+data.id)

        if(res.status==200){
          this.data = res.data
          this.addModal = true
          this.index = index
        }else{
          if(res.status==422){
            if(res.data.errors.name){
              this.e(res.data.errors.name[0])
            }
          }else{
            this.swr()
          }
        }
      },

      async update(){
        console.log('update');
        const res = await this.callApi('put', 'users/'+this.data.id, this.data)

        if(res.status==200){
          this.users[this.index] = res.data
          this.s('User has been edited successfully!')
          this.addModal = false
          this.clearForm()
        }else{
          if(res.status==422){
            if(res.data.errors.name){
              this.e(res.data.errors.name[0])
            }
          }else{
            this.swr()
          }
        }
      },

      showDeletingModal(data, i){
        const deleteModalObj  =  {
          showDeleteModal: true, 
          deleteUrl : 'users/'+data.id, 
          data : data, 
          deletingIndex: i, 
          isDeleted : false,
        }
        this.$store.commit('setDeletingModalObj', deleteModalObj)
        console.log('delete method called')
      },
    },


    async created(){
      const res = await this.callApi('get', 'users');
      const rolesdb = await this.callApi('get', 'roles');
      console.log('res', res);
      if(res.status == 200){
        this.users = res.data
        this.roles = rolesdb.data
      }else{
        this.swr()
      }
    },


    computed : {
      ...mapGetters(['getDeleteModalObj'])
    },
    watch : {
      getDeleteModalObj(obj){
        if(obj.isDeleted){
          this.users.splice(obj.deletingIndex,1)
        }
      }
    }
  }
</script>






