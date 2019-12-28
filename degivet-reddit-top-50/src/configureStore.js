import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import hotReloading from './utils/hotReloading';

import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers'

export default function configureAppStore(preloadedState) {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [loggerMiddleware, ...getDefaultMiddleware()],
        preloadedState,
        enhancers: []
    });

    // hot reloading
    hotReloading('./reducers', () => store.replaceReducer(rootReducer));
    
    return store;
}