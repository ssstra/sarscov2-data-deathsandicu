import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./StateSelector.module.css";

const StateSelector = ({ handleStateChange, states }) => {
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleStateChange(e.target.value)}
      >
        <option value="">All States (default)</option>
        {states.map((state, i) => (
          <option key={i} value={state}>
            {state}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default StateSelector;
