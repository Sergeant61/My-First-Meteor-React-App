import React from "react";
import { AppUtil } from "/lib/utils/app-util/client";
import { useTracker } from "meteor/react-meteor-data";

const Hello = () => {
  const count = useTracker(() => {
    return AppUtil.temp.get("count");
  });

  const increment = () => {
    AppUtil.temp.set("count", parseInt(count + "") + 1);
  };

  return (
    <div>
      <p>You've pressed the button {count} times.</p>
      <button onClick={increment} className="btn btn-primary">
        Add
      </button>
    </div>
  );
};

export default Hello;