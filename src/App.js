import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { withRouter, Route, Link } from "react-router-dom";
import ActionIcons from "./components/ActionIcons";
import AlertIcons from "./components/AlertIcons";
import AvIcons from "./components/AvIcons";
import CommunicationIcons from "./components/CommunicationIcons";
import ContentIcons from "./components/ContentIcons";
import DeviceIcons from "./components/DeviceIcons";
import EditorIcons from "./components/EditorIcons";
import FileIcons from "./components/FileIcons";
import HardwareIcons from "./components/HardwareIcons";
import ImageIcons from "./components/ImageIcons";
import MapsIcons from "./components/MapsIcons";
import NavigationIcons from "./components/NavigationIcons";
import NotificationIcons from "./components/NotificationIcons";
import PlacesIcons from "./components/PlacesIcons";
import SocialIcons from "./components/SocialIcons";
import ToggleIcons from "./components/ToggleIcons";
import FloatingActionButton from "material-ui/FloatingActionButton";
import NavigationArrowUpward from "material-ui/svg-icons/navigation/arrow-upward";
import "./App.css";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import NavigationMenu from "material-ui/svg-icons/navigation/menu";

const places = [
  {
    label: "action",
    path: "/material-ui/svg-icons/action",
    component: ActionIcons
  },
  {
    label: "alert",
    path: "/material-ui/svg-icons/alert",
    component: AlertIcons
  },
  {
    label: "av",
    path: "/material-ui/svg-icons/av",
    component: AvIcons
  },
  {
    label: "communication",
    path: "/material-ui/svg-icons/communication",
    component: CommunicationIcons
  },
  {
    label: "content",
    path: "/material-ui/svg-icons/content",
    component: ContentIcons
  },
  {
    label: "device",
    path: "/material-ui/svg-icons/device",
    component: DeviceIcons
  },
  {
    label: "editor",
    path: "/material-ui/svg-icons/editor",
    component: EditorIcons
  },
  {
    label: "file",
    path: "/material-ui/svg-icons/file",
    component: FileIcons
  },
  {
    label: "hardware",
    path: "/material-ui/svg-icons/hardware",
    component: HardwareIcons
  },
  {
    label: "image",
    path: "/material-ui/svg-icons/image",
    component: ImageIcons
  },
  {
    label: "maps",
    path: "/material-ui/svg-icons/maps",
    component: MapsIcons
  },
  {
    label: "navigation",
    path: "/material-ui/svg-icons/navigation",
    component: NavigationIcons
  },
  {
    label: "notification",
    path: "/material-ui/svg-icons/notification",
    component: NotificationIcons
  },
  {
    label: "places",
    path: "/material-ui/svg-icons/places",
    component: PlacesIcons
  },
  {
    label: "social",
    path: "/material-ui/svg-icons/social",
    component: SocialIcons
  },
  {
    label: "toggle",
    path: "/material-ui/svg-icons/toggle",
    component: ToggleIcons
  }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.gotoTop = this.gotoTop.bind(this);

    window.onscroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        document.getElementById("btnTop").style.display = "block";
      } else {
        document.getElementById("btnTop").style.display = "none";
      }
    };
  }

  gotoTop(e) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {
    let items = places.map(place => {
      return (
        <li>
          <Link to={place.path}>{place.label}</Link>
        </li>
      );
    });

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title={this.props.location.pathname}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <div style={{ display: "flex", top: 1000 }}>
            <div
              style={{
                padding: "10px",
                width: "40%",
                background: "#f0f0f0"
              }}
            >
              <ul>{items}</ul>
            </div>
            {places.map((route, index) => (
              <Route
                exact
                key={index}
                path={route.path}
                component={route.component}
              />
            ))}
            <Route path="/" />
          </div>
          <button id="btnTop" onClick={this.gotoTop}>
            <NavigationArrowUpward />
          </button>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
