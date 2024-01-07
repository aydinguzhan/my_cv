import { useState } from "react";
export const CheckBox = (row, setSelectedRows, allChecked) => {
  const [checked, setChecked] = useState(true);

  return (
    <input
      type="checkbox"
      name={row.name}
      value={true}
      onClick={() => {
        setChecked(!checked);
      }}
      checked={allChecked}
    />
  );
};

export default CheckBox;
