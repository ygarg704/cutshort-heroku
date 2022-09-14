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
  formBasic: {
    marginTop: "2rem",
  },
  formOne: {
    width: "20rem",
    fontFamily: "Inter",
  },
  labelText: {
    fontSize: "0.7rem",
    fontFamily: "Inter",
  },
  actionArea: {
    "&:hover": {
      color: "#664de5",
    },
  },
}));

export { useStyle };
