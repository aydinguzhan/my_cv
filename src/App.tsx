import React, { useState } from "react";
import { NavbarComponenet } from "./component/NavbarComponenet";
import { navbarList } from "./dummyData/dummyData";
import { MAIN_PAGENATION } from "./enums/mainPageRouter";
import {
  MainPage,
  SearchPage,
  FormCreatedPages,
  IletisimPage,
  AdvenceJs,
} from "./pages/ExportFiles";
import "./App.css";
function App() {
  const [page, setPage] = useState<string>(MAIN_PAGENATION.ANASAYFA);

  return (
    <>
      <NavbarComponenet setPage={setPage} navbarList={navbarList} />
      <div className="App">
        <div className="container-fluid">
          {page === MAIN_PAGENATION.ANASAYFA && <MainPage setPage={setPage} />}
          {page === MAIN_PAGENATION.FORM_OLUSTUR && (
            <FormCreatedPages setPage={setPage} />
          )}
          {page === MAIN_PAGENATION.INPUT_OLUSTUR && (
            <SearchPage setPage={setPage} />
          )}
          {page === MAIN_PAGENATION.ILETISIM && <IletisimPage />}
          {page === MAIN_PAGENATION.ADVENCE_JS && <AdvenceJs />}
        </div>
      </div>
    </>
  );
}

export default App;
