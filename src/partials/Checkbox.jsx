import React, { useState } from "react";

import { useBuyerFlow } from "../context/buyerFlow";

const Checkbox = ({ data }) => {
  const { config, setConfig } = useBuyerFlow();
  const { selectedActivities } = config;

  const onPress = (idx) => {
    const newSetInstance = new Set([...selectedActivities]);

    selectedActivities.has(idx)
      ? newSetInstance.delete(idx)
      : newSetInstance.add(idx);

    setConfig({ ...config, selectedActivities: newSetInstance });
  };

  const Row = ({ title, index }) => {
    return (
      <div
        onClick={() => onPress(index)}
        className={`relative flex items-start px-8 py-2 rounded-lg border-gray-200 mt-6 shadow-md duration-300 border-[1.5px] hover:shadow-xl ${
          selectedActivities.has(index) && "border-teal-400"
        }`}
      >
        <div className="flex items-center h-5">
          <input
            onChange={() => onPress(index)}
            checked={selectedActivities.has(index)}
            aria-describedby="comments-description"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 from-blue-500 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label className="font-medium text-gray-700">{title}</label>
        </div>
      </div>
    );
  };

  return (
    <div>
      <legend className="sr-only">Notifications</legend>
      {data.map((props, index) => (
        <Row key={index} {...props} index={index} />
      ))}
    </div>
  );
};

export default Checkbox;
