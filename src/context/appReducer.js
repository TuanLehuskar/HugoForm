import appActions from "./appActions";

export default function appReducer(prevState, action) {
  console.log("Incoming change");
  console.log(action);
  switch (action.type) {
    case appActions.UPDATE_SIGNIN_STATUS:
      return {
        ...prevState,
        isSignin: action.payload,
      };

    case appActions.CHANGE_PAGE:
      return {
        ...prevState,
        currentPage: action.payload,
      };

    case appActions.CHANGE_ANSWER:
      return {
        ...prevState,
        data: {
          ...prevState.data,
          ...action.payload,
        },
      };

    case appActions.CHANGE_NAVIGATOR_VISIBLE:
      return {
        ...prevState,
        navigatorVisible: action.payload,
      };

    default:
      return prevState;
  }
}
