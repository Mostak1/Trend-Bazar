<template>
  <div class="text-center my-3 fs-2 bg-warning">{{ p.title }} Details </div>
  <!--  -->
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="main-img">
          <img id="mainimage" class="img-fluid" :src="mainimage ? mainimage : ''" alt="ProductS" />
          <div class="row my-3 previews">
            <div v-for="(image, i) in p.images" :key="i" class="col-md-3">
              <img class="pimages" :src="image" alt="Sale" @click="show(image)" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <div class="main-description px-2">
          <div class="category text-bold">Category: {{ p.category }}</div>
          <div class="product-title text-bold my-3">{{ p.title }}</div>

          <div class="price-area my-4">
            <p class="old-price mb-1">
              <del>${{ p.price }}</del>
              <span class="old-price-discount text-danger">({{ p.discountPercentage }}% off)</span>
            </p>
            <p class="new-price text-bold mb-1"> ${{ p.price - (p.price * p.discountPercentage / 100) }}</p>
            <p class="text-secondary mb-1">
              (Additional tax may apply on checkout)
            </p>
          </div>

          <div class="buttons d-flex my-5">
            <div class="block">
              <a href="" class="shadow btn custom-btn" @click="test2()">Wishlist</a>
            </div>
            <div class="block">
              <button class="shadow btn custom-btn" @click="addProductToCart1(p)">Add to cart</button>
            </div>


          </div>
        </div>

        

       

        
      </div>
      <div class="product-details my-4">
          <p class=" text-bold  fs-3">Product Details</p>
          <p class="description">
            {{ p.description }}
          </p>
        </div>
    </div>
  </div>
  <!--  -->
</template>

<script>
/*
{ "id": 3, "title": "Samsung Universe 9", "description": "Samsung's new variant which goes beyond Galaxy to the Universe", "price": 1249, "discountPercentage": 15.46, "rating": 4.09, "stock": 36, "brand": "Samsung", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg", "images": [ "https://i.dummyjson.com/data/products/3/1.jpg" ] } 

*/
import { ref, computed, watch } from 'vue';
export default {
  data: function () {
    return {
      p: null,
      mainimage: '',
    };
  },
  props: ["id"],
  computed: {
    productid() {
      return this.$route.params.id;
    },
  },
  methods: {
    //  add to cart
    addProductToCart1(p) {
      
      const cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === p.id);
      if (existingItem) {
        existingItem.quantity++;
        alert('Product quantity 1 add with the existing quantity');
      } else {
        cart.push({ ...p, quantity: 1 });
        alert('Product Add Successfully');
      }

      localStorage.setItem('cart', JSON.stringify(cart));
    },

    getalldata() {
      fetch("https://dummyjson.com/products/" + this.$route.params.id)
        .then((res) => res.json())
        .then((res) => {
          this.p = res;
          this.mainimage = res.thumbnail;
        });
    },
    show(image) {
      this.mainimage = image;
    },
  },
  created() {
    this.getalldata();
  },


};
</script>

<style scoped>
.pimages {
  aspect-ratio: 1/1;
}

.text-bold {
  font-weight: 800;
}

text-color {
  color: #0093c4;
}

/* Main image - left */
.main-img img {
  width: 100%;
}

/* Preview images */
.previews img {
  width: 100%;
  height: 140px;
}

.main-description .category {
  text-transform: uppercase;
  color: #0093c4;
}

.main-description .product-title {
  font-size: 2.5rem;
}

.old-price-discount {
  font-weight: 600;
}

.new-price {
  font-size: 2rem;
}

.details-title {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
  color: #757575;
}

.buttons .block {
  margin-right: 5px;
}

.quantity input {
  border-radius: 0;
  height: 40px;
}

.custom-btn {
  text-transform: capitalize;
  background-color: #ffc107;
  color: white;
  width: 150px;
  height: 40px;
  border-radius: 0;
}

.custom-btn:hover {
  background-color: #ffc107 !important;
  font-size: 18px;
  color: white !important;
}

.similar-product img {
  height: 400px;
}

.similar-product {
  text-align: left;
}

.similar-product .title {
  margin: 17px 0px 4px 0px;
}

.similar-product .price {
  font-weight: bold;
}

.questions .icon i {
  font-size: 2rem;
}

.questions-icon {
  font-size: 2rem;
  color: #0093c4;
}

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {

  /* Make preview images responsive  */
  .previews img {
    width: 100%;
    height: auto;
  }
}
</style>