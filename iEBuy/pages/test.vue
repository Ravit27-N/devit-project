<template>
  <main>
     
    <label for="username">Username</label>
    <input type="text" v-model="submit_data.email" class="username">

    <label for="username" >Password</label>
    <input type="password" v-model="submit_data.password" class="password">

<br>
    <button @click="submit_form" >Submit</button><br>
    <br>
    <button @click="getInformation" >GET METHOD</button>
    <br>
    <br>
    <button @click="submit_formsecond" style="color:red;">Submit second</button>

  </main>
</template>
<script>

export default {
  data() {
    return {
      submit_data: {
        email: "ravit@gmail.com",
        password: "test"
      }
    };
  },
  methods: {
       submit_form(){
      

      this.$axios.$post("/api/testpost", {email:"test@gmail.com"},{dataType : 'json'} )
        .then(response => (this.info = response))
        .then(() => {
         
              alert("Success");

         
        }).catch(function (error) {
             console.log(error);
        });
    },
     submit_formsecond(){

      this.$axios.$post("/api/testpost", {email:"test@gmail.com"} )
        .then(response => (this.info = response))
        .then(() => {
           alert(this.info.user);
        });
    },
    getInformation() {
      this.$axios.$get("/api/test")
        .then(response => (this.info = response))
        .then(() => {
          alert(this.info.message);
        });
    },
    


  }
};
</script>