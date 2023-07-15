import { useContext, useState } from "react";
import DropStars from "../components/DropStars";
import Logo from "../components/Logo";
import MultipleChoices from "../components/MultipleChoices";
import appActions from "../context/appActions";
import { appContext } from "../context/appContext";
import { teams } from "../services/posters";

export default function Page4() {
  const {
    value: { data },
    dispatch,
  } = useContext(appContext);

  const choices = [
    {
      value: "Banana",
      theme: "yellow",
      slogan: "We Come In Bunch",
    },
    {
      value: "Heroes Company",
      theme: "blue",
      slogan: "Stronger Together",
    },
    {
      value: "Power Rangers",
      theme: "red",
      slogan: "Justice For All",
    },
    {
      value: "Niffler",
      theme: "purple",
      slogan: "Friends Forever",
    },
  ];
  const [currentChoice, setCurrentChoice] = useState(data.team);
  const handleChoiceChanged = (choices) => {
    setCurrentChoice(choices[0]);
  };

  const handleButtonClicked = () => {
    dispatch({
      type: appActions.CHANGE_PAGE,
      payload: 4,
    });

    dispatch({
      type: appActions.CHANGE_ANSWER,
      payload: {
        team: currentChoice,
      },
    });
  };

  return (
    <div className="row flex-column justify-content-center align-items-center h-100">
      <div className="col-auto">
        <Logo style="animate__animated animate__fadeIn" />
      </div>
      <div className="col">
        <div className="row flex-column justify-content-center h-100">
          <div className="col">
            <div className="row h-100">
              <div className="col-lg-4 col-md-6 col-10">
                <div className="row flex-column h-100">
                  <div className="col-auto">
                    <div className="row">
                      <div className="col-auto">
                        <h4 className="text-yellow animate__animated animate__fadeInUp">
                          2
                        </h4>
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col-auto">
                            <h4 className="text-yellow animate__animated animate__fadeInUp">
                              Bạn đến từ?
                            </h4>
                          </div>
                        </div>

                        <MultipleChoices
                          choices={choices}
                          onChoicesChange={handleChoiceChanged}
                          currentChoices={currentChoice ? [currentChoice] : []}
                          maxChoices={1}
                        />

                        <div className="row mt-3 justify-content-end">
                          <div className="col-auto">
                            <button
                              className="btn rounded-0 btn-lg btn-yellow animate__animated animate__fadeIn animate__delay-1s"
                              onClick={handleButtonClicked}
                              disabled={!currentChoice}
                            >
                              OK
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row flex-column justify-content-end h-100">
                      <div className="col-auto">
                        {currentChoice && (
                          <h1
                            className={`text-${currentChoice.theme} fw-bold mb-0 animate__animated animate__fadeIn`}
                            style={{ fontSize: "4.5rem" }}
                          >
                            {currentChoice.slogan}
                          </h1>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-12">
                <div className="row h-100">
                  <div className="col">
                    <div className="row flex-column h-100">
                      <div className="col">
                        <DropStars
                          style="h-100 animate__animated animate__fadeIn"
                          theme={currentChoice?.theme}
                          direction="top"
                        >
                          <div className="row flex-column justify-content-center align-items-center h-100">
                            <div className="col-auto">
                              {currentChoice && (
                                <img
                                  src={teams[currentChoice.value]}
                                  width="350px"
                                  className={`img-fluid animate__animated animate__fadeInDown`}
                                />
                              )}
                            </div>
                          </div>
                        </DropStars>
                      </div>
                    </div>
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
