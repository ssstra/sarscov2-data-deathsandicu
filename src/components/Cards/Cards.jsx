import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import cx from "classnames";
import CountUp from "react-countup";

const Cards = ({ data }) => {
  if (data === null) {
    return "Loading ...";
  }

  const { allDeaths, allIcubeds } = Object.values(data).reduce(
    (result, datum) => {
      result.allDeaths += datum.deaths;
      result.allIcubeds += datum.icubeds;

      return result;
    },
    { allDeaths: 0, allIcubeds: 0 }
  );

  console.log(allDeaths, allIcubeds);
  console.log(styles);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={4}
          className={cx(styles.card, styles.allDeaths)}
        >
          <CardContent>
            Today's Number of Deaths Attributed to Covid-19 As Cause of
            Mortality
            <br />
            <br />
            <Typography variant="h5">
              <CountUp start={0} end={allDeaths} duration={1.5} separator="," />{" "}
              Deaths
            </Typography>
            {/* <Typography color="textSecondary">
              {new Date(lastUpdated).toDateString()}
            </Typography> */}
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={4}
          className={cx(styles.card, styles.allIcubeds)}
        >
          <CardContent>
            Today's Number of Covid-19 Patients Currently Hospitalized in the
            ICU
            <br />
            <br />
            <Typography variant="h5">
              <CountUp
                start={0}
                end={allIcubeds}
                duration={1.5}
                separator=","
              />{" "}
              Patients
            </Typography>
            {/* <Typography color="textSecondary">
              {new Date(lastUpdated).toDateString()}
            </Typography> */}
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
