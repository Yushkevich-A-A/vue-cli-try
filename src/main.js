import { createApp } from 'vue'
import App from '@/App.vue'
import components from '@/components'
import router from '@/router/router';
import store from '@/store';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


const app = createApp(App);


components.forEach(component => {
    app.component(component.name, component)        
});


const toastOptions = {
    timeout: 2000
};


app    
    .use(router)
    .use(store)
    .use(Toast, toastOptions)
    .mount('#app')
