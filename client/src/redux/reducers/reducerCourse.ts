import { Actions,CourseDetail,Datatypes } from "../interface";

const initialCourseDetail:CourseDetail = {
    links: [],
    files: [],
    summary:'', 
    seeFile:{
        name:'',
        url:''
    },
    viewSidebar:'',
}

export const courseDetailReducer=(state=initialCourseDetail,action:Actions):CourseDetail=>{

    switch (action.type) {
      case Datatypes.FIND_COURSE:
        console.log(action.payload);

        return {
          ...state,
          ...action.payload,
        };

      case Datatypes.CREATE_FILE:
        const newcourse=action.payload;
        const newArray=[...state.files];
        const findIndex=newArray.findIndex(course=>course.name===newcourse.name);
        console.log('Arraty state: ',state.files);
        console.log('LA copia del array: ',newArray);
        console.log('EL index fue encontrado: ',findIndex);

        if(findIndex !== -1){
          newArray[findIndex]=newcourse;
          return {
            ...state,
            files: [...newArray]
          };
        }
        return {
          ...state,
          files: state.files.concat(newcourse)
        }


      case Datatypes.UPDATE_FILE:
        return {
          ...state,
          files: action.payload,
        };

      case Datatypes.DELETE_FILE:
        const oldFileName = action.payload;
        console.log(oldFileName);

        const files = state.files.filter(
          (file) => file.name !== oldFileName.name
        );

        if (state.seeFile.name === oldFileName.name) {
          return {
            ...state,
            files: files,
            seeFile: {
              name: "",
              url: "",
            },
          };
        }

        return {
          ...state,
          files: files,
        };

      case Datatypes.CREATE_LINK:
        return {
          ...state,
          links: state.links.concat(action.payload),
        };

      case Datatypes.UPDATE_LINK:
        return {
          ...state,
          links: action.payload,
        };

      case Datatypes.DELETE_LINK:
        const oldLink = action.payload;

        const links = state.links.filter((link) => oldLink.name !== link.name);

        return {
          ...state,
          links: links,
        };

      case Datatypes.GET_FILE:
        //En el payload de la action me llega el nombre del archivo:
        console.log("la action es: ", action);

        const file = state.files.find(
          (file) => file.id === Number(action.payload)
        );
        console.log("el archivo para ver es: ", file);

        return {
          ...state,
          seeFile: {
            name: file!.name,
            url: file!.url,
          },
        };

      case Datatypes.CLEAN_FILE:
        return {
          ...state,
          seeFile: {
            name: "",
            url: "",
          },
        };

      case Datatypes.CHANGE_VIEW:
        return {
          ...state,
          viewSidebar: action.payload,
        };
      case Datatypes.UPDATE_SUMMARY:
        console.log('texto del summary: ',action.payload)
        
        return {
          ...state,
          summary: action.payload,
        };

      case Datatypes.CLEAN_COURSE:
        return initialCourseDetail;

      default:
        return state;
    }
}