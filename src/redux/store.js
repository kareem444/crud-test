import {
    configureStore
} from '@reduxjs/toolkit';

import users_reducer from './reducers/users_reducer';

export default configureStore({
    reducer: {
        userRed: users_reducer,
    },
});