import { useContext } from "react";
import { appContext } from "./context/appContext";
import Navigator from "./Navigator";
import pageIndex from "./pages/pageIndex";

function App() {
  const {
    value: { currentPage, navigatorVisible },
  } = useContext(appContext);

  return (
    <div
      className="container-fluid vh-100 py-5 overflow-auto"
      style={{
        backgroundImage: "url('bg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflowX: "hidden",
      }}
    >
      <div className="container h-100">
        <div className="row flex-column flex-nowrap h-100">
          <div className="col">{pageIndex[currentPage]}</div>
          {navigatorVisible && (
            <div className="col-auto">
              <Navigator style="my-4" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
