import React from "react";
import { Cards, Chart, StateSelector } from "./components/";
import styles from "./App.module.css";
import { fetchData } from "./api";
import { DateTime } from "luxon";

class App extends React.Component {
  state = {
    // data: null,
    data: {},
    dailyData: {},
    state: "",
    states: [],
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
    });
  }

  handleStateChange = async (state) => {
    this.setState({ state: state });
  };

  render() {
    const { data, state } = this.state;
    let realData = data;

    if (state) {
      realData = Object.fromEntries(
        Object.entries(realData).filter(([state_]) => state_ === state)
      );
    }

    const states = Object.keys(data);

    return (
      <>
        <div className={styles.container}>
          <div className={styles.headtitles}>
            <h1>
              U.S. Daily Covid Deaths & Currently Occupied Staffed ICU Beds
            </h1>
            <div>
              <h3>
                <span className={styles.italics}>
                  Using data from{" "}
                  <a
                    href="https://covidactnow.org"
                    data-content="covidactnow.org"
                  >
                    covidactnow.org
                  </a>{" "}
                  (which aggregates multiple state and federal sources).
                </span>
                <span>
                  Last Updated: &nbsp;
                  {DateTime.now().toLocaleString(DateTime.DATE_MED)}
                </span>
              </h3>
            </div>
          </div>
          <Cards data={realData} />
          <StateSelector
            handleStateChange={this.handleStateChange}
            states={states}
          />
          <Chart className={styles.theChart} data={realData} state={state} />
        </div>
        <div className={styles.footer}>
          Made using ReactJS. Created in 2022.{" "}
          <a href="https://ssxrs.dev" data-content="Contact Me.">
            Contact Me.
          </a>{" "}
        </div>
      </>
    );
  }
}

export default App;
