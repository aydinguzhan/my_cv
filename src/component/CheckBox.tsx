import { useState } from "react";
interface ICheckBox {
  row: any;
  setSelectedRows: any;
  allChecked: any;

}
export const CheckBox = ({ row, setSelectedRows, allChecked }: ICheckBox) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <input
      type="checkbox"
      name={row.name}
      value={checked as any}
      onClick={(e: any) => {
        setChecked(!checked);
        console.log(e.target.value)
      }}
      checked={checked}
    />
  );
};

export default CheckBox;
