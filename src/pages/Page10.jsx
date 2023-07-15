import { Fragment, useContext, useState } from "react";
import { appContext } from "../context/appContext";
import request from "../helper/request";

export default function Page10() {
  const {
    value: { data },
  } = useContext(appContext);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isGoing, setIsGoing] = useState(false);
  const [hasError, setHasError] = useState(null);

  const handleButtonClicked = () => {
    const answerKeys = Object.keys(data);

    if (answerKeys.length === 0) {
      setHasError(
        "Ohh, hình như bạn chưa trả lời câu hỏi nào cả, hãy cho chúng tôi biết những ứng cử viên xứng đáng nhé 🥰"
      );
      return;
    }

    const isKeysValid = [
      "name",
      "team",
      "bestMembers",
      "theRookies",
      "bestEvents",
      "perfectDuos",
    ].reduce(
      (isValid, validKey) => isValid && answerKeys.includes(validKey),
      true
    );
    if (!isKeysValid) {
      setHasError(
        "Bạn chưa trả lời hết các câu hỏi. Hãy quay lại đây khi bạn đã hoàn thành nhé 😊"
      );
      return;
    }

    console.log(data);

    setHasError(null);
    data.isGoing = isGoing;

    // request
    //   .post("answers.json", data)
    //   .then(() => setIsSubmitted(true))
    //   .catch((reason) => alert(`Lỗi, hãy thử lại`));

    alert(JSON.stringify(data));
    setIsSubmitted(true);
  };

  return (
    <div className="row justify-content-center align-items-center h-100">
      <div className="col">
        <div className="row align-items-center">
          <div className="col-md-6 col-12 mb-5">
            <img
              src="main.png"
              className="img-fluid animate__animated animate__fadeIn"
            />
          </div>
          <div className="col-md-6 col-12">
            <div className="row g-3 justify-content-md-start justify-content-center">
              <div className="col-md col-auto">
                <h4 className="text-yellow animate__animated animate__fadeIn">
                  &ldquo; Cảm ơn bạn đã tham gia bình chọn! &rdquo;
                </h4>
                <h5 className="text-yellow opacity-50 mt-4 animate__animated animate__fadeIn">
                  Kết quả của Round 1 sẽ sớm được công bố trong group của Hugo
                  English Club.
                </h5>
                {/* <h4 className="text-yellow-light mt-4 animate__animated animate__fadeIn animate__slow">
                  Bạn sẽ tham gia sự kiện tổng kết cuối năm Hugo Award 2023 cùng
                  Hugo chứ?
                </h4>
                <div className="row mt-3 animate__animated animate__fadeIn animate__slow">
                  <div className="col-auto">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="isGoing"
                        checked={isGoing}
                        onClick={() => setIsGoing(!isGoing)}
                      />
                      <label
                        class="form-check-label text-yellow-light h5"
                        for="isGoing"
                      >
                        Tất nhiên rồi
                      </label>
                    </div>
                  </div>
                </div> */}

                {/* {isGoing && (
                  <Fragment>
                    <div className="row mt-3 g-2 animate__animated animate__fadeInUp">
                      <div className="col-auto">
                        <i class="bi-alarm text-yellow"></i>
                      </div>
                      <div className="col">
                        <h5 className="text-yellow-light">
                          Thời gian: 18h00, Chủ Nhật, ngày 31 tháng 7 năm 2022.
                        </h5>
                      </div>
                    </div>

                    <div className="row g-2 animate__animated animate__fadeInUp animate__slow">
                      <div className="col-auto">
                        <i class="bi-geo-alt text-yellow"></i>
                      </div>
                      <div className="col">
                        <h5 className="text-yellow-light">
                          Địa điểm: Lord Coffee, 104 Ngô Văn Sở.
                        </h5>
                      </div>
                    </div>
                  </Fragment>
                )} */}

                <div className="row justify-content-md-start justify-content-center mt-5">
                  <div className="col-auto">
                    <button
                      className="btn rounded-0 btn-lg btn-yellow animate__animated animate__fadeInUp"
                      onClick={handleButtonClicked}
                      disabled={isSubmitted}
                    >
                      Submit
                    </button>
                  </div>
                </div>

                {hasError && (
                  <div className="row justify-content-md-start justify-content-center mt-3 animate__animated animate__fadeIn">
                    <div className="col-auto">
                      <h5 className="text-yellow text-opacity-50">
                        {hasError}
                      </h5>
                    </div>
                  </div>
                )}
                {isSubmitted && (
                  <div className="row justify-content-md-start justify-content-center mt-3 animate__animated animate__fadeIn">
                    <div className="col-auto">
                      <h5 className="text-yellow text-opacity-50">
                        Câu trả lời của bạn đã được lưu.
                      </h5>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
