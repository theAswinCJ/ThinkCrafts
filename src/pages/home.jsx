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

import HomeCard from "../components/HomeCard";

import "../Utils/colors";
import colors from "../Utils/colors";

export default () => {
  return (
    <Page name="home">
      {/* Top Navbar */}
      <h1
        style={{
          margin: "10% 4%"
        }}
      >
        My Channels
      </h1>
      <div
        id="HomeCardGroup"
        style={{
          display: "grid",
          gridTemplateColumns: "30% 30% 30%",
          gridGap: "10px",
          justifyItems: "center",
          marginLeft: "4%"
        }}
      >
        <HomeCard emoji="1️⃣" text="Card1" color={colors.blue} />
        <HomeCard emoji="2️⃣" text="Card2" color={colors.green} />
        <HomeCard emoji="3️⃣" text="Card3" color={colors.red} />
        <HomeCard emoji="4️⃣" text="Card4" color={colors.tuscany} />
        <HomeCard emoji="5️⃣" text="Card5" color={colors.orange} />
        <HomeCard emoji="6️⃣" text="Card6" color={colors.romna} />
        <HomeCard emoji="7️⃣" text="Card7" color={colors.cyan} />
        <HomeCard emoji="8️⃣" text="Card8" color={colors.pastelGrey} />
        <HomeCard emoji="9️⃣" text="Card9" color={colors.darkBlue} />
      </div>
      {/* Page content */}
    </Page>
  );
};
