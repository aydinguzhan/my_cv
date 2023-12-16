import * as React from "react";
export interface ICustomParagraphProps {
  title: string;
  subText: string;
}

export default function CustomParagraph({
  title,
  subText,
}: ICustomParagraphProps | any) {
  return (
    <div
      className="container bg-none my-4 p-4  "
      style={{ border: "1px solid white", borderRadius: "1rem" }}
    >
      {title && (
        <h4
          className="fot-semibold"
          style={{
            color: "white",
            borderBottom: "1px solid white",
            lineHeight: "2em",
            fontWeight: "bolder",
            textTransform: "capitalize",
          }}
        >
          {title}
        </h4>
      )}
      <p style={{ color: "white" }}>{subText}</p>
    </div>
  );
}
