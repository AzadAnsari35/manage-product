import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: 40,
  },
  filter: {
    padding: "40px 0px",
  },
  title: {
    paddingBottom: 20,
  },
  container: {
    alignItems: "flex-end",
  },
  errorMsg: {
    color: "#FF0000",
    position: "absolute",
  },
  input: {
    width: "100%",
  },
  btn: {
    paddingTop: 20,
    display: "flex",
    justifyContent: "flex-end",
  },
}));
