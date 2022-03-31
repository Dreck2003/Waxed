import { Actions,Course,Datatypes } from "../interface"


export const courseReducer = (state: Course[] = [], action: Actions):Course[] => {
  switch (action.type) {
    case Datatypes.CREATE_COURSE:
      return state.concat(action.payload);

    case Datatypes.GET_COURSES:
      return action.payload;

    case Datatypes.DELETE_COURSE:
      const coursesFilters = state.filter(
        (course) => course.id !== action.payload.id
      );

      return [...coursesFilters]

    default:
      return state;
  }
};