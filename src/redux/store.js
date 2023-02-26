import { configureStore } from '@reduxjs/toolkit';
import { createReducer, createAction } from '@reduxjs/toolkit';

const increment = createAction('myValue/increment');
const myReducer = createReducer(10, {});

export const store = configureStore({ reducer: { myValue: myReducer } });
