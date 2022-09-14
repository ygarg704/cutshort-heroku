import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  spacing: {
    marginTop: "3%",
  },
  title: {
    fontSize: "0.9rem",
    fontFamily: "Inter",
    textAlign: "center",
  },
  subTitle: {
    fontFamily: "Inter",
    fontSize: "0.8rem",
    color: "gray",
  },
  checkIcon: {
    color: "#664de5",
    transform: "scale(300%)",
    marginTop: "10%",
  },
}));

export { useStyle };
