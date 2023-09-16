import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export interface ICardComponent {
  item: {
    title :string;
    subTitle : string,
    buttonTitle : string
    _onClick : any
    buttonRouterAdress : any;
  };
}

export function CardComponent({ item }: ICardComponent) {
  const [hover, setHover] = useState<any>({});
  const [hoverText, setHoverText] = useState<any>({});
  return (
    <Card  className="text-white border border-white bg-transparent col-12 col-xl-3 col-md-3 col-sm-12">
      <Card.Header>{item.title}</Card.Header>
      <Card.Body>
        <Card.Title className="">{item.title}</Card.Title>
        <Card.Text className="">{item.subTitle}</Card.Text>
       
      </Card.Body>
      <Button
          style={hover}
         onClickCapture={()=>{}}
          onMouseOver={() => {
            setHover({ background: "white", color: "purple opacity-75" })
            setHoverText({color : "purple"})
          }}
          onClick={item._onClick}

          onMouseOut={() => {
            setHover({})
            setHoverText({})
          }}
          className="border border-white text-white justify-content-end aling-item-end my-3"
          variant=""
        >
          <span style={hoverText}>{item.buttonTitle}</span>
        </Button>
    </Card>
  );
}
