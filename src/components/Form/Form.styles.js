import styled from "@emotion/styled";

export const ButtonsContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export const SubmitButton = styled("button")({
  minWidth: "130px",
  marginTop: "10px",
  padding: "9px 15px",
  border: "1px solid #7ba818",
  backgroundColor: "#7ba818",
  borderRadius: "7px",
  color: "#fff",
  fontSize: "16px",
  lineHeight: "20px",
  cursor: "pointer",
});

export const ResetButton = styled("button")({
  minWidth: "130px",
  marginTop: "10px",
  padding: "9px 15px",
  border: "1px solid #059eda",
  backgroundColor: "#059eda",
  borderRadius: "7px",
  color: "#fff",
  fontSize: "16px",
  lineHeight: "20px",
  cursor: "pointer",
});
