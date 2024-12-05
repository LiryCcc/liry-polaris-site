import { createApp } from 'vue';
import { createPinia } from 'pinia';

import main from '@/main-view.vue';
import router from '@/router';
import 'normalize.css';

const app = createApp(main);

app.use(createPinia());
app.use(router);

app.mount('#app');
