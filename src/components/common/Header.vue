<template>
  <div class="">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <RouterLink class="navbar-brand fs-2" to="/">TrendBazar</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <RouterLink class="nav-link fs-4" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link fs-4" to="/about">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link fs-4" to="/contact">Contact</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link fs-4" to="/product">Product</RouterLink>
            </li>
            <li class="nav-item">
              
                
              

             
            </li>
          </ul>
        </div>
        <div class="nav-item">
          <RouterLink class="nav-link fs-4" to="/cart">
                <button type="button" class="btn position-relative">
                  Cart
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    <!-- {{ cartItemCount }} -->
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </button>

              </RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cartItemCount: 0, // Initial value
    };
  },
  mounted() {
    // Fetch the cart count from local storage and update the data property
    const cartCount = localStorage.getItem('cartCount');
    this.cartItemCount = cartCount ? parseInt(cartCount) : 0;
  },
};
</script>