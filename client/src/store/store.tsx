import { combineReducers } from 'redux';
import ImporterReducer from './reducers/ImporterReducer';
import { configureStore } from '@reduxjs/toolkit';
import ExporterReducer from './reducers/ExporterReducer';

const rootReducer = combineReducers({
  importer: ImporterReducer,
  exporter: ExporterReducer
});

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
