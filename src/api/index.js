import axios from "axios";

const url =
  "https://api.covidactnow.org/v2/states.timeseries.json?apiKey=884a3832443f4ac39a71761cbedbb639";

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
