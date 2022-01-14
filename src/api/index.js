import axios from "axios";

const url = "https://api.covidactnow.org/v2/states.timeseries.json?apiKey=";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);

    return data.reduce((result, datum) => {
      return {
        ...result,
        [datum.state]: {
          deaths: datum.actuals.newDeaths,
          icubeds: datum.actuals.icuBeds.currentUsageCovid,
        },
      };
    }, {});
  } catch (error) {}
};
