<template>
  <div class="container">
    <h2>Your Cart</h2>
    <div v-for="item in cartItems" :key="item.id" class="cart-item">
      <div class="item-details">
        <img :src="item.thumbnail" :alt="item.title" class="cart-item-image" />
        <div class="item-info">
          <h4>{{ item.title }}</h4>
          <p>Price: {{ item.price * item.quantity }}Tk</p>
          <p>
            Quantity: 
            <input type="number" v-model="item.quantity" @change="updateQuantity(item)" />
          </p>
        </div>
      </div>
      <button class="btn btn-danger" @click="removeFromCart(item.id)">Remove</button>
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
