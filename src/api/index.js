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

// export const fetchStates = async () => {
//   try {
//     // const {
//     //   data: { states },
//     // } = await axios.get(`${url}/states`);

//     // return states.map((state) => state.name);

//     return ["AK"];
//   } catch (error) {}
// };

// export const fetchData = async () => {
//   try {
//     const { data } = await axios.get(url);

//     const final = data
//       .map((item) => item.state)
//       .reduce((statesValue, state, index) => {
//         return {
//           ...statesValue,
//           [state]: {
//             deaths: data[index].actuals.newDeaths,
//             icubeds: data[index].actuals.icuBeds.currentUsageCovid,
//           },
//         };
//       }, {});

//     return final;
//   } catch (error) {}
// };

// async function __fetchData() {
//   try {
//     const { data } = await axios.get(url);

//     return data.reduce((result, datum) => {
//       return {
//         ...result,
//         [datum.state]: {
//           deaths: datum.actuals.newDeaths,
//           icubeds: datum.actuals.icuBeds.currentUsageCovid,
//         },
//       };
//     }, {});
//   } catch (error) {}
// }
