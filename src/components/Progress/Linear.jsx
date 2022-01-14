import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#00000055",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // minWidth: "100vw",
    // minHeight: "100vh",
    zIndex: "9999999999999",
  },
}));

export default function LinearIndeterminate({ aberto }) {
  const classes = useStyles();

  return (
    aberto && (
      <div className={classes.root}>
        <LinearProgress
          color="primary"
          style={{
            height: "5px",
          }}
        />
      </div>
    )
  );
}
