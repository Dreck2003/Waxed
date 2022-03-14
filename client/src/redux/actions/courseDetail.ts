import localforage from "localforage";
import { Dispatch } from "redux";
import { Datatypes, Course, Archive } from "../interface";

type Curso = Course | null;

export const getCourseDetail = (id: string) => {
  return async (dispatch: Dispatch) => {
    // const courseDetail={
    //     links:{}
    // };

    const curso: Curso = await localforage.getItem(id);
    // courseDetail.links = curso!.links;
    console.log("action 22- ", curso);

    dispatch({
      type: Datatypes.FIND_COURSE,
      payload: {
        files: curso!.files,
        links: curso!.links,
      },
    });
  };
};

