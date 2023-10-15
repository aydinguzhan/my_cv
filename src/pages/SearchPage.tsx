import * as React from "react";
import { PageButton } from "../component/PageButton";
import { goBack } from "../helper/buttonGroup";
export interface ISearchPage {
  setPage: any;
}

export function SearchPage({ setPage }: ISearchPage) {

  const buttonArray = goBack(setPage)


  return (
    <>
      <h1>SEARCH PAGE</h1>
      <PageButton buttonArray={buttonArray} />
    </>
  );
}
