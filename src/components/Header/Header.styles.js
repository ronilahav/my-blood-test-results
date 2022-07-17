import styled from "@emotion/styled";

export const HeaderContainer = styled("header")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
  padding: "28px 40px 40px",
  backgroundColor: "rgba(0, 0, 0, 0.03)",
  "@media screen and (max-width: 767px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});

export const Title = styled("h1")({
  color: "#f72246",
  fontSize: "50px",
  lineHeight: "56px",
  letterSpacing: "-1px",
  margin: "10px 0 20px",
  textAlign: "center",
});

export const Image = styled("img")({
  width: "80px",
});
