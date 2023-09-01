<template>
    <div class="container">
          <h1 class="text-center">Contact Us</h1>
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input v-model="name" type="text" class="form-control" id="name" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input v-model="email" type="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input v-model="password" class="form-control" id="password" type="password"  required/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <p v-if="submitted" class="mt-3 text-success">Form submitted successfully!</p>
          </form>
        </div>
</template>
<script>
import axios from 'axios';
export default {
   name: "Contact",
   data() {
        return {
          name: '',
          email: '',
          password: '',
          submitted: false
        };
      },
      methods: {
        handleSubmit() {
          // You can perform form submission or API call here
          // For demonstration, we'll just log the form data
          console.log('Name:', this.name);
          console.log('Email:', this.email);
          console.log('Message:', this.password);
          const formData ={
            name: this.name,
            email: this.email,
            password: this.password,
          };
          axios.post('http://localhost/WDPF/vuejs/project/trend-bazar-admin/public/userstore',formData)
          .then(res=>{
            alert('Success', res.data);
            this.submitted = true;
          }).catch(error=>{
            alert('Error', error);
          })
        },

      },
};
</script>
<!DOCTYPE html>
