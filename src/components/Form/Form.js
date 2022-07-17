import InputItem from "../InputItem/InputItem";
import { ButtonsContainer, SubmitButton, ResetButton } from "./Form.styles";
import { useState } from "react";

const Form = ({ onSubmit, onResetForm }) => {
  const [testName, setTestName] = useState("");
  const [testResult, setTestResult] = useState("");

  const onSubmitHandler = () => {
    onSubmit({ testName, testResult });
  };

  const onResetFormHandler = () => {
    setTestName("");
    setTestResult("");
    onResetForm();
  };

  return (
    <>
      <InputItem
        label="Test Name"
        type="text"
        value={testName}
        onChange={setTestName}
      />
      <InputItem
        label="Test Result Value"
        type="number"
        min={0}
        value={testResult}
        onChange={setTestResult}
      />
      <ButtonsContainer>
        <SubmitButton onClick={onSubmitHandler}>Submit</SubmitButton>
        <ResetButton onClick={onResetFormHandler}>Reset Form</ResetButton>
      </ButtonsContainer>
    </>
  );
};

export default Form;
