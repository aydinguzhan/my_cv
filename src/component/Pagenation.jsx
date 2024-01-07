import { useState } from "react";
// eslint-disable-next-line react/prop-types
function Pagenation({ tableOptions }) {
  const [activePage, setActivePage] = useState(0);
  const nextPage = () => {
    // eslint-disable-next-line react/prop-types
    if (activePage + 2 <= tableOptions?.data?.length) {
      setActivePage(() => activePage + 1);
    } else {
      setActivePage(0);
    }
  };
  const backPage = () => {
    if (activePage <= 0) {
      setActivePage(4);
    } else {
      setActivePage(() => activePage - 1);
    }
  };
  return (
    <div className="tableFooter">
      <div
        className="tablePagenation"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="material-symbols-outlined" onClick={backPage}>
          arrow_back_ios
        </span>
        {
          // eslint-disable-next-line react/prop-types
          tableOptions?.data?.map((item, index) => {
            return (
              <span key={index} className="pagenation">
                <span
                  style={{
                    textAlign: "center",
                  }}
                  className={`pageNumber  ${
                    activePage === index ? "selectPage" : ""
                  }`}
                  onClick={() => {
                    setActivePage(index);
                    console.log("index", index);
                  }}
                >
                  {index + 1}
                </span>
              </span>
            );
          })
        }
        <span className="material-symbols-outlined" onClick={nextPage}>
          arrow_forward_ios
        </span>{" "}
      </div>
    </div>
  );
}

export default Pagenation;
