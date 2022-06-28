import BOOKS_DATA from '../sampledata/books';
import CATEGORIES_DATA from '../sampledata/categories.json';
import QUOTES_DATA from '../sampledata/quotes.json';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../store/ActionTypes';

const dispatch = useDispatch()

function loadRecentBooks() {
  // send api request
  dispatch(actionTypes.LOAD_RECENT_BOOKS, {
    books: BOOKS_DATA,
  });
}

// function loadQuotes() {
//   // send api request
//   dispatch('LOAD_QUOTES', {
//     quotes: QUOTES_DATA,
//   });
// }

// function searchBooks() {
//   // send api request
//   dispatch('SEARCH_BOOKS', {
//     books: BOOKS_DATA,
//   });
// }

// function loadCategories() {
//   // send api request
//   dispatch('LOAD_CATEGORIES', {
//     categories: CATEGORIES_DATA,
//   });
// }

export default {loadRecentBooks};
