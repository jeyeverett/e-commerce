import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';

//Middleware
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

//Sagas
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };