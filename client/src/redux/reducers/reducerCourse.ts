import { Actions,CourseDetail,Datatypes } from "../interface";

const initialCourseDetail:CourseDetail = {
    links: [],
    files: [], 
    seeFile:{
        name:'',
        url:''
    },
}


export const courseDetailReducer=(state=initialCourseDetail,action:Actions):CourseDetail=>{

    switch(action.type){

        case Datatypes.FIND_COURSE:

            return {
                ...state,
                ...action.payload
            };

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

        const oldFileName = action.payload;
        console.log(oldFileName)

        const files = state.files.filter((file) => file.name !== oldFileName.name);

        if(state.seeFile.name === oldFileName.name){
            return {
              ...state,
              files: files,
              seeFile:{
                  name:'',
                  url:''

              }
            };
        }

            return {
                ...state,
                files:files
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

        case Datatypes.GET_FILE:

            return {
                ...state,
                seeFile:action.payload
            }

        case Datatypes.CLEAN_FILE:

            return {
                ...state,
                seeFile:{
                    name:'',
                    url:''
                }
            }

        default:
            return state;

    }
}