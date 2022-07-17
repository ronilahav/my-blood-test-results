import styled from "@emotion/styled";

export const AppContainer = styled("div")({
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "940px",
  "@media screen and (max-width: 991px)": {
    maxWidth: "728px",
  },
  "@media screen and (max-width: 767px)": {
    padding: "0 20px",
  },
  "@media screen and (max-width: 479px)": {
    padding: "0 10px",
  },
});
