import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/Todo/Todoorslice';


export const store = configureStore({
    reducer : todoReducer
})