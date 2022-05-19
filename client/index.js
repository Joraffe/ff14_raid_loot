import { createApp } from 'vue';
import App from 'App.vue';

import { StaticArraySequence } from 'interfaces/sequence/StaticArray.js';
import { router } from 'router/router';
import { getEldenRingLevels } from 'toy_problems/elden_levels.js';


const app = createApp(App);
app.use(router);
app.mount('#app');


const printSequence = (sequence) => {
  let index = 0;
  for (let item of sequence.iterate()) {
    console.log(`[${index}][${item}]`);
    index++;
  }
}


const sequence = StaticArraySequence(4);

console.log('sequence.length()', sequence.length());
sequence.setAt(0, 'hello');
sequence.setAt(1, 'goodbye');
sequence.setAt(2, 'world');
printSequence(sequence);

console.log('---inserting at 1---')
sequence.insertAt(1, 'cae');
printSequence(sequence);

console.log('---deleteing at 2---')
sequence.deleteAt(2)
printSequence(sequence);

console.log('---inserting first ---')
sequence.insertFirst('jobine');
printSequence(sequence);


console.log('----deleting first----')
sequence.deleteFirst();
printSequence(sequence);

console.log('---deleting last----')
sequence.deleteLast();
printSequence(sequence);

console.log('----inserting last---')
sequence.insertLast('elden');
printSequence(sequence);


const levelTable = getEldenRingLevels();
console.log('elden level 221', levelTable.getAt(221));
console.log('elden level 222', levelTable.getAt(222));
