import * as actionTypes from './ActionTypes';
import BOOKS_DATA from '../sampledata/books';
import PLAYER_STATUS from '../utils/playerStatus';

const initialState = {
    bookCategory: 'lifestyle',
    books: '',
    myCart: [BOOKS_DATA[0]],
    player: {
        visible: false,
        status: false,
        book: null,
        duration: null,
        track: null,
    },
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
        case actionTypes.LOAD_AUDIO:
            return {
                ...state,
                player: {
                    visible: true,
                    status: PLAYER_STATUS.LOADING,
                    book: action.payload.book,
                    duration: null,
                    track: action.payload.track,
                }
            }
        case 'PLAY_AUDIO':
            return {
                ...state,
                player: {
                    ...state.player,
                    duration: action.payload.duration,
                    status: PLAYER_STATUS.PLAYING,
                },
            }
        case 'PAUSE_AUDIO':
            return {
                ...state,
                player: {
                    ...state.player,
                    status: PLAYER_STATUS.PAUSE,
                },
            }
        case 'PLAY_AUDIO_ENDED':
            return {
                ...state,
                player: {
                    ...state.player,
                    status: PLAYER_STATUS.STOP,
                },
            }
        case 'UNLOAD_AUDIO':
            return {
                ...state,
                player: {
                    visible: false,
                    status: false,
                    book: null,
                    duration: null,
                    track: null,
                },
            }
    }
    return state;
};
export default bookReducer;