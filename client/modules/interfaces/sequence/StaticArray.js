const BIT_SIZE = 64;
const RAM_SIZE = 2.56e16


/**
 * Implementing the Sequence using a "static array".
 * @param {Number} size - The size of the static array
 * (cannot be changed after initialization)
 * @return {Object}  A Sequence object implemented using a static array.
 */
export const StaticArraySequence = (size) => {
  // Choose a random "starting place in memory"
  const ramIndex = Math.random() * RAM_SIZE;

  // Container representing our memory
  const memory = {};

  // Initialize Sequence with 0's
  for (let i = ramIndex; i < ramIndex + (BIT_SIZE * size); i += BIT_SIZE) {
    memory[i] = 0;
  }

  const getAt = (index) => {
    const memoryIndex = ramIndex + (BIT_SIZE * index);
    return memory[memoryIndex];
  };

  const setAt = (index, item) => {
    const memoryIndex = ramIndex + (BIT_SIZE * index);
    memory[memoryIndex] = item;
  };

  const length = () => {
    return size;
  }

  function* iterate() {
    for (let i = ramIndex; i < ramIndex + (BIT_SIZE * size); i += BIT_SIZE) {
      yield memory[i];
    }
  }

  const insertFirst = (item) => {};

  const deleteFirst = () => {};

  const insertLast = (item) => {};

  const deleteLast = () => {};

  const insertAt = (index, item) => {};

  const deleteAt = (index) => {};

  return {
    'getAt': getAt,
    'setAt': setAt,
    'length': length,
    'iterate': iterate,
    'insertFirst': insertFirst,
    'deleteFirst': deleteFirst,
    'insertLast': insertLast,
    'deleteLast': deleteLast, 
    'insertAt': insertAt,
    'deleteAt': deleteAt,
  };
};
