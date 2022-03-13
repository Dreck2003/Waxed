import { combineReducers } from "redux";
import {userReducer} from './reducerUser';
import {courseReducer} from './reducerCourse';
import {linkReducer} from './reducerLink';
import {User,Course} from '../interface';

interface GlobalState{
    user:User,
    courses:Course[],
}


export const rootReducer = combineReducers<GlobalState>({
  user: userReducer,
  courses: courseReducer,
});

export type  State=ReturnType<typeof rootReducer>

