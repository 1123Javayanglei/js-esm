import {createApp} from './node_modules/vue3/vue.esm-browser.js';

import {ElButton} from './node_modules/element-plus/index.full.mjs';





let app = createApp({
    data() {
        return {
            message:"你好",
            visible:false,
            count: 0
        }
    }
});

app.use(ElButton);

app.mount('#app');
