import { songAssociationWords } from "./constants";

export const getShuffledWords = () => {
  let j, x, i;
  const words = songAssociationWords;
  for (i = words.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = words[i];
    words[i] = words[j];
    words[j] = x;
  }
  return words;
};
