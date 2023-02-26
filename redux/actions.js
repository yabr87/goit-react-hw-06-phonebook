import { nanoid } from 'nanoid';
// в єкшн додаємо айді за потреби
import { ADD_BOOKS } from './constants';

export const addBook = peyload => {
  return {
    type: ADD_BOOKS,
    peyload: { id: nanoid(4), ...peyload }, //це наша книга
  };
};
