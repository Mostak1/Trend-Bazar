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
        <input v-model="password" class="form-control" id="password" type="password" required />
      </div>
      <div class="mb-3">
        <label for="cpassword" class="form-label">Confirm Password</label>
        <input v-model="cpassword" class="form-control" id="cpassword" type="password" required />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <p v-if="submitted" class="mt-3 text-success">Form submitted successfully!</p>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: "Contact",
  data() {
    return {
      name: '',
      email: '',
      password: '',
      cpassword: '',
      submitted: false
    };
  },
  methods: {
    async handleSubmit() {
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Pass:', this.password);
      console.log('C Pass:', this.cpassword);

      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password,
      };

      try {
        const response = await axios.post('http://127.0.0.1:8000/api/userstore', formData);
        if (response.data.success) {
          // Success message with SweetAlert
          Swal.fire({
            title: 'Success!',
            text: 'User has been created successfully!',
            icon: 'success',
          });

          this.submitted = true;
        } else {
          // Error message with SweetAlert
          Swal.fire({
            title: 'Error!',
            text: 'Failed to create user. Please try again later.',
            icon: 'error',
          });
        }
      } catch (error) {
        // Error message with SweetAlert
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred while creating the user. Please try again later.',
          icon: 'error',
        });
        console.error(error);
      }
    },
  },

};
</script>

