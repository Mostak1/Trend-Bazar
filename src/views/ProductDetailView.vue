<template>
  <div class="container">
    <div class="my-3 text-center fs-3">All Products</div>

    <!-- For Pagination -->

    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" @click="setCurrentPage(1)">First</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" @click="prevPage">Previous</a>
        </li>
        <li v-for="page in visiblePageNumbers" :key="page" class="page-item" :class="{ active: currentPage === page }">
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
          <img :src="item.thumbnail" class="card-img-top" alt="..." style="max-height: 300px;">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <div class="card-text">
              <p class="d-flex justify-content-between">
                <span class="text-decoration-line-through text-danger"><strong>Price : </strong> {{ item.price * 10 }}Tk</span>
                <span class="text-end"><strong>Discount Price: </strong>{{ Math.round((item.price -
                  item.price * item.discountPercentage / 100) * 10) }}Tk</span>
              </p>
              <p>
                <strong>Rating :</strong> {{ item.rating }}
              </p>
              <p>
                <strong>Category :</strong> {{ item.category }}
              </p>
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
        <li v-for="page in visiblePageNumbers" :key="page" class="page-item" :class="{ active: currentPage === page }">
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

    <!-- {{ items }} "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "...",
      "images": ["...", "...", "..."] -->
  </div>
</template>

<script>
export default {
  name: "Product",
  data: function () {
    return {
      items: [],
      itemsPerPage: 9, // Adjust this value as needed
      currentPage: 1,
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
  },
  methods: {
    fetchData() {
      fetch('https://dummyjson.com/products?limit=100')
        .then((response) => response.json())
        .then((data) => {
          this.items = data.products;
        })
        .catch((error) => {
          console.error(error);
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
  },
};
</script>


