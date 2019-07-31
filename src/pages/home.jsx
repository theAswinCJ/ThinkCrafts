import React from "react";
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button
} from "framework7-react";

import Plyr from "react-plyr";

export default () => (
  <Page name="home">
    {/* Top Navbar */}
    <Plyr
      type="youtube" // or "vimeo"
      videoId="Yz7SHOa_YS0"
      autoplay
      controls="true"
      height="240px"
    />

    {/* Page content */}
  </Page>
);
