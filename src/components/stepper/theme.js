import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  root: {
    "& .Mui-active .MuiStepIcon-root": { color: "#664de5" },
    "& .Mui-completed .MuiStepIcon-root": { color: "#664de5" },
    "& .Mui-disabled .MuiStepIcon-root": {
      color: "gray",
    },
    "& .MuiStepConnector-line": {
      borderTopWidth: "4px",
    },
    "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
      borderColor: "black",
    },
    "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
      borderColor: "black",
    },
  },
}));

export { useStyle };
