import React, { useState } from "react";
import "./InputBox.css";
import { TextField, Button } from "@material-ui/core";
import { calculator } from "../../utils";

const InputBox = ({ setResponse }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="input">
      <h1>Input Your String</h1>

      <TextField
        variant="outlined"
        fullWidth
        multiline
        value={inputValue}
        rows={10}
        style={{ width: 600 }}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <div className="button">
        <Button
          type="button"
          style={{
            width: 200,
            backgroundColor: "aquamarine",
            textAlign: "center",
            marginTop: 10,
          }}
          onClick={async (e) => {
            const lettersArr = calculator(inputValue);
            setResponse(lettersArr);
          }}
        >
          Enter
        </Button>

        <Button
          type="button"
          style={{
            width: 200,
            backgroundColor: "aquamarine",
            textAlign: "center",
            marginTop: 10,
            marginLeft: 10,
          }}
          onClick={() => {
            setInputValue("");
          }}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};
export default InputBox;
