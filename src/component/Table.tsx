/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { useState } from "react";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Pagenation from "./Pagenation";

interface ITableProp {
  tableOptions: any;
  tableTitle: any;
}

function Table({ tableOptions, tableTitle }: ITableProp) {
  const [setSelectedRows] = useState([]);

  const [allChecked, setAllChecked] = useState<boolean>(false);

  return (
    <div className="app table my-4 ">
      <div className="tableHeader">

        <div className="tableTitle">



          {tableTitle}


        </div>
        <div className="tableButtons">

          {tableOptions.dynamicButtons.map((item: any, index: any) => {
            return (
              <Button
                key={index}

                onClick={item?.onClick}
                label={item?.labelName}
              />
            );
          })}
        </div>
      </div>
      <div className="tableBody">
        <div className="columnTitle">
          <div>
            <input
              type="checkbox"
              name={"all"}
              value={allChecked as any}
              onClick={(e: any) => {
                setAllChecked(!allChecked);
                console.log(e.target.value)
              }}
              checked={allChecked}
            />
          </div>
          {tableOptions.column.map((item: any, index: any) => {
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
          {tableOptions.data.map((row: any, rowIndex: any) => (
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
              {tableOptions.column.map((col: any, colIndex: any) => (
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
