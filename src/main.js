import { createApp } from 'vue';
import { setupRouter } from './router'
import App from './App.vue';
import 'uno.css'

const app = createApp(App)

setupRouter(app)
app.mount('#app');
