<template>
    <!-- component -->
<div class="text-gray-900 bg-gray-200">
    <div class="p-4 flex">
        <h1 class="text-3xl">
            Users
        </h1>
    </div>
    <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
                <tr class="border-b">
                    <th class="text-left p-3 px-5">Name</th>
                    <th class="text-left p-3 px-5">Email</th>
                    <th class="text-left p-3 px-5">Role</th>
                    <th></th>
                </tr>
                <tr class="border-b hover:bg-orange-100 bg-white" v-for="item in getData" :key="item.id">
                    <td class="p-3 px-5"><input type="text"  class="bg-transparent">{{item.name}}</td>
                    <td class="p-3 px-5"><input type="text"  class="bg-transparent">{{item.email}}</td>
                    <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent">
                            <option value="user">{{item.name}}</option>
                            <option value="admin">{{item.name}}</option>
                        </select>
                    </td>
                    <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">View</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      getData:[],
      headers: {
        'authorization': 'Bearer 23|KZjAkUlZelR6MvVOWRxiovn6P2ZkxwlyBvrZnz9Q'
      }
    }
  },
  methods: {
    async list_user() {
        await this.$axios.get('http://localhost:8000/api/user_manage',{
             headers: this.headers
            })
            .then((response) => (this.info = response))
            .then(() => {
                console.log(this.info.data);
                if(this.info.data.success===true){
                    this.getData = this.info.data.data;
                }else{
                    alert("Server ERROR");
                }
            })
    },
  },
  mounted() {
    this.list_user();

  },
}
</script>