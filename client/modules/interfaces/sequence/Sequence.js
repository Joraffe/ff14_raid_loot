import _ from "lodash";

/**
 * The Sequence Interface.
 * Describes all of the necessary methods required to implement a series of items.
 * @param {Number} [size] - Optionally specify the initial size of the sequence.
 */
export default Sequence = (size) => {

  const getAt = (index) => {};

  const setAt = (index, item) => {};

  const length = () => {};

  function* iterate() {}

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
