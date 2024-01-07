/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { useState } from "react";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Pagenation from "./Pagenation";

function Table({ tableOptions, tableTitle }) {
  const [setSelectedRows] = useState([]);

  const [allChecked, setAllChecked] = useState(false);

  return (
    <div className="app table">
      <div className="tableHeader">
        <div className="tableTitle">{tableTitle}</div>
        <div className="tableButtons">
          {tableOptions.dynamicButtons.map((item, index) => {
            return (
              <Button
                key={index}
                className="tableDynamicButton"
                onClick={item?.onClick}
                label={item?.labelName}
              />
            );
          })}
        </div>
      </div>
      <div className="tableBody">
        <div className="columnTitle">
          {tableOptions.column.map((item, index) => {
            return (
              <div
                key={index}
                className="columnSpan "
                onClick={() => {
                  console.log("sort label", item.label);
                }}
              >
                <span className="material-symbols-outlined">swap_vert</span>
                {item.label}
              </div>
            );
          })}
        </div>
        <div className="rows">
          {tableOptions.data.map((row, rowIndex) => (
            <div
              onClick={() => {
                tableOptions?.getSelectionValue(row);
              }}
              key={rowIndex}
              className="row-1"
            >
              <span>
                <CheckBox
                  row={row}
                  setSelectedRows={setSelectedRows}
                  allChecked={allChecked}
                />
              </span>
              {tableOptions.column.map((col, colIndex) => (
                <span key={colIndex} className="cell">
                  {row[col.field]}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="tableFooter">
        <Pagenation tableOptions={tableOptions} />
      </div>
    </div>
  );
}

export default Table;
