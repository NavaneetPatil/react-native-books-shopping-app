import * as actionTypes from './ActionTypes';
import BOOKS_DATA from '../sampledata/books';

const initialState = {
    bookCategory: 'lifestyle',
    books: '',
    myCart: [BOOKS_DATA[0]]
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_RECENT_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case actionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                myCart: [...state.myCart, action.payload]
            }
        case actionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                myCart: state.myCart = state.myCart.filter(item => {
                    return (item.id !== action.payload.id)
                })
            }
    }
    return state;
};
export default bookReducer;