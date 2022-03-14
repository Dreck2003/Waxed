import { Actions,CourseDetail,Datatypes } from "../interface";

const initialCourseDetail:CourseDetail = {
    links: [],
    files: []
}



export const courseDetailReducer=(state=initialCourseDetail,action:Actions):CourseDetail=>{

    switch(action.type){

        case Datatypes.FIND_COURSE:

            return action.payload;

        case Datatypes.CREATE_FILE:

            return {
                ...state,
                files:state.files.concat(action.payload)
            }


        default:
            return state;


    }

}