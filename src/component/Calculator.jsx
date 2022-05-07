import React, { useState } from "react";
import "./Calculator.css";
import DataTable from "./DataTable/DataTable";
import InputBox from "./InputBox/InputBox";

function Calculator() {
  const [response, setResponse] = useState([]);
  return (
    <div className="calculator">
      <InputBox setResponse={setResponse} />
      <DataTable response={response} />
    </div>
  );
}

export default Calculator;
