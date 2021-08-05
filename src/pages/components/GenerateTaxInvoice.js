import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Alert, Button } from "@themesberg/react-bootstrap";

export const GenerateTaxInvoice = (props) => {
  return (
    <>
      <Alert variant="success">Invoice has been generated sucessfully.</Alert>
      <Button
        variant="secondary"
        className="m-1"
        onClick={() => props.viewInvoice()}
      >
        View
      </Button>
    </>
  );
};
