import { createApp } from 'vue';
import App from 'App.vue';

import { router } from 'router/router';
import { StaticArraySequence } from 'interfaces/sequence/StaticArray.js';

const app = createApp(App);
app.use(router);
app.mount('#app');


const sequence = StaticArraySequence(10);

console.log('sequence.length()', sequence.length());
console.log('sequence.getAt(0)', sequence.getAt(0));
sequence.setAt(0, 'hello');
console.log('sequence.getAt(0)', sequence.getAt(0));

for (let item of sequence.iterate()) {
  console.log('item:', item);
}
