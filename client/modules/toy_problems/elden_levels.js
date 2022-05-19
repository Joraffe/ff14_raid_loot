import { StaticArraySequence } from "interfaces/sequence/StaticArray";


export const getRunesForLevel = (level) => {
  let x = (((level + 81) - 92)) * 0.02

  if (x < 0) {
    x = 0;
  }

  return Math.floor(((x + 0.1) * Math.pow(level + 81, 2)) + 1)
}


export const getEldenRingLevels = () => {
  const sequence = StaticArraySequence(714);

  for (let level = 0; level < 714; level++) {
    sequence.setAt(level, getRunesForLevel(level));
  }

  return sequence;
}
