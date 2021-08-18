<template>
	
  <div class="container-fluid pd-x-0">
    <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-style1 mg-b-10">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Role</li>
          </ol>
        </nav>
      </div>
    </div>

    <!--~~~~~~~~~~ Table ~~~~~~~~~~-->
    <div class="">
      <div class="card">
        <div class="card-header">
          <b> LIST ROLE </b>
          <a v-if="$can(['Role Create'])" href="#" @click="()=>{addModal=true;isAdding=true;clearForm()}" data-toggle="modal" class="btn btn-info btn-xs float-right">
             <i class="fa fa-plus"></i> Add New Role
          </a>
        </div>
        <div class="card-body pd-lg-25">
          <div class="table table-bordered table-striped m-0 responsive">
            <table class="table products-table">
              <thead class="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <!-- <th>Description</th> -->
                  <th>Permissions</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody v-if="$can(['Role View'])">
                <tr v-for="(role, i) in roles" :key="i" v-if="roles.length">
                  <td>{{key=i+1}}</td>
                  <td>{{role.name}}</td>
                  <!-- <td>{{role.description}}</td> -->
                  <td>Create
                      <input type="checkbox" name="name1" />&nbsp;
                      View
                      <input type="checkbox" name="name1" />&nbsp;
                      Edit
                      <input type="checkbox" name="name1" />&nbsp;
                      Delete
                      <input type="checkbox" name="name1" />&nbsp;                
                  </td>
                  <td>{{role.created_at | formatDate}}</td>
                  <td>
                    <div class="dropdown custom-dropdown">
                      <button class="btn btn-primary dropdown-toggle btn-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Options
                      </button>
                      <div v-if="$can(['Role Update', 'Role Delete'])" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button v-if="$can(['Role Update'])" @click="edit(role, i)" class="dropdown-item" data-toggle="modal"><i class="fa fa-edit"></i>&nbsp;&nbsp;Update</button>
                        <button v-if="$can(['Role Delete'])" @click="showDeletingModal(role, i)" class="dropdown-item" data-toggle="modal"><i class="fa fa-trash"></i>&nbsp;&nbsp;Remove</button>
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
      title="Roles Form"
      :mask-closable="true"
      :closable="true"
      width="800px"
      >
      <div slot="header">
        <div class="media align-items-center">
          <span class="tx-color-03 d-none d-sm-block"><ClipboardIcon></ClipboardIcon></span>
          <div class="media-body mg-sm-l-20">
            <h4 class="tx-18 tx-sm-20 mg-b-2">Role Form</h4>
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
          <!-- <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <p><b> Description<span class="text-danger">*</span> </b></p>
              </div>
            </div>

            <div class="col-md-12">
              <div class="form-group">
                <input v-model="data.description" type="text" name="name" class="form-control" placeholder="About the role...">
              </div>
            </div>
          </div> -->
      </div>

      <input type="hidden" name="id" v-model="data.id">

      <div slot="footer">
        <button @click="addModal=false" class="btn btn-dark">Close</button>
        <button v-if="isAdding" @click="add" class="btn btn-info">Add Role</button>
        <button v-else @click="update" class="btn btn-info">Update Role</button>
        <!-- <Button type="primary" @click="addTag" :disabled="isAdding" :loading="isAdding">{{isAdding ? 'Adding..' : 'Add tag'}}</Button> -->
      </div>

    </Modal>

    <DeleteModal></DeleteModal>

  </div>
</template>

<script>
  import DeleteModal from '../components/DeleteModal.vue'
  import { ClipboardIcon } from 'vue-feather-icons';
  import { mapGetters } from 'vuex'

  export default {
    name: 'role',
    components: { ClipboardIcon, DeleteModal },
    data(){
      return {
        data: {
          id: '',
          name: '',
          // description: '',
        },
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
        const res = await this.callApi('post', 'roles', this.data)

        //api created success, success status will be 201
        if(res.status===201){
          this.roles.unshift(res.data)
          this.s('Role has been added successfully!')
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

        const res = await this.callApi('get', 'roles/'+data.id)

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
        const res = await this.callApi('put', 'roles/'+this.data.id, this.data)

        if(res.status==200){
          this.roles[this.index] = res.data
          this.s('Role has been edited successfully!')
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
          deleteUrl : 'roles/'+data.id, 
          data : data, 
          deletingIndex: i, 
          isDeleted : false,
        }
        this.$store.commit('setDeletingModalObj', deleteModalObj)
        console.log('delete method called')
      },
    },


    async created(){
      const res = await this.callApi('get', 'roles');
      console.log('res', res);
      if(res.status == 200){
        this.roles = res.data
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
          this.roles.splice(obj.deletingIndex,1)
        }
      }
    }
  }
</script>