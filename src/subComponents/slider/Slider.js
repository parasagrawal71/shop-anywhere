import React from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";

const SliderComponent = (props) => {
  const { rangeValue, handleRangeValue, sliderWidth } = props;

  const useStyles = makeStyles({
    root: {
      width: sliderWidth,
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider value={rangeValue} onChange={handleRangeValue} />
    </div>
  );
};

export default SliderComponent;
