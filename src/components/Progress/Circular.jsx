import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import useLoadingCircular from "../../hooks/useLoadingCircular";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function SimpleBackdrop() {
  const classes = useStyles();
  const { aberto } = useLoadingCircular();

  return (
    aberto && (
      <Backdrop className={classes.backdrop} open={aberto}>
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  );
}
