import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { AppUtil } from "/lib/utils/app-util/client";

function About({ conut }: any) {
  return <h1>About Page {conut}</h1>;
}

export default withTracker(() => {
  return {
    conut: AppUtil.temp.get("count"),
  };
})(About);
