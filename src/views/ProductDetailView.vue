<style scoped>
.dark_red{
  color: #F7444E;
}
</style>

<template>
  <div class="container">
    <div class="">


      <div class="row ">
        <div class="my-3 text-center fs-3" data-aos="flip-left">Products Of Trend Bazar</div>

        <div class="col-md-2 mt-5 dark_red">
          <div class="card mt-2" >
            <div class="card-header">
              Filter By Category
            </div>
            <ul class="list-group list-group-flush" v-for="cat in cats">
              <li class="list-group-item btn" @click="filterDataByCategory(cat.id)">{{ cat.name }}</li>
              
            </ul>
            <div class="card-header btn" @click="filterDataByCategory(null)">
              ALL
            </div>
          </div>
          <!-- <button class="btn btn-outline-warning mb-2" @click="filterDataByCategory(15)">Home Decoration</button>
          <button class="btn btn-outline-warning mb-2" @click="filterDataByCategory(13)">Home Decoration</button>
          <button class="btn btn-outline-warning mb-2" @click="filterDataByCategory(18)">Home Decoration</button>
          <button class="btn btn-outline-warning mb-2" @click="filterDataByCategory(null)">All</button> -->

        </div>
        <div class="col-md-10 ">



          <!-- For Pagination -->
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" @click="setCurrentPage(1)">First</a>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" @click="prevPage">Previous</a>
              </li>
              <li v-for="page in visiblePageNumbers" :key="page" class="page-item"
                :class="{ active: currentPage === page }">
                <a class="page-link" @click="setCurrentPage(page)">{{ page }}</a>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === pageCount }">
                <a class="page-link" @click="nextPage">Next</a>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === pageCount }">
                <a class="page-link" @click="setCurrentPage(pageCount)">Last</a>
              </li>
            </ul>
          </nav>


          <div class="row row-cols-1 mb-3 row-cols-md-3 g-4">
            <div class="col " v-for="item in paginatedItems" :key="item.id">
              <div class="card h-100">
                <img :src="item.thumbnail" class="card-img-top" data-aos="zoom-in" alt="..." style="max-height: 300px;">
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <div class="card-text">
                    <p class="d-flex justify-content-between">
                      <span class="text-decoration-line-through text-danger"><strong>Price : </strong> {{ item.price * 10
                      }}Tk</span>
                      <span class="text-end"><strong>Discount Price: </strong>{{ Math.round((item.price -
                        item.price * item.discountPercentage / 100) * 10) }}Tk</span>
                    </p>
                    <p>
                      <strong>Rating :</strong> {{ item.rating }}
                    </p>
                    <p>
                      <strong>Category :</strong> {{ item.category.name }}
                    </p>
                    <div class="justify-content-between d-flex">
                      <router-link :to="'/details/' + item.id" class="btn btn-outline-warning">Details</router-link>
                      <button class="btn btn-outline-danger" @click="addProductToCart(item)">Add To Cart</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <!-- down pagination -->
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" @click="setCurrentPage(1)">First</a>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" @click="prevPage">Previous</a>
              </li>
              <li v-for="page in visiblePageNumbers" :key="page" class="page-item"
                :class="{ active: currentPage === page }">
                <a class="page-link" @click="setCurrentPage(page)">{{ page }}</a>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === pageCount }">
                <a class="page-link" @click="nextPage">Next</a>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === pageCount }">
                <a class="page-link" @click="setCurrentPage(pageCount)">Last</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {


  name: "Product",
  data: function () {
    return {
      items: [],
      cats: [],
      itemsPerPage: 9, // Adjust this value as needed
      currentPage: 1,
      categoryIdToFilter: null,
    };
  },
  computed: {
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.items.slice(startIndex, endIndex);
    },
    pageCount() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    visiblePageNumbers() {
      const startPage = Math.max(1, this.currentPage - 1);
      const endPage = Math.min(this.pageCount, startPage + 2);
      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    },
  },
  mounted() {
    this.fetchData();
    this.catData();
  },
  methods: {
    fetchData() {
      fetch('http://localhost/WDPF/vuejs/project/trend-bazar-admin/public/api/productsapi')
        .then((response) => response.json())
        .then((data) => {
          if (this.categoryIdToFilter !== null) {
            // Filter the data based on the selected categoryId
            this.items = data.filter(item => item.category_id === this.categoryIdToFilter);
          } else {
            this.items = data;
          }
          // Filter the data based on category_id

          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    filterDataByCategory(categoryId) {
      // Set the selected categoryId
      this.categoryIdToFilter = categoryId;
      // Call fetchData to update the data
      this.fetchData();
    },
    catData(){
      fetch('http://localhost/WDPF/vuejs/project/trend-bazar-admin/public/api/catapi')
      .then((response) => response.json())
      .then((data) => {
        this.cats = data;
        console.log(data);
      }).catch((error)=>{
        console.log(error);
      });
    },
    setCurrentPage(page) {
      this.currentPage = page;
    },
    prevPage() {
      this.currentPage = Math.max(1, this.currentPage - 1);
    },
    nextPage() {
      this.currentPage = Math.min(this.pageCount, this.currentPage + 1);
    },
    //  add to cart
    addProductToCart(item) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
        alert('Product quantity 1 add with the existing quantity');
      } else {
        cart.push({ ...item, quantity: 1 });
        alert('Product Add Successfully');
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      this.cartItemCount++;
      localStorage.setItem('cartCount', this.cartItemCount.toString());
    },
  },
};

</script>


