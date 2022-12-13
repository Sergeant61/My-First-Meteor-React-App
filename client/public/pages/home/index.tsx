import React from "react";
import { AppUtil } from "/lib/utils/app-util/client";
import { useTracker } from "meteor/react-meteor-data";

const Home = () => {
  const count = useTracker(() => {
    return AppUtil.temp.get("count");
  });

  return (
    <div>
      <h1>Home/ {count}</h1>
    </div>
  );
};

export default Home;
