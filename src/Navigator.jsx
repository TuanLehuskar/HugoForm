import { useContext } from "react";
import appActions from "./context/appActions";
import { appContext } from "./context/appContext";
import pageIndexes from "./pages/pageIndex";

export default function Navigator({ style }) {
  const {
    value: { currentPage },
    dispatch,
  } = useContext(appContext);

  const handlePageClicked = (index) =>
    dispatch({
      type: appActions.CHANGE_PAGE,
      payload: index,
    });

  const pageItems = [];
  const numPages = pageIndexes.length;
  for (let i = 0; i < numPages; i++) {
    pageItems.push(
      <li className={`page-item ${i === currentPage && "active"}`}>
        <div className="page-link _cursor-pointer" onClick={() => handlePageClicked(i)}>
          {i + 1}
        </div>
      </li>
    );
  }

  return (
    <div className={`row justify-content-center ${style} animate__animated animate__fadeIn`}>
      <div className="col-auto">
        <nav>
          <ul className="pagination mb-0">
            <li className="page-item">
              <div className={`page-link _cursor-pointer ${currentPage === 0 && "disabled"}`} onClick={() => handlePageClicked(currentPage - 1)}>
                <i class="bi-chevron-left"></i>
              </div>
            </li>

            {pageItems}

            <li className="page-item">
              <div className={`page-link _cursor-pointer ${currentPage === numPages - 1 && "disabled"}`} onClick={() => handlePageClicked(currentPage + 1)}>
                <i class="bi-chevron-right"></i>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
