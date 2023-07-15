import { useContext, useState } from "react";
import Logo from "../components/Logo";
import appActions from "../context/appActions";
import { appContext } from "../context/appContext";
export default function Page3() {
  const {
    value: { data },
    dispatch,
  } = useContext(appContext);

  const [tempAnswer, setTempAnswer] = useState(data.name);
  const handleAnswerChanged = (newAnswer) => {
    setTempAnswer(newAnswer);
  };

  const handleButtonClicked = () => {
    dispatch({
      type: appActions.CHANGE_PAGE,
      payload: 3,
    });
    dispatch({
      type: appActions.CHANGE_ANSWER,
      payload: {
        name: tempAnswer,
      },
    });
  };

  return (
    <div className="row flex-column h-100">
      <div className="col-auto">
        <Logo
          style="animate__animated animate__fadeIn"
          icon="logo_main.png"
          width="200px"
        />
      </div>
      <div className="col">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col">
            <div className="row">
              <div className="col-auto">
                <h4 className="text-yellow animate__animated animate__fadeInUp">
                  1
                </h4>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col-auto">
                    <h4 className="text-yellow animate__animated animate__fadeInUp">
                      Tên của bạn là gì nhỉ?
                    </h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control border-top-0 border-start-0 border-end-0 px-0 fs-2 animate__animated animate__fadeInUp"
                      value={tempAnswer}
                      placeholder="Trả lời vào đây nhé..."
                      onChange={(event) =>
                        handleAnswerChanged(event.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="row mt-5 justify-content-end">
                  <div className="col-auto ">
                    <button
                      className="btn rounded-0 btn-lg btn-yellow animate__animated animate__fadeIn animate__delay-1s"
                      onClick={handleButtonClicked}
                      disabled={!tempAnswer}
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
