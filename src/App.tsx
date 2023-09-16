import React, { useState } from "react";
import { NavbarComponenet } from "./component/NavbarComponenet";
import { navbarList } from "./dummyData/dummyData";
import { MAIN_PAGENATION } from "./enums/mainPageRouter";
import {MainPage , SearchPage , FormCreatedPages} from './pages/ExportFiles'
import Container from 'react-bootstrap/Container';
import './App.css'
function App() {
  const [page, setPage] = useState<string>(MAIN_PAGENATION.ANASAYFA);
  return (
    <div className="App">
      <NavbarComponenet setPage={setPage} navbarList={navbarList} />
     <Container fluid="md">

      {page === MAIN_PAGENATION.ANASAYFA && <MainPage/>}
      {page === MAIN_PAGENATION.FORM_OLUSTUR && <FormCreatedPages/>}
      {page === MAIN_PAGENATION.ARA && <SearchPage/>}
     
     </Container>
    </div>
  );
}

export default App;
