import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);

// Mount the app to the DOM
const vm = app.mount('#app');

// Initialize AOS
AOS.init({
    // You can customize various options here
    duration: 3000, // Duration of the animations
    easing: 'ease-in-out', // Easing function for animations
    once: true, // Only animate elements once as they enter the viewport
});
