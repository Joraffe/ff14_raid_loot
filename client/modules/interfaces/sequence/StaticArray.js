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

  // Initialize Sequence with undefined's
  for (let i = ramIndex; i < ramIndex + (BIT_SIZE * size); i += BIT_SIZE) {
    memory[i] = undefined;
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

  const insertAt = (index, item) => {
    let old = getAt(index);
    setAt(index, item);

    if (old) {
      insertAt(index + 1, old);
    }
  };

  const deleteAt = (index) => {
    while (index < size) {
      let nextIndex = index + 1;
      let next = getAt(nextIndex);
      setAt(index, next);
      index++;
    }
  };

  const insertFirst = (item) => {
    insertAt(0, item)
  };

  const deleteFirst = () => {
    deleteAt(0);
  };

  const _getLastIndex = () => {
    let offset = 0
    let lastIndex, last;
    while (!last) {
      offset++;
      lastIndex = size - offset;
      last = getAt(lastIndex);
    }

    return lastIndex;
  }

  const insertLast = (item) => {
    insertAt(_getLastIndex() + 1, item);
  };

  const deleteLast = () => {
    deleteAt(_getLastIndex());
  };

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
