import { combineReducers, createStore } from 'redux';
import {AdReducer, UserReducer} from './Reducer/Reducer'

export const store = createStore(AdReducer)
export const userData = createStore(UserReducer)

const rootData = combineReducers({adData: AdReducer, userData: UserReducer})

export const reducer = createStore(rootData)
