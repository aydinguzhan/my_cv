import Button from "react-bootstrap/Button";
import 'primeicons/primeicons.css';


export interface IButtonComponent {
  buttonArray: any;
}

export function PageButton({ buttonArray }: IButtonComponent) {
  return (
    <div>
      {buttonArray.map((item: any) => {
        return (
          <Button variant="outline-light" className="mx-1 my-3 " onClick={item._onClick} type={item?.type}>
            <div>
            <span className="mx-1"><i className={item.icon} style={{color: "white"}}></i></span>
            <span  className="mx-1">{item.label}</span>
            </div>
          </Button>
        );
      })}
    </div>
  );
}
