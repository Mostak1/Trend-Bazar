
<style scoped>
.cart-item-image {
  height: 100px;
}
</style>
<template>
  <div class="container">

    <div class="card p-5">


      <div class="text-center fs-3 text-black my-3 bg-info">Your Cart</div>
      <ol>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Image</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Acton</th>
            </tr>
          </thead>
          <tbody>

            <tr v-for="item in cartItems" :key="item.id" class="cart-item">
              <th scope="row">
                <li></li>
              </th>
              <td>{{ item.title }}</td>
              <td> <img h :src="item.thumbnail" :alt="item.title" class="cart-item-image image-fluid" /></td>
              <td> <input class="form-control" type="number" v-model="item.quantity" @change="updateQuantity(item)" />
              </td>
              <td>{{ item.price * item.quantity }}Tk</td>
              <td><button class="btn btn-danger" @click="removeFromCart(item.id)">Remove</button></td>
            </tr>
            <tr>
              <td colspan="5" class="text-end">Total Cost:</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </ol>
      <div class="text-center ">Place Order</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [],
    };
  },
  mounted() {
    this.loadCartItems();
  },
  methods: {
    loadCartItems() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      this.cartItems = cart;
    },
    updateQuantity(item) {
      // Update the quantity and recalculate the total price
      item.priceTotal = item.price * item.quantity;
      this.saveCartItems();
    },
    removeFromCart(itemId) {
      this.cartItems = this.cartItems.filter(item => item.id !== itemId);
      this.saveCartItems();
    },
    saveCartItems() {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    },
  },
};
</script>
