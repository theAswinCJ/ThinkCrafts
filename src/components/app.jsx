import React from "react";
import {
  App,
  Panel,
  Views,
  View,
  Statusbar,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from "framework7-react";

import cordovaApp from "../js/cordova-app";
import routes from "../js/routes";

import { Player } from "video-react";

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        id: "io.riatech.crafts7", // App bundle ID
        name: "Crafts DIY", // App name
        theme: "auto", // Automatic theme detection
        // App root data
        data: function() {
          return {
            user: {
              firstName: "John",
              lastName: "Doe"
            },
            // Demo products for Catalog section
            products: [
              {
                id: "1",
                title: "Apple iPhone 8",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."
              },
              {
                id: "2",
                title: "Apple iPhone 8 Plus",
                description:
                  "Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"
              },
              {
                id: "3",
                title: "Apple iPhone X",
                description:
                  "Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."
              }
            ]
          };
        },

        // App routes
        routes: routes,

        // Input settings
        input: {
          scrollIntoViewOnFocus: this.$device.cordova && !this.$device.electron,
          scrollIntoViewCentered: this.$device.cordova && !this.$device.electron
        },
        // Cordova Statusbar settings
        statusbar: {
          overlay: (this.$device.cordova && this.$device.ios) || "auto",
          iosOverlaysWebView: true,
          androidOverlaysWebView: false
        }
      },
      // Login screen demo data
      username: "",
      password: ""
    };
  }

  render() {
    screen.orientation.onchange = () => {
      if (screen.orientation.type === "portrait") {
        let tabBar = document.getElementById("toolbarMain");
        tabBar.style.display = "block";
        this.player.toggleFullscreen();
      } else if (screen.orientation.type === "landscape") {
        let tabBar = document.getElementById("toolbarMain");
        tabBar.style.display = "none";
        this.player.toggleFullscreen();
      }
    };
    return (
      <App params={this.state.f7params}>
        {/* Status bar overlay for fullscreen mode*/}
        <Statusbar />

        {/* Left panel with cover effect*/}

        {/* Views/Tabs container */}
        <Views tabs className="safe-areas">
          {/* Tabbar for switching views-tabs */}
          <Toolbar tabbar labels bottom id="toolbarMain">
            <Link
              tabLink="#view-settings"
              iconIos="f7:person_round_fill"
              iconAurora="f7:person_round_fill"
              iconMd="f7:person_round_fill"
              text="Settings"
            />

            <Link
              tabLink="#view-remote"
              tabLinkActive
              iconIos="f7:tickets_fill"
              iconAurora="f7:tickets_fill"
              iconMd="f7:tickets_fill"
              text="Watch"
            />
            <Link
              tabLink="#view-favorites"
              iconIos="f7:heart_fill"
              iconAurora="f7:heart_fill"
              iconMd="f7:heart_fill"
              text="Favorites"
            />
          </Toolbar>

          <Player
            fluid={true}
            autoPlay
            playsInline
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            ref={player => {
              this.player = player;
            }}
          />

          {/* Settings View */}
          <View id="view-settings" name="settings" tab url="/settings/" />

          {/* Home Remote */}
          <View id="view-remote" main tab tabActive url="/" />

          {/* Catalog View */}
          <View id="view-favorites" name="catalog" tab url="/favorites/" />
        </Views>
      </App>
    );
  }

  alertLoginData() {
    this.$f7.dialog.alert(
      "Username: " +
        this.state.username +
        "<br>Password: " +
        this.state.password
    );
  }
  componentDidMount() {
    this.$f7ready(f7 => {
      // Init cordova APIs (see cordova-app.js)
      if (f7.device.cordova) {
        cordovaApp.init(f7);
      }
      // Call F7 APIs here
    });
  }
}
