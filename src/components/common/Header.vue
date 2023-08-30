<template>
    <div class="">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <RouterLink class="navbar-brand fs-2" to="/">Navbar</RouterLink>
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
                <RouterLink class="nav-link fs-4" to="/cart">Cart</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
</template>