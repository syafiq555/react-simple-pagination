export const SET_DATA = 'SET_DATA';
export const SET_CURRENT_DATA = 'SET_CURRENT_DATA';
export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
export const INCREMENT_PAGE = 'INCREMENT_PAGE';
export const DECREMENT_PAGE = 'DECREMENT_PAGE';
export const initialState = {
  data: [],
  currData: [],
  activePage: 1,
};
export const API_URL = 'https://randomuser.me/api/?results=200&seed=924cb858eea236a2';
