export default {
    state: {
      cartItems: [],
    },
    mutations: {
      addToCart(state, product) {
        const existingProduct = state.cartItems.find(item => item.id === product.id);
        if (existingProduct) {
          existingProduct.quantity++;
        } else {
          state.cartItems.push({ ...product, quantity: 1 });
        }
      },
      updateCartItemQuantity(state, { productId, quantity }) {
        const cartItem = state.cartItems.find(item => item.id === productId);
        if (cartItem) {
          cartItem.quantity = quantity;
        }
      },
    },
    actions: {},
    getters: {},
  };
  