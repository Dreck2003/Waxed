import { combineReducers } from "redux";
import {userReducer} from './reducerUser';
import {courseReducer} from './reducerCourses';
// import {linkReducer} from './reducerLink';
import { User, Course, CourseDetail,Task } from "../interface";
import { courseDetailReducer } from "./reducerCourse";
import { reducerTask } from "./reducerTask";

interface GlobalState {
  user: User | null;
  courses: Course[];
  courseDetail: CourseDetail;
  tasks: Task[]| null;
}

export const rootReducer = combineReducers<GlobalState>({
  user: userReducer,
  courses: courseReducer,
  courseDetail: courseDetailReducer,
  tasks:reducerTask,
});

export type  State=ReturnType<typeof rootReducer>

