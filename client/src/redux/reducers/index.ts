import { combineReducers } from "redux";
import {userReducer} from './reducerUser';
import {courseReducer} from './reducerCourses';
import {linkReducer} from './reducerLink';
import { User, Course, CourseDetail } from "../interface";
import { courseDetailReducer } from "./reducerCourse";

interface GlobalState {
  user: User;
  courses: Course[];
  courseDetail: CourseDetail;
}


export const rootReducer = combineReducers<GlobalState>({
  user: userReducer,
  courses: courseReducer,
  courseDetail: courseDetailReducer,
});

export type  State=ReturnType<typeof rootReducer>

