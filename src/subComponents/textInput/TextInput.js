import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const TextFieldComponent = (props) => {
  // PROPS
  const { label, customContainerClass, customFieldClass } = props;

  const useStyles = makeStyles(() => ({
    root: {
      "& > *": {
        width: "20ch",
      },
    },
  }));
  const classes = useStyles();

  return (
    <form className={(classes.root, customContainerClass)} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        className={customFieldClass}
      />
    </form>
  );
};

export default TextFieldComponent;
