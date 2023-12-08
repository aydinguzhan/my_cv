import Button from "react-bootstrap/Button";

export interface IButtonComponent {
  label: any;
  _onClick: any;
}

export function ButtonComponent({ _onClick, label }: IButtonComponent) {
  return (
    <div>
      <Button variant="outline-light" onClick={_onClick}>
        {label}
      </Button>
    </div>
  );
}
