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
import Table from "./component/Table";
function App() {
  const [page, setPage] = useState<string>(MAIN_PAGENATION.ANASAYFA);
  const [selectRow, setSelectRow] = useState({});
  const tableOptions = {
    id: "table",
    selection: " single",
    defaultButtonGourup: true,
    searchButton: true,
    getSelectionValue: setSelectRow,
    dynamicButtons: [
      {
        onClick: () => window.print(),
        labelName: <span className="material-symbols-outlined">print</span>,
      },
      {
        onClick: () => console.log("merhaba"),
        labelName: (
          <span className="material-symbols-outlined">content_copy</span>
        ),
      },
    ],
    column: [
      {
        field: "name",
        label: "Ad",
        filteredValue: "name",
        short: true,
      },
      {
        field: "surName",
        label: "soyad",
        filteredValue: "surName",
        short: true,
      },
      {
        field: "status",
        label: "pozisyon",
        filteredValue: "status",
        short: true,
      },
      {
        field: "age",
        label: "yaş",
        filteredValue: "age",
        short: true,
      },
    ],
    data: [
      {
        id: Math.random(),
        name: "Oğuzhan",
        surName: "Aydın",
        status: "developer",
        age: "29",
      },
      {
        id: Math.random(),
        name: "Güler",
        surName: "Aydın",
        status: "developer",
        age: "26",
      },
      {
        id: Math.random(),
        name: "İrem",
        surName: "Aydın",
        status: "Enginner",
        age: "33",
      },
      {
        id: Math.random(),
        name: "Sunay",
        surName: "Aydın",
        status: "banker",
        age: "63",
      },
      {
        id: Math.random(),
        name: "Ali",
        surName: "Aydın",
        status: "engineer",
        age: "64",
      },
    ],
  };
  return (
    <>
      <NavbarComponenet setPage={setPage} navbarList={navbarList} />
      <div className="App">
        <div className="container-fluid pb-4 ">
          {page === MAIN_PAGENATION.ANASAYFA && <MainPage setPage={setPage} />}
          {page === MAIN_PAGENATION.FORM_OLUSTUR && (
            <FormCreatedPages setPage={setPage} />
          )}
          {page === MAIN_PAGENATION.INPUT_OLUSTUR && (
            <SearchPage setPage={setPage} />
          )}
          {page === MAIN_PAGENATION.ILETISIM && <IletisimPage />}
          {page === MAIN_PAGENATION.ADVENCE_JS && <AdvenceJs />}
          {page === MAIN_PAGENATION.TABLE && (
            <div className=" pt-3 px-4">
              <Table tableTitle={"Table Title"} tableOptions={tableOptions} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
