import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export interface ICardComponent {
  item: {
    title :string;
    subTitle : string,
    buttonTitle : string
  };
}

export function CardComponent({ item }: ICardComponent) {
  const [hover, setHover] = useState<any>({});
  const [hoverText, setHoverText] = useState<any>({});
  return (
    <Card className="col-sm-12 col-md-12 col-xl-3 text-white border border-white bg-transparent">
      <Card.Header>{item.title}</Card.Header>
      <Card.Body>
        <Card.Title className="h-25">{item.title}</Card.Title>
        <Card.Text className="h-40">{item.subTitle}</Card.Text>
        <Button
          style={hover}
          onMouseOver={() => {
            setHover({ background: "white", color: "purple" })
            setHoverText({color : "purple"})
          }}
          onMouseOut={() => {
            setHover({})
            setHoverText({})
          }}
          className="border border-white text-white"
          variant=""
        >
          <span style={hoverText}>{item.buttonTitle}</span>
        </Button>
      </Card.Body>
    </Card>
  );
}
