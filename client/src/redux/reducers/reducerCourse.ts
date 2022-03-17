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

        case Datatypes.UPDATE_FILE:

            return {
                ...state,
                files:action.payload
            }

        case Datatypes.DELETE_FILE:

            return {
                ...state,
                files:action.payload
            }

        case Datatypes.CREATE_LINK:

            return {
                ...state,
                links:state.links.concat(action.payload)
            }

        case Datatypes.UPDATE_LINK:

            return {
                ...state,
                links:action.payload
            }

        case Datatypes.DELETE_LINK:

            return {
                ...state,
                links:action.payload
            }

        default:
            return state;

    }
}