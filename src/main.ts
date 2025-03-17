import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

createApp(App).use(createPinia()).use(Antd).use(router).mount('#app');
