import React from "react";
import { mount } from "react-mounter";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

import { MainLayout } from "/client/public/layouts/index";

import Home from "/client/public/pages/home/index";
import Hello from "/client/public/pages/hello/index";
import About from "/client/public/pages/about/index";

FlowRouter.route("/", {
    name: "home",
    action() {
        mount(MainLayout, { content: () => <Home />, navbar: () => <Hello />, footer: () => <About />, });
    },
});

FlowRouter.route("/about", {
    name: "about",
    action() {
        mount(MainLayout, {
            content: () => <About />
        });
    },
});