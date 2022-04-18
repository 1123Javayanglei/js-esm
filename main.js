import * as Vue from './node_modules/vue3/vue.esm-browser.js';

import Element from './node_modules/element-plus/index.full.mjs';


let ref = Vue.ref;


let app = Vue.createApp({
    /**
     * https://v3.cn.vuejs.org/guide/composition-api-setup.html#%E5%8F%82%E6%95%B0
     * @param prpos
     * @param context
     * @return {{visible: boolean, count: number, message: string, value: (*|RefImpl)}}
     */
    setup(prpos, context) {
        let value = ref(new Date());
        let count = ref(0);
        let message = "你好";
        return {
            message, count, value
        }
    },
});

app.use(Element);

app.mount('#app');
