import React, { useState, useEffect } from "react";
import TimerButton from "../TimerButton/TimerButton";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./Timer.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      minWidth: 276,
    },
    title: {
      fontSize: 32,
      marginLeft: 5,
    },
    pos: {
      marginBottom: 12,
    },
  })
);

const Timer = (): JSX.Element => {
  const classes = useStyles();

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const startTimer = () => {
    setIsOn(true);
  };
  useEffect(() => {
    let myInterval: any;
    if (isOn) {
      myInterval = setInterval(() => {
        if (seconds < 59) {
          setSeconds((seconds) => seconds + 1);
        } else if (minutes < 59) {
          setMinutes((minutes) => minutes + 1);
          setSeconds(0);
        } else {
          if (hours < 24) {
            setHours((hours) => hours + 1);
            setSeconds(0);
            setMinutes(0);
          } else {
            setHours(1);
            setSeconds(0);
            setMinutes(0);
          }
        }
      }, 1000);
    } else if (!isOn && seconds !== 0) {
      clearInterval(myInterval);
    }
    return () => clearInterval(myInterval);
  }, [isOn, seconds, minutes, hours]);

  const stopTimer = () => {
    setIsOn(false);
  };

  const resetTimer = () => {
    setSeconds(0);
    setMinutes(0);
    setIsOn(false);
  };

  return (
    <div
      style={{
        border: "5px solid #000000",
        maxWidth: "25vw",
        minHeight: "20vh",
        paddingTop: "20px",
      }}
      className={classes.root}
    >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12}>
          <div className="time-display">
            {hours < 10 ? `0${hours}` : hours}:
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="timer-button-container">
            <TimerButton
              className="start-timer"
              buttonAction={startTimer}
              buttonValue={"Start"}
            />
            <TimerButton
              className="stop-timer"
              buttonAction={stopTimer}
              buttonValue={"stop"}
            />
            <TimerButton
              className="reset-timer"
              buttonAction={resetTimer}
              buttonValue={"Reset"}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Timer;
