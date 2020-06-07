import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

const CheckboxComponent = (props) => {
  const { checked, handleChange, color } = props;

  const useStyles = makeStyles({
    root: {
      padding: 0,
    },
  });
  const classes = useStyles();

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      className={classes.root}
      color={color}
    />
  );
};

export default CheckboxComponent;
