import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { AppUtil } from "/lib/utils/app-util/client";
import { Meteor } from "meteor/meteor";

function About({ conut }) {
  return <h1>Hello {conut}</h1>;
}

export default withTracker(() => {
  return {
    conut: AppUtil.temp.get("count"),
  };
})(About);
