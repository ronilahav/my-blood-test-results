import { useState, useEffect } from "react";
import { getDataset } from "../../requests";
import { getTestAnalyze, initFuse } from "../../logic";
import Form from "../Form/Form";
import { MainContainer, Title, ItalicText, ResultText } from "./Main.styles";

const Main = () => {
  const [dataset, setDataset] = useState([]);
  const [testAnalyze, setTestAnalyze] = useState("");

  useEffect(() => {
    getDataset().then((res) => setDataset(res));
  }, []);

  useEffect(() => {
    initFuse(dataset);
  }, [dataset]);

  const onSubmit = ({ testName, testResult }) => {
    setTestAnalyze(getTestAnalyze({ testName, testResult }));
  };

  const onResetForm = () => {
    setTestAnalyze("");
  };

  return (
    <MainContainer className="app-main">
      <Title>Enter Test Details:</Title>
      <ItalicText>*required</ItalicText>
      <Form onSubmit={onSubmit} onResetForm={onResetForm} />
      {testAnalyze && <ResultText>Result: {testAnalyze}</ResultText>}
    </MainContainer>
  );
};

export default Main;
