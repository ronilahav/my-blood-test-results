import styled from "@emotion/styled";

export const InputItemContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  marginBottom: "10px",
});

export const Label = styled("label")({
  fontSize: "18px",
  lineHeight: "24px",
  fontWeight: "400",
});

export const Input = styled("input")({
  width: "100%",
  height: "38px",
  padding: "8px 12px",
  border: "1px solid #ccc",
  borderRadius: "7px",
});
