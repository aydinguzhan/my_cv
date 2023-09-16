import * as React from "react";
import { PageButton } from "../component/PageButton";
import { MAIN_PAGENATION } from "../enums/mainPageRouter";
export interface ISearchPage {
  setPage: any;
}

export function SearchPage({ setPage }: ISearchPage) {
  const buttonArray = [
    {
      label: "Geri",
      icon: "pi pi-arrow-left",
      _onClick: () => {
        setPage(MAIN_PAGENATION.ANASAYFA);
      },
    },
  ];

  return (
    <>
      <h1>SEARCH PAGE</h1>
      <PageButton buttonArray={buttonArray} />
    </>
  );
}
