<template>
    <!-- <Content title="Insurance Documents" /> -->
  <!-- component -->
<!-- This is an example component -->
  <div class="max-w-2xl mx-auto bg-white p-16">
    <h1 class="mb-5"><b>E Name Card</b></h1>
    <h2 class="mb-5">Personal Details:</h2>
<form action="##">
  
  <div class="grid gap-6 mb-6 lg:grid-cols-2"> 
      <div>
          <label for="first_name" class="required block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
          <input  type="text" i class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
      </div>
      <div>
          <label for="last_name" class="required block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
          <input  type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required>
      </div>
     
      <div>
          <label for="phone" class="required  mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
          <input  type="tel"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="012 345 678"  required>
      </div>
      <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
          <input  type="email"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" >
    </div> 
      <div>
          <label for="position" class="required block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Name</label>
          <input  id="position" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="iEBuy" required>
      </div>
      <div>
          <label for="position" class="required block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Position</label>
          <input  id="position" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Web Developer" required>
      </div>
      <div class="flex justify-center">
  <div class="mb-0 w-96">
    <label for="formFileMultiple" class="form-label inline-block mb-1 text-gray-700 text-sm font-medium">Logo Image </label>
    <input class="form-control
    block
    w-full
    bg-gray-50
    py-1
    text-base
    font-normal
    text-gray-700
    bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-gray-300 focus:outline-none" type="file" id="formFileMultiple" multiple>
  </div>
</div>
<div class="flex justify-center">
  <div class="mb-0 w-96">
    <label for="formFileMultiple" class="form-label inline-block mb-1 text-gray-700 text-sm font-medium">Image </label>
    <input class="form-control
    block
    w-full
    bg-gray-50
    py-1
    text-base
    font-normal
    text-gray-700
    bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-gray-300 focus:outline-none" type="file" id="formFileMultiple" multiple>
  </div>
</div>
  </div>
 
  <div class="mb-6">
          <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
          <input  type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
  </div> 
  <div class="mb-6">
          <label for="address" class="required block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact Link</label>
          <input  type="link"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
  </div> 
      
      
  <!-- <div class="flex items-start mb-6">
      <div class="flex items-center h-5">
          <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
      </div>
          <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
  </div> -->
  <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Create</button>
</form>
</div>
</template>

<script>
// import Content from '@/components/Content.vue'

export default {
  components: {
    // Content,
  },
}
  // const checkbox = document.getElementById("flexCheckIndeterminate");
  // checkbox.indeterminate = true;
</script>
<style>
  .required:after {
    content:" *";
    color: red;
  }
   h1{
    display: flex;
    text-align: center;
    justify-content: center;
  }
   h2{
        color:#FFBC27;
  }
  .top{
    width: 100%;
    height: 30vh;
    background-color: #FFBC27;
  }
</style>