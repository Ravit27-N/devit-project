<template>
  <div class="app">
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div>
          <img class="logo mx-auto h-auto w-auto" src="/images/LOGO.png" alt="Your Company" />
          <h4
            class="ts mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
          >Sign In to your account</h4>
        </div>
        <div class="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="email-address" class="sr-only">Email Address</label>
              <input
                id="email-address"
                v-model="submit_data.email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-600 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                placeholder="Email Address"
              />
            </div>
            <div class="py-5">
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                v-model="submit_data.password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-600 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              @click="submit_form"
              class="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-500 py-2 px-4 text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <!-- Heroicon name: mini/lock-closed -->
                <svg
                  class="h-5 w-5 group-hover:text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Sign In
            </button>
     
          </div>
        </div>
        <div class="float-right">
          <p class="text-sm">
            Don't have account? &nbsp;
            <NuxtLink to="/register" class="text-yellow-500 hover:text-yellow-700">Register</NuxtLink>
          </p>
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
        email: 'hunravit@gmail.com',
        password: 'ravit1111',
      },
    }
  },
  methods: {
    async submit_form() {
    await this.$axios
        .$post('/api/login', this.submit_data)
        .then((response) => (this.info = response))
        .then(() => {
          console.log(this.info);
          if(this.info.success === true){
            alert("Login Success");
          }else{
             alert("Login Error");
          }
     
        })
    },
  
  },
}
</script>
<style>
.logo {
  height: 150px;
}
@media (max-width: 640px) {
  .logo {
    height: 100px;
  }
  .ts {
    font-size: 20px;
  }
}
/* @media (min-width: 1040px) {
    .logo{
      height: 300px;
    }
    .ts{
      font-size: 20px;
    }
  } */
</style>