import { createStore} from 'redux';
import rootReducer from './GlobalReducer';

export const store = createStore(rootReducer);