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
import { SelectList } from "./pages/SelectList";
import { Dragdrop } from "./pages/Dragdrop";
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
        labelName: <span className="material-symbols-outlined ">print</span>,
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
  const dataList = [
    {
      id: Math.random(),
      ad: "mark",
      soyad: "lisbon",
      kimliNo: "12345678901"

    },
    {
      id: Math.random(),
      ad: "Nevzat",
      soyad: "Kasım",
      kimliNo: "12345678901"

    },
    {
      id: Math.random(),
      ad: "fahri",
      soyad: "Yılmaz",
      kimliNo: "12345678901"

    }
  ]
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

            <Table tableTitle={"Table Title"} tableOptions={tableOptions} />

          )}
          {page === MAIN_PAGENATION.SELECT_LIST && <SelectList dataList={dataList} setPage={setPage} />}
          {page === MAIN_PAGENATION.DRAG_DROP && <Dragdrop />}
        </div>

      </div>
    </>
  );
}

export default App;
