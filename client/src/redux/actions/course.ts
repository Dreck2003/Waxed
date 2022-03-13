import { Dispatch } from "redux";
import { Course, Datatypes } from "../interface";
import LocalForage from "localforage";


export const createCourse = (name: string, curso: Course) => {

  return async (dispatch: Dispatch) => {

    const read = new FileReader();

    read.readAsDataURL(curso.img);

    read.addEventListener('load', async(event: any) => {


        const fileCurso={
            ...curso,
            img:event.target.result,
        };
        const course = await LocalForage.setItem(name, fileCurso);

        dispatch({
          type: Datatypes.CREATE_COURSE,
          payload: fileCurso,
        });
        alert('Create Course Succefull')

    })
    

    

  };
};

export const getCourses = () => {
  
    return async (dispatch: Dispatch) => {

    try {
      const courses: Course[] = [];

      await LocalForage.iterate((valor, key) => {
        courses.push(valor as Course);
      });

      dispatch({
        type: Datatypes.GET_COURSES,
        payload: courses,
      });

    } catch (err) {

      console.error("38- ", err);
    }
  };
};
