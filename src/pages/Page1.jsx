import { useContext, useEffect } from "react";
import appActions from "../context/appActions";
import { appContext } from "../context/appContext";
import Logo from "../components/Logo";

export default function Page1() {
  const { dispatch } = useContext(appContext);

  const handleButtonClicked = () => {
    // signIn().then(console.log);
    dispatch({
      type: appActions.CHANGE_PAGE,
      payload: 1,
    });
  };

  useEffect(() => {
    dispatch({
      type: appActions.CHANGE_NAVIGATOR_VISIBLE,
      payload: false,
    });
  }, []);

  return (
    <div className="row justify-content-center align-items-center h-100 position-relative">
      <div className="col-auto">
        <div className="row">
          <div className="col-auto animate__animated animate__fadeIn">
            <img
              src="logo_main.png"
              className="img-fluid"
              style={{ height: "200px", objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="row justify-content-center mt-5 pt-4">
          <div className="col-auto">
            <h3 className="text-uppercase mb-0 text-yellow animate__animated animate__fadeInUp">
              HUGO AWARD 2023
            </h3>
          </div>
        </div>

        <div className="row g-1 justify-content-center align-items-center mt-1">
          <div className="d-none d-md-block col-auto pt-3 animate__animated animate__fadeInUp">
            <Logo
              style="animate__animated animate__fadeIn"
              icon="fire.svg"
              width="24px"
            />
          </div>
          <div className="col-auto">
            <h5 className="text-uppercase text-center text-yellow animate__animated animate__fadeInUp animate__slow">
              HUGO ENGLISH CLUB - LIGHT UP YOUR FIRE
            </h5>
          </div>
          <div className="d-none d-md-block col-auto pt-3 animate__animated animate__fadeInUp">
            <Logo
              style="animate__animated animate__fadeIn"
              icon="fire.svg"
              width="24px"
            />
          </div>
        </div>

        <div className="row justify-content-center mt-3">
          <div className="col-auto">
            <button
              className="btn rounded-0 btn-yellow btn-lg animate__animated animate__fadeIn animate__delay-1s"
              onClick={handleButtonClicked}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
