import React, { useState } from "react";
import { NavbarComponenet } from "./component/NavbarComponenet";
import { navbarList } from "./dummyData/dummyData";
import { MAIN_PAGENATION } from "./enums/mainPageRouter";
import {
  MainPage,
  SearchPage,
  FormCreatedPages,
  IletisimPage,
} from "./pages/ExportFiles";

import "./App.css";
function App() {
  const [page, setPage] = useState<string>(MAIN_PAGENATION.ANASAYFA);

  return (
    <div className="App">
      <NavbarComponenet setPage={setPage} navbarList={navbarList} />

      <div className="container-fluid">
        {page === MAIN_PAGENATION.ANASAYFA && <MainPage setPage={setPage} />}
        {page === MAIN_PAGENATION.FORM_OLUSTUR && (
          <FormCreatedPages setPage={setPage} />
        )}
        {page === MAIN_PAGENATION.ARA && <SearchPage setPage={setPage} />}
        {page === MAIN_PAGENATION.ILETISIM && <IletisimPage />}
      </div>
    </div>
  );
}

export default App;
