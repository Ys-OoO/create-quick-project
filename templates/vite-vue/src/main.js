import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import router from './routes/index.js';
import { createPinia } from 'pinia';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
