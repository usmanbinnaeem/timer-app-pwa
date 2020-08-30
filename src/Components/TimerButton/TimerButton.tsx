import React from "react";
import PropTypes from "prop-types";
import "./TimerButton.css";
import { Button } from "@material-ui/core";

type Iprops = {
  buttonAction: any;
  buttonValue: string;
  className: string;
};

const TimerButton = ({ buttonAction, buttonValue }: Iprops) => (
  <div className="button-container" onClick={() => buttonAction()}>
    <Button color="primary" className="button-value">
      {buttonValue}
    </Button>
  </div>
);

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
};

export default TimerButton;
