import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyToClipboard from "react-copy-to-clipboard";
import Button from "react-bootstrap/Button";
export interface ICreaterCode {
  codeString: string;
}
const isCopyController = (isCopy: boolean) => {
  if (isCopy) {
    return (
      <span className="font-semibold flex gap-2">
        <i className="pi pi-spin pi-spinner"></i>
      </span>
    );
  } else {
    return <i className="pi pi-copy"></i>;
  }
};
export function CreaterCode({ codeString }: ICreaterCode) {
  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = () => {
    setIsCopy(true);
    setTimeout(() => setIsCopy(false), 1500);
  };

  return (
    <div
      style={{
        border: "1px solid white",
        borderRadius: "1em",
        background: "#1e1e1e",
      }}
    >
      <CopyToClipboard text={codeString} onCopy={handleCopy}>
        <div
          style={{
            backgroundColor: "#1e1e1e",
            borderRadius: "1em 1em 0px 0px  ",
            borderBottom: "1px solid white",
            display: "flex",
            justifyContent: "space-between",
            padding: ".6em",
          }}
        >
          <h4 style={{ color: "white" }}>Form</h4>
          <Button
            style={{ background: "#374151" }}
            variant="outline-light"
            onClick={handleCopy}
          >
            {isCopyController(isCopy)}
          </Button>
        </div>
      </CopyToClipboard>
      <SyntaxHighlighter
        customStyle={{ scrollbarColor: "green" }}
        language="javascript"
        style={vscDarkPlus}
      >
        {codeString.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
