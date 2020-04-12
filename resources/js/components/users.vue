<template>
    <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title"><i class="far fas fa-users nav-icon"></i>&nbsp;&nbsp;Users Managment</h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addnew">
  New User <i class="far fas fa-user-plus nav-icon"></i>
</button>

                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Modify</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="user in users" :key="user.id">
                      <td>{{user.id}}</td>
                      <td>{{user.name}}</td>
                      <td>{{user.created_at}}</td>
                      <td><span class="tag tag-success">Approved</span></td>
                      <td>
                          <a href=""><i class="far fas fa-edit nav-icon"></i></a> / 
                          <a href="" @click.prevent="deleteUser(user.id)"><i class="far fas fa-trash nav-icon text-danger"></i></a>
                        </td>
                    </tr>
                    
                    
                   
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
        <!-- modallllllllllllllllll -->
    <div class="modal fade" id="addnew" tabindex="-1" role="dialog" aria-labelledby="addnewLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addnewLabel">Add User</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <!-- vFORM -->
       <form @submit.prevent="createUser">
        <!-- @keydown="form.onKeydown($event)"> -->
    <div class="form-group">
      <!-- <label>Name</label> -->
      <input v-model="form.name" type="text" name="name" placeholder="Name here"
        class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
      <has-error :form="form" field="name"></has-error>
    </div>

  <div class="form-group">
      <!-- <label>Email</label> -->
      <input v-model="form.email" type="email" name="email" placeholder="Email here"
        class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
      <has-error :form="form" field="email"></has-error>
    </div>

    <div class="form-group">
      
      <input v-model="form.password" type="password" name="password" placeholder="Password here"
        class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
      <has-error :form="form" field="password"></has-error>
    </div>

    <!-- <button :disabled="form.busy" type="submit" class="btn btn-primary">Log In</button> -->
     <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button :disabled="form.busy" type="submit" class="btn btn-primary">Save changes</button>
      </div>
  </form>
  <!-- vFORM -->
      </div>
     
      
    </div>
  </div>
</div>
        <!-- modallllllllllllllllll -->

    </div>
</template>
<script>
export default{
   data () {
    return {
      // Create a new form instance
      users:{},
      form: new Form({
        name: '',
        email: '',
        password: '',
        remember: false
      })
    }
  },

  methods: {
    loadUsers(){
      axios.get('api/user').then(({data})=>(this.users=data.data))
    },
    createUser () {
      // Submit the form via a POST request
      this.form.post('api/user')
      .then(() => {
          toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
        fire.$emit('changed')
        $('#addnew').modal('hide');
      })
      .catch(()=>{
          toast.fire({
          icon: 'error',
          title: 'Somthing Went Wrong'
        })
      })
      
        // .then(({ data }) => { console.log(data) })
    },
    deleteUser(id){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {   
          this.form.delete('api/user/'+id)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          fire.$emit('changed')
        }
       
        

      }).catch()
      //  
      //  .then(()=>{
      //    fire.$emit('changed')
      //   toast.fire({
      //       icon: 'success',
      //       title: 'Deleted  successfully'
      //     })
      //   })
      //   .catch(() =>{
      //      toast.fire({
      //       icon: 'error',
      //       title: 'Somthing Went Wrong!!'
      //     })
      //   }) 

      }
    
  },
  created(){
    this.$Progress.start()
    this.loadUsers();
    fire.$on('changed',() => {
      this.loadUsers()
    })
    this.$Progress.finish()
  }
}
</script>

