import React from "react";
import { Tab } from "semantic-ui-react";
import ImagePane from "./imagesELement/imagePane";
import VideoPane from "./videosElement/videoPane";

const panes = [
  {
    menuItem: "Search Images",
    render: () => (
      <Tab.Pane>
        <ImagePane />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Search Videos",
    render: () => (
      <Tab.Pane>
        <VideoPane />
      </Tab.Pane>
    ),
  },
];

const TabContainer = () => <Tab panes={panes} />;

export default TabContainer;
