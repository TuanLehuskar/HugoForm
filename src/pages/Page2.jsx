import { useContext, useEffect } from "react";
import appActions from "../context/appActions";
import { appContext } from "../context/appContext";
import { importHTMLText } from "../helper/text.helper";

export default function Page2() {
  const { dispatch } = useContext(appContext);

  const handleButtonClicked = () => {
    dispatch({
      type: appActions.CHANGE_PAGE,
      payload: 2,
    });
  };

  useEffect(() => {
    dispatch({
      type: appActions.CHANGE_NAVIGATOR_VISIBLE,
      payload: true,
    });
  }, []);

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
            <div className="row g-3">
              <div className="col">
                <h5
                  className="text-yellow animate__animated animate__fadeInRight"
                  dangerouslySetInnerHTML={{
                    __html: importHTMLText(
                      "🎉🎉 Hugo Award 2023 sắp tới sẽ là nơi để vinh danh những cá nhân, tập thể có những đóng góp đặc biệt, xuất sắc trong nhiệm kỳ vừa qua. Giải thưởng của chúng ta sẽ bao gồm những hạng mục chính sau đây:\n\n🎗Best Member\n🎗The Joker\n🎗The Perfect Duo\n🎗The Rookie\n-----------------------------------\n\n✅Sự kiện sẽ diễn ra từ ngày 16/7/2023 đến 28/7/2023, trong đó:\n\n👉Vòng 1 (16/7 đến 20/7)\nCác thành viên tham gia bình chọn 3 ứng cử viên yêu thích của mình tại mỗi hạng mục.\n\n👉Vòng 2 (22/7 đến 28/7)\nSau khi có kết quả từ vòng 1, ban tổ chức sẽ tiến hành chọn ra 5 ứng cử viên có số lượt bình chọn cao nhất ở vòng 1 và đáp ứng một số tiêu chí của BTC để bước đến đêm trao giải. Thành viên tiếp tục bình chọn các hạng mục để tìm ra các cá nhân xứng đáng nhất.\n\n👉Đêm trao giải Hugo Award 2023 sẽ diễn ra vào tối <strong>Chủ nhật</strong> ngày <strong>30/07/2023</strong>, đi cùng với đó sẽ là một sự kiện vô cùng đặc biệt sẽ được công bố trong thời gian tới. Rất mong được sự hưởng ứng nhiệt tình tham gia từ các thành viên.\n\n🕘Deadline vòng 1: 23:59 (20/7/2023)"
                    ),
                  }}
                ></h5>
                <div className="row mt-5">
                  <div className="col-auto">
                    <button
                      className="btn rounded-0 btn-lg btn-yellow animate__animated animate__fadeIn animate__delay-1s"
                      onClick={handleButtonClicked}
                    >
                      Got it!
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
