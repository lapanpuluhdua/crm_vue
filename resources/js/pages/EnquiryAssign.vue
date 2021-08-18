<template>
	<div class="container-fluid pd-x-0">
    <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-style1 mg-b-10">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item"><a href="#">Leads</a></li>
            <li class="breadcrumb-item active" aria-current="page">{{ baseName }}</li>
          </ol>
        </nav>
      </div>
    </div>

    <!--~~~~~~~~~~ Table ~~~~~~~~~~-->
    <div class="">
      <div class="card">
        <div class="card-header">
          <b> LIST {{ baseName.toUpperCase() }} </b>
          <a href="#" @click="()=>{addModal=true;isAdding=true;clearForm()}" data-toggle="modal" class="btn btn-info btn-xs float-right">
             <i class="fa fa-plus"></i> Add New {{ baseName }}
          </a>
        </div>
        <div class="card-body pd-lg-25">
          <div class="table table-bordered table-striped m-0 responsive">
            <table class="table products-table">
              <thead class="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>School Name</th>
                  <th>Account Manager</th>
                  <th width="60%">Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in items" :key="i" v-if="items.length">
                  <td>{{key=i+1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.email}}</td>
                  <td>{{item.contactno}}</td>
                  <td>{{item.schoolname}}</td>
                  <td>{{item.manager_name}}</td>
                  <td style="white-space: normal;word-wrap: break-word">
                        {{item.status}}
                      </td>
                  <!-- <table style="table-layout: fixed; width: 60%">
                    <tr>
                      <td style="word-wrap: break-word">
                        {{item.status}}
                      </td>
                    </tr>
                  </table> -->
                  <!-- <td style="word-break:break-all;">{{item.enquirydetails}}</td> -->
                  <td>
                    <div class="dropdown custom-dropdown">
                      <button class="btn btn-primary dropdown-toggle btn-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Options
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button @click="edit(item, i)" class="dropdown-item" data-toggle="modal"><i class="fa fa-edit"></i>&nbsp;&nbsp;Update</button>
                        <button @click="showDeletingModal(item, i)" class="dropdown-item" data-toggle="modal"><i class="fa fa-trash"></i>&nbsp;&nbsp;Remove</button>
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


    <!--~~~~~~~~~~ adding modal ~~~~~~~~~~-->
    <Modal
      v-model="addModal"
      :mask-closable="true"
      :closable="true"
      width="800px"
      >
      <div slot="header">
        <div class="media align-items-center">
          <span class="tx-color-03 d-none d-sm-block"><ClipboardIcon></ClipboardIcon></span>
          <div class="media-body mg-sm-l-20">
            <h4 class="tx-18 tx-sm-20 mg-b-2">{{ baseName }} Form Register</h4>
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
                <input v-model="data.name" type="text" name="name" class="form-control" placeholder="Enter Student Full Name">
                <!-- <div class="text-danger" id="studNameError" data-ajax-feedback="student name"></div> -->
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <p><b> Position </b></p>
              </div>
            </div>

            <div class="col-md-12">
              <div class="form-group">
                <input v-model="data.designation" type="text" name="designation"  class="form-control" placeholder="Enter position">
                  <!-- <div class="text-danger" id="studNameError" data-ajax-feedback="student name"></div> -->
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <p><b> Email<span class="text-danger">*</span> </b></p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
               <p><b> Contact No. </b></p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input v-model="data.email" type="text" name="email"  class="form-control" placeholder="Enter email">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input v-model="data.contactno" type="text" name="contactno" class="form-control" placeholder="Enter contact number">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <p><b> School Name </b></p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                 <p><b> Website </b></p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input v-model="data.schoolname" type="text" name="schoolname" class="form-control" placeholder="Enter school name">
                <!-- <div class="text-danger" id="studNameError" data-ajax-feedback="student name"></div> -->
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input v-model="data.website" type="text" name="website" class="form-control" placeholder="Enter wbsite">
                <!-- <div class="text-danger" id="studNameError" data-ajax-feedback="student name"></div> -->
              </div>
            </div>
          </div>
          
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <p><b> Enquiry </b></p>
              </div>
            </div>

            <div class="col-md-12">
              <div class="form-group">
                <textarea v-model="data.enquirydetails" class="form-control" rows="3" placeholder="message.." name="enquirydetails"></textarea>
                <!--  <div class="text-danger" id="guardianNameError" data-ajax-feedback="guardian name"></div> -->
              </div>
            </div>
          </div>
      </div>

      <input type="hidden" name="id" v-model="data.id">

      <div slot="footer">
        <button @click="addModal=false" class="btn btn-dark">Close</button>
        <button v-if="isAdding" @click="add" class="btn btn-info">Submit {{ baseName }}</button>
        <button v-else @click="update" class="btn btn-info">Update {{ baseName }}</button>
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
		name: 'enquiry',
    components: { ClipboardIcon, DeleteModal },
    data(){
      return {
        baseName: 'Enquiry Assignment Page',
        baseUrl: 'enquiriesAssign',
        data: {
          id: '',
          name: '',
          designation: '',
          email: '',
          contactno: '',
          schoolname: '',
          website: '',
          enquirydetails: ''
        },
        addModal: false,
        isAdding: false,
        items: [],
        index: -1
      }
    },

    methods: {
      clearForm(){
        Object.keys(this.data).forEach(k => this.data[k] = '');
      },

      async add(){
        if(this.data.name.trim()=='') return this.e('Name is required')

        const res = await this.callApi('post', this.baseUrl, this.data)

        //api created success, success status will be 201
        if(res.status===201){
          this.items.unshift(res.data)
          this.s(this.baseName+' has been added successfully!')
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

      async edit(item, index){
        this.addModal = true
        this.isAdding = false

        const res = await this.callApi('get', this.baseUrl+'/'+item.id)

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
        const res = await this.callApi('put', this.baseUrl+'/'+this.data.id, this.data)

        if(res.status==200){
          this.items[this.index] = res.data
          this.s(this.baseName+' has been edited successfully!')
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

      showDeletingModal(item, i){
        const deleteModalObj  =  {
          showDeleteModal: true, 
          deleteUrl : this.baseUrl+'/'+item.id, 
          data : item, 
          deletingIndex: i, 
          isDeleted : false,
        }
        this.$store.commit('setDeletingModalObj', deleteModalObj)
        console.log('delete method called')
        // this.deleteItem = tag
        // this.deletingIndex = i
        // this.showDeleteModal = true
      },

      async delete(id, index){
        if(!confirm('Are you sure you want to delete?')) return

        const res = await this.callApi('delete', this.baseUrl+'/'+id)
        if(res.status==200){
          this.items.splice(index,1)
          this.s(this.baseName+' has been deleted successfully')
        }else{
          this.swr()
        }
      }
    },


    async created(){
      
      const res = await this.callApi('get', this.baseUrl);
      //console.log('res',res);
      if(res.status == 200){
        this.items = res.data
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
          this.items.splice(obj.deletingIndex,1)
        }
      }
    }
	}
</script>






