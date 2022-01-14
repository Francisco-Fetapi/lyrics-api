import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Alerta({ alert, fechar }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        open={alert.open}
        autoHideDuration={alert.tempo * 1000}
        onClose={fechar}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert onClose={fechar} severity={alert.status || "info"}>
          {alert.msg || null}
        </Alert>
      </Snackbar>
    </div>
  );
}
