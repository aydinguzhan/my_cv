import React, { useState } from "react";
import { PageButton } from "../component/PageButton";
import { goBack } from "../helper/buttonGroup";
import Nav from "react-bootstrap/Nav";

export interface ISearchPage {
  setPage: any;
}

export function SearchPage({ setPage }: ISearchPage) {
  const buttonArray = goBack(setPage);
  const [visible, setVisible] = useState<string>("hidden");

  const tabTitleArray = [
    {
      title: "TAB-1",
      _onClick: () => {},
    },
    {
      title: "TAB-2",
      _onClick: () => {},
    },
  ];

  const tabBodyArray = [
    {
      visible: visible,
      bodyArea: () => {
        return <div>BODY1</div>;
      },
    },
    {
      visible: "hidden",
      bodyArea: () => {
        return <div>BODY2</div>;
      },
    },
  ];
  const tabBarStyle: any = {
    tabHeader: {
      display: "flex",
      gap: "5px",
      witdh: "100%",
      border: "1px solid white",
    },
    tabIndex: {
      padding: "1px",
      border: "1px solid red",
    },
  };

  return (
    <>
      <h1>SEARCH PAGE</h1>
      <Nav variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link eventKey="link-1">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <PageButton buttonArray={buttonArray} />
    </>
  );
}
