<template>
    <div class="app">
      <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
          <div>
            <img class="logo mx-auto h-auto w-auto" src="/images/LOGO.png" alt="Your Company">
            <h2 class="ts mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign Up your account</h2>
          </div>
          <div class="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true">
            <div class="-space-y-px rounded-md shadow-sm">
              <div class="py-5">
                <label for="username" class="sr-only">Username</label>
                <input id="email-address" name="email" type="email" v-model="submit_data.name" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder="Username">
              </div>
              <!-- <div>
                <label for="role" class="sr-only">Role</label>
                <select name="gender" class="mb-5 bg-gray-40 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required>
                
                <option value="">Role</option>
                <option value="user">User</option>
                <option value="viewer">Viewer</option>
          </select>
          </div>  -->
              <div>
                <label for="email-address" class="sr-only">Email Address</label>
                <input id="email-address" name="email" type="email" v-model="submit_data.email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder="Email Address">
              </div>
              <div class="py-5">
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" v-model="submit_data.password"   autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder="Password">
              </div>
              <div class="">
                <label for="confirm-password" class="sr-only"> Confirm Password</label>
                <input id="confirm-password" name="confirm-password" type="password" v-model="submit_data.confirm_password"   autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder=" Confirm Password">
              </div>
            </div>
            
  
            <div>
              <button @click="submit_form" class="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-500 py-2 px-4 text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <!-- Heroicon name: mini/lock-closed -->
                  <svg class="h-5 w-5 group-hover:text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                  </svg>
                </span>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
  
  </template>
  <script>
export default {
  data() {
    return {
      submit_data: {
        name: 'ravit',
        email: 'devit1@gmail.com',
        password: 'devit1111',
        confirm_password: 'devit1111'
      },
    }
  },
  methods: {
    submit_form() {
      this.$axios
        .$post('/api/register', this.submit_data)
        .then((response) => (this.info = response))
        .then(() => {
          console.log(this.info);
          if(this.info.success === true){
            alert("Register Success");
          }else{
             alert("Register Error");
          }
     
        })
    },
  
  },
}
</script>
  <style>
    .logo{
        height: 150px;
    }
    
  @media (max-width: 640px) {
    .logo{
      height: 100px;
    }
    .ts{
      font-size: 20px;
    }
  }
  </style>